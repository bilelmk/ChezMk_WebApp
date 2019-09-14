import { Injectable } from '@angular/core';
import { Favorite } from '../shared/favorite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError , map } from 'rxjs/operators' ;
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable()
export class FavoriteService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getFavorites(): Observable<Favorite> {
    return this.http.get<Favorite>(baseURL + 'favorites')
      .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  }

  postFavorites(dishids: any) {
    return this.http.post(baseURL + 'favorites/', dishids)
    .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  }

  isFavorite(id: string) {
    return this.http.get(baseURL + 'favorites/' + id)
    .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
}

  postFavorite(id: string) {
    return this.http.post(baseURL + 'favorites/' + id, {})
    .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
}

  deleteFavorite(id: string) {
    return this.http.delete(baseURL + 'favorites/' + id)
    .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  }
}
