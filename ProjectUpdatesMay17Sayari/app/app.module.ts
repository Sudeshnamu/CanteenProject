import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { CustomerComponent } from './customer/customer.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { MenuComponent } from './menu/menu.component';
const appRoutes : Routes=[
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
  {path:'employ',component:EmployComponent,outlet:'data'},
   {path:'employ-search',component:EmploySearchComponent,outlet:'data'},
   {path:'customer',component:CustomerComponent,outlet:'data'},
   {path:'customer-search',component:CustomerSearchComponent,outlet:'data'},
   {path:'user',component:UserComponent,outlet:'data'},
   {path:'user-search',component:UserSearchComponent,outlet:'data'},
  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    CustomerComponent,
    EmploySearchComponent,
    CustomerSearchComponent,
    UserSearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }