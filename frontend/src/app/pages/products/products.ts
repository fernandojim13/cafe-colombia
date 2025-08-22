import { Component, OnInit } from '@angular/core';
import { Cafeproductos } from '../../interfaces/cafeproducts';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
listaproductos:Cafeproductos[]=[
  {
    id: 1,
    name:'Café Arábica Premium',
    stock:5000,
    description:'Un café de sabor suave y aromático, con notas florales y frutales. Ideal para quienes buscan un sabor delicado',
    image:'empaque1.jpg',
    price:12
  },
  {
    id: 2,
    name:'Café Robusta Intenso',
    stock:300,
    description:'Un café con mucho cuerpo y sabor fuerte, perfecto para los amantes de los sabores intensos y un toque amargo',
    image:'robusta1.jpg',
    price:10
  },
  {
    id: 3,
    name:'Mezcla de la Casa',
    stock:2500,
    description:'Una mezcla especial con granos tostados oscuros, que ofrece un sabor a chocolate y caramelo con un final ahumado',
    image:'delacasa.jpg',
    price:14
  }
]
constructor(){

}

ngOnInit(): void {
  
}
}
