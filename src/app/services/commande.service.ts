import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
url ='http://localhost:3000/commandes';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<MyInterface>(this.url);
  }

  delete(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  /*delete(commandes:any)
  {
    return this.http.delete<MyInterface>(this.url+'/'+commandes.id);

  }*/

  postCo(commandes: any){
    return this.http.post<MyInterface>(this.url,commandes);
  }

  update(commandes:any){
    return this.http.put(`${this.url}/${commandes.id}`,commandes);

  }








}
