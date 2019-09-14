import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback' ;
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http' ;
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl' ;

@Injectable()
export class FeedbackService {
  constructor(private http : HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback :Feedback) :Observable<Feedback>{
    return this.http.post<Feedback>(baseURL + 'feedback' , feedback)
    .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));


}
}

