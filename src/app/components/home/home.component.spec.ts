import { HomeComponent } from './home.component';
import { Mock } from 'ts-mockery';

describe('HomeComponent', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);

  Mock.configure('jest');

  let component: HomeComponent;

  async function setFixture() {
    component = new HomeComponent();
  }

  async function shouldCreated() {
    expect(component).toBeTruthy();
  }
});
