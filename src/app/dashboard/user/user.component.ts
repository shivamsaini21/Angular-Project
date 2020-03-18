import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../service/hero.service'
import { identifierName } from '@angular/compiler';
import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(private heroService:HeroService,
    private newservice : HeroService)
   { }
  ngOnInit(): void {
    this.getUser();
  }
  getUser=()=>{
    this.heroService.getUser().subscribe((res)=>{
    console.log(res);
    this.user=res.data;
    })
  } 

  deluser(id) {
      this.newservice.userDelete(id).subscribe((res)=>{
      
        console.log('user deleted!')
        //   this.adduser.getUser().subscribe((res)=> {
        //    this.user=res;
  
        // this.msg.success("User Deleted");
        //  })
       });
      }
    }