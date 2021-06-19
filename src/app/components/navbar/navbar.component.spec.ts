import { NavbarComponent } from './navbar.component';
import { Mock } from 'ts-mockery';
import { RequestService } from '../../services/request/request.service';
import { UtilsService } from '../../services/utils/utils.service';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);
  it('loadForEditorial(), check the call of service', loadForEditorial);
  it('goTo(), go to navigation', goTo);
  it('searchHero(), search a Hero', searchHero);

  Mock.configure('jest');

  let component: NavbarComponent;
  let requestService: RequestService;
  let utilsService: UtilsService;

  async function setFixture() {
    requestService = Mock.of<RequestService>({
      get: () => of(),
    });
    utilsService = Mock.of<UtilsService>({
      navigateTo: () => jest.fn(),
    });
    component = new NavbarComponent(requestService, utilsService);
  }

  async function shouldCreated() {
    expect(component).toBeTruthy();
  }

  async function loadForEditorial() {
    component.loadForEditorial('D');
    expect(requestService.get).toHaveBeenCalled();
  }

  async function goTo() {
    component.goTo('');
    expect(utilsService.navigateTo).toHaveBeenCalled();
  }

  async function searchHero() {
    component.searchHero('');
    expect(component.heroes).toBeUndefined();
  }
});
