import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(protected translate: TranslateService) {}

  ngOnInit(): void {
    const lenguaje = config.LANGUAJES[navigator.language];
    this.translate.use(lenguaje);
  }
}
