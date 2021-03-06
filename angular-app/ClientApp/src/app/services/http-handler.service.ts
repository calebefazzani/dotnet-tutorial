import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  private baseUrl:string;

  constructor(private http:HttpClient, @Inject('BASE_URL') baseUrl:string) { 
    console.log(baseUrl);
    this.baseUrl = baseUrl;
  }

  doGet<T>(url:string): Observable<T> {
    const URL = `${this.baseUrl}${url}`;
    console.log('A', url)
    return this.http.get<T>(URL)
    .pipe(
      tap(res => console.log('ok', res)),
      catchError(({error}) => throwError(error))
    );
  }
}
