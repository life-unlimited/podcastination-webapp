import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './utils/angular-material.module';
import { EmbedComponent } from './components/embed/embed.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    EmbedComponent,
    NotFoundComponent
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
