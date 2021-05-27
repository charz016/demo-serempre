import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselProductComponent } from './carrousel-product.component';



@NgModule({
  declarations: [
    CarrouselProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarrouselProductComponent
  ]
})
export class CarrouselProductModule { }
