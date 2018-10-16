import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import{ Observable } from 'rxjs' ;
import {  Restangular} from 'ngx-restangular' ;

import { map } from 'rxjs/operators'






@Injectable()
export class LeaderService {

  constructor(private processHTTPMsgService :ProcessHTTPMsgService
    ,private restangular : Restangular) {   }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList() ;
  }

  getLeader(id: number): Observable<Leader> {
    return  this.restangular.one('leaders',id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured:true}).pipe(map(leaders => leaders[0]));
  }

}
