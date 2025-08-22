import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Carrito } from './pages/carrito/carrito';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'productos', component: Products},
    {path: 'nosotros', component: About},
    {path: 'contacto', component: Contact},
    {path: 'carro', component: Carrito},
    {path: '**', redirectTo:''}
];
