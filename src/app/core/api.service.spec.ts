import { inject, async, TestBed } from '@angular/core/testing';
import { Http, ResponseOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

describe('ApiSevive', () => {
  let http, api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ApiService,
      {
        provide: Http,
        useFactory: () => jasmine.createSpyObj('Http', ['get'])
      }]
    });
  });

  beforeEach(inject([ApiService, Http], (apiService, httpService) => {
    api = apiService;
    http = httpService;
  }));

  it('should make get request', async(() => {
     let response = {notes: [1, 2, 3]};

    http.get.and.returnValue(Observable.from([new Response(
      new ResponseOptions({body: JSON.stringify(response), status: 200})
    )]));

     api.get('/notes')
     .subscribe((res: Response) => {
       expect(res.json()).toEqual(response);
     });

  }));
});
