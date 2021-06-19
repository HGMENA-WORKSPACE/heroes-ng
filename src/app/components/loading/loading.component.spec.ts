import { LoadingComponent } from './loading.component';
import { Mock } from 'ts-mockery';

describe('LoadingComponent', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);

  Mock.configure('jest');
  let component: LoadingComponent;

  async function setFixture() {
    component = new LoadingComponent();
  }

  async function shouldCreated() {
    expect(component).toBeTruthy();
  }
});
