import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {Observable} from 'rxjs';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {Reservation} from '../shared/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private processHTTPMsgService :ProcessHTTPMsgService
    ,private http : HttpClient) {   }


  postReservation(res : Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(baseURL + 'reservations' , res )
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
