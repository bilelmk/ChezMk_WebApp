import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs' ;
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map,catchError } from 'rxjs/operators'


@Injectable()
export class LeaderService {

  constructor(private processHTTPMsgService :ProcessHTTPMsgService
    ,private http: HttpClient) {   }

 
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
      .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  }
  
  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true')
      .pipe(map(leaders => leaders[0]))    
      .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  }

}
