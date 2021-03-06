import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$:Observable<Usuario[]>;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsuarios();
  }

}
