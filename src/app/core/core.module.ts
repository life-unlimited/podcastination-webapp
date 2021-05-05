import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './utils/angular-material.module';
import { EmbedComponent } from './components/embed/embed.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';


@NgModule({
  declarations: [
    EmbedComponent,
    NotFoundComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class CoreModule {
}
