import { RequestService } from './request.service';
import { Mock } from 'ts-mockery';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('RequestService', () => {
  beforeEach(setFixture);
  it('should be created', shouldCreated);
  it('get()', get);

  Mock.configure('jest');
  let service: RequestService;
  let http: HttpClient;

  async function setFixture() {
    http = Mock.of<HttpClient>({
      get: () => of(),
    });
    service = new RequestService(http);
  }

  async function shouldCreated() {
    expect(service).toBeTruthy();
  }

  async function get() {
    service.get('');
    expect(http.get).toHaveBeenCalled();
  }
});
