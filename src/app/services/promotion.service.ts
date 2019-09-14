import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Observable } from 'rxjs' ;
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { map , catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http' ;
import { baseURL }  from '../shared/baseurl' ;

@Injectable()
export class PromotionService {

  constructor(private processHTTPMsgService :ProcessHTTPMsgService
    ,private http : HttpClient) {   }

    getPromotions(): Observable<any[]> {
      return this.http.get<any[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));

    }
  
    getPromotion(id: number): Observable<Promotion> {
      return this.http.get<Promotion>(baseURL + 'promotions' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getFeaturedPromotion(): Observable<Promotion> {
      return this.http.get<Promotion[]>(baseURL + 'Promotions?featured=true')
      .pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }


}
