import { Injectable } from '@angular/core';
import { UserComponent } from '../dashboard/user/user.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }
  //  showTodayDate() :any{
  //     [{name:'a'}]
  //     return name;
  //  }
  getProduct() :Observable<any>{
    return this.http.get('http://localhost:1337/product/list')
  }
  getUser() :Observable<any>{
    return this.http.get('http://localhost:1337/user/list')
  }
  userDelete(id) :Observable<any>{
   return this.http.delete('http://localhost:1337/user/delete',id)
  }
  registerUser(data): Observable<any> {
        return this.http.post('http://localhost:1337/user/register/',data);
  }
}

