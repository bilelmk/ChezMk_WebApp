import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback' ;
import {  Restangular} from 'ngx-restangular' ;
import { Observable } from 'rxjs';


@Injectable()
export class FeedbackService {
  constructor(private restangular : Restangular) { }

  submitFeedback(feed :Feedback) :Observable<Feedback[]>{
    return this.restangular.all('feedback').post(feed);
  }

}

