import { AppComponent } from './app.component';
import { Mock } from 'ts-mockery';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);
  it('ngOnInit()', ngOnInit);

  Mock.configure('jest');
  let component: AppComponent;
  let translate: TranslateService;

  async function setFixture() {
    translate = Mock.of<TranslateService>({
      use: () => of(),
    });
    component = new AppComponent(translate);
  }

  async function shouldCreated() {
    expect(component).toBeTruthy();
  }

  async function ngOnInit() {
    component.ngOnInit();
    expect(translate.use).toHaveBeenCalled();
  }
});
