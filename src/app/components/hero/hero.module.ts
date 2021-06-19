import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [HeroComponent],
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ]
})
export class HeroModule { }
