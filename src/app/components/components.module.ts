import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsRoutes } from './components.router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes)
  ]
})
export class ComponentsModule { }
