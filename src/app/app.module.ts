import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish/dish.component';
import { MenuComponent } from './menu/menu/menu.component';
import { OrderComponent } from './order/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    MenuComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
