import { Mock } from 'ts-mockery';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);
  it('getHeroeButtonName(), should be created', getHeroeButtonName);

  Mock.configure('jest');
  let component: HeroComponent;

  async function setFixture() {
    component = new HeroComponent();
  }

  async function shouldCreated() {
    expect(component).toBeTruthy();
  }

  async function getHeroeButtonName() {
    expect(component.getHeroeButtonName()).toEqual('HEROEAPP.BACK');
  }
});
