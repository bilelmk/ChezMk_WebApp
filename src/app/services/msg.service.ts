import { Injectable } from '@angular/core';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {Msg} from '../shared/msg';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private processHTTPMsgService: ProcessHTTPMsgService
    , private http: HttpClient) {
  }


  postMsg(msg: Msg): Observable<Msg> {
    return this.http.post<Msg>(baseURL + 'msg', msg)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}
