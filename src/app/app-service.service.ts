import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserItemModel } from './UserItemModel';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  private baseUrl="http://localhost:8081/divcon/"
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${(this.baseUrl)+"users"}`);
  }
  
  createUser(user: User):Observable<Object>{
    return this.http.post(`${(this.baseUrl)+"saveuser"}`,user,{responseType:'text' as 'json'});
  }


  createUserItem(userItem: UserItemModel):Observable<Object>{
    return this.http.post(`${(this.baseUrl)+"saveuseritems"}`,userItem);
  }


  getEveryoneTotalExpenditureByTripName(tripName:String){
    return this.http.get(`${(this.baseUrl)+"totalexpenditure/"+tripName}`)
  }

  getEveryOneShareByTripName(tripName:String){
    return this.http.get(`${(this.baseUrl)+"share/"+tripName}`)
  }

  getAllTripNames(){
    return this.http.get(`${(this.baseUrl)+"trips"}`)
  }

}
