import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DashboardComponent} from './dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import{ MyprofileComponent } from './myprofile/myprofile.component';
import{ AddUserComponent } from './adduser/adduser.component';
import{ AddproductComponent} from './addproduct/addproduct.component';
const routes: Routes = [{
  path:'',component:DashboardComponent
},
{
  path:'user',component:UserComponent
},
{
  path:'product',component:ProductComponent
},
{
  path:'myprofile',component:MyprofileComponent
},
{
  path:'adduser',component:AddUserComponent
},
{
  path:'addproduct',component:AddproductComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
