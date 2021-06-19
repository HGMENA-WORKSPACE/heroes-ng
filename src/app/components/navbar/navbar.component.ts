import { Component } from '@angular/core';
import { config } from '../../config';
import { RequestService } from '../../services/request/request.service';
import { Heroe } from '../../interface/heroe';
import { UtilsService } from '../../services/utils/utils.service';
import {
  editorials,
  routesComponents,
  shareNames,
  navigate,
} from '../../const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  routes = routesComponents;
  editoriales = editorials;
  heroes: Heroe[];
  heroesCopy: Heroe[];

  constructor(
    private requestService: RequestService,
    private utilsService: UtilsService
  ) {}

  loadForEditorial(event) {
    this.requestService.get(config.ENDPOINTS.all).subscribe(
      (res) => {
        this.heroes = res.filter((h: Heroe) =>
          h.biography.publisher ? h.biography.publisher.startsWith(event) : null
        );
        this.heroesCopy = this.heroes;
        this.utilsService.shareSetData(shareNames.heroe, this.heroes);
        this.goTo(navigate[event]);
      },
      (err) => console.warn
    );
  }

  goTo(event: string) {
    this.utilsService.navigateTo(event);
  }

  searchHero(event) {
    if (this.heroesCopy) {
      this.heroes = this.heroesCopy.filter((h: Heroe) =>
        h.name ? h.name.toLowerCase().includes(event.toLowerCase()) : null
      );
      this.utilsService.shareSetData(shareNames.heroe, this.heroes);
      this.utilsService.reloadNavigate();
    }
  }
}
