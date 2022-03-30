import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  public variable:any;

  postform(data:any){
  return this.http.post<any>("http://localhost:3000/userList/",data);
  }
  getform(){
  return this.http.get<any>("http://localhost:3000/userList/");
  }
}
