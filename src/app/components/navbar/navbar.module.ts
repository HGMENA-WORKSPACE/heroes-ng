import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { NavbarComponent } from './navbar.component';
import { RequestService } from '../../services/request/request.service';

@NgModule({
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  imports: [CommonModule, TranslateModule.forChild()],
  providers: [RequestService],
})
export class NavbarModule {}
