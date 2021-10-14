import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent} from './cabecera/cabecera.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { PrincipalComponent} from './principal/principal.component';

import {ArticuloService} from './articulos/articulo.service';

import {RouterModule,Routes} from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path: 'articulos', component:ArticuloComponent},
  {path: 'home', component:PrincipalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ArticuloComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ArticuloService],
  bootstrap: [AppComponent,CabeceraComponent,ArticuloComponent,PrincipalComponent]
})
export class AppModule { }
