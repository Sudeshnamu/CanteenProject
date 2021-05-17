import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : Http) { }
  searchUsers(id:number):Observable<User>{
    return this._http.get("https://jsonplaceholder.typicode.com/users/"+id).
    map((res:Response)=>res.json())
   }
  showUsers() : Observable<User[]> {
    return this._http.get("https://jsonplaceholder.typicode.com/users").
    map((res:Response)=>res.json())
  }
}
