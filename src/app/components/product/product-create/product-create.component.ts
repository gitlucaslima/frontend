import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  proplegal = "qualquer"

  fazerAlgo(): void{
    console.log('Fazer algo')
  }
  
}
