import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../service/hero.service'
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  

})
export class ProductComponent implements OnInit {
  products=[];
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getProduct(); 
  }
  getProduct=()=>{
  this.heroService.getProduct().subscribe((res)=>{
  console.log(res);
  this.products=res;
  })
  }
}
