import { UtilsService } from './utils.service';
import { Mock } from 'ts-mockery';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('UtilsService', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);
  it('navigateTo()', navigateTo);

  Mock.configure('jest');
  let service: UtilsService;
  let router: Router;

  async function setFixture() {
    router = Mock.of<Router>({
      navigate: () => of().toPromise(),
    });
    service = new UtilsService(router);
  }

  async function shouldCreated() {
    expect(service).toBeTruthy();
  }

  async function navigateTo() {
    service.navigateTo('');
    expect(router.navigate).toHaveBeenCalled();
  }
});
