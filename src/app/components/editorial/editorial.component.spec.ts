import { Router } from '@angular/router';
import { EditorialComponent } from './editorial.component';
import { UtilsService } from '../../services/utils/utils.service';
import { Mock } from 'ts-mockery';

describe('EditorialComponent', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);

  Mock.configure('jest');

  let component: EditorialComponent;
  let router: Router;
  let utilsService: UtilsService;

  async function setFixture() {
    router = Mock.of<Router>();
    utilsService = Mock.of<UtilsService>();
    component = new EditorialComponent(router, utilsService);
  }

  async function shouldCreated() {
    expect(component).toBeTruthy();
  }
});
