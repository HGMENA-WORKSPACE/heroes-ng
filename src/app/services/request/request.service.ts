import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    return this.http
      .get(endpoint)
      .pipe(
        map((res: HttpResponse<any>) => {
          return res;
        })
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          throw err;
        })
      );
  }
}
