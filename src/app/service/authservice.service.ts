import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import{Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authservice  implements CanActivate
{
 
  constructor(private router: Router) {   }
  canActivate()
  {
    if(localStorage.getitem('key')){
      return this.router.navigateByUrl('/dashboard');
    }
    else return this.router.navigateByUrl('/login');
    
    return true
  }
}
