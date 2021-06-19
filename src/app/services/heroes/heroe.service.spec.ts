import { HeroeService } from './heroe.service';
import { Mock } from 'ts-mockery';

describe('HeroeService', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);
  it('reloadHeroes()', reloadHeroes);
  it('loadHeroe()', loadHeroe);

  Mock.configure('jest');
  let service: HeroeService;

  async function setFixture() {
    service = new HeroeService();
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  async function shouldCreated() {
    expect(service).toBeTruthy();
  }

  async function reloadHeroes() {
    expect(service.reloadHeroes()).toEqual([]);
  }

  async function loadHeroe() {
    expect(service.loadHeroe(1)).toBeUndefined();
  }
});
