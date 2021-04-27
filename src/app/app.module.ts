import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { ChiefComponent } from './chief/chief.component';
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FinishComponent } from './finish/finish.component';

const appRoutes: Routes = [
  {path:'', component: LandingPageComponent} ,
  {path:'customer', component: CustomerComponent},
  {path:'chief', component: ChiefComponent},
  {path:'contact', component: ContactComponent},
  {path:'orderd-item', component: OrderedItemsComponent},
  {path:'about', component: AboutComponent},
  {path:'finish', component: FinishComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CustomerComponent,
    ChiefComponent,
    OrderedItemsComponent,
    AboutComponent,
    ContactComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
