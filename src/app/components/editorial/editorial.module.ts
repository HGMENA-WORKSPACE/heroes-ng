import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
/* */
import { HeroModule } from '../hero/hero.module';
import { EditorialComponent } from '../../components/editorial/editorial.component';

@NgModule({
  exports: [EditorialComponent],
  declarations: [EditorialComponent],
  imports: [
    HeroModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditorialComponent,
      }
    ]),
  ]
})
export class EditorialModule { }
