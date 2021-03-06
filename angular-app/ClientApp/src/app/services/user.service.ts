import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'User';

  constructor(private http:HttpHandlerService) { }

  getUsuarios():Observable<Usuario[]> {
    return this.http.doGet<Usuario[]>(this.API_URL)
  }
}
