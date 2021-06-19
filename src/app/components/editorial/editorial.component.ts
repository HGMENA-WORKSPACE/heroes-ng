import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UtilsService } from '../../services/utils/utils.service';
import { shareNames, routesComponents } from '../../const';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  heroes: [];

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url !== `/${routesComponents.home}`) {
        this.heroes = this.utilsService.shareGetData(shareNames.heroe);
      }
    });
  }

}
