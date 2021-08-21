import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postPerson(data:any){
  return this.http.post<any>("http://localhost:3000/posts/",data)
  .pipe(map((res:any)=>{
    return res;
  }))
  }
getPerson(){
  return this.http.get<any>("http://localhost:3000/posts/")
  .pipe(map((res:any)=>{
    return res;
  }))
  
}
updatePerson(data:any,id:number){
return this.http.put<any>("http://localhost:3000/posts/"+id,data)
.pipe(map((res:any)=>{
  return res;
}))
}
deletePerson(id:number){
return this.http.delete<any>("http://localhost:3000/posts/"+id)
.pipe(map((res:any)=>{
  return res;
}))
}
}
