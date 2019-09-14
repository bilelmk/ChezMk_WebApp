import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable } from 'rxjs';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { map,catchError  } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Comment} from '../shared/comment';


@Injectable()
export class DishService {

  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }
            
              getDishes(): Observable<Dish[]> {
                return this.http.get<Dish[]>(baseURL + 'dishes')
                  .pipe(catchError(this.processHTTPMsgService.handleError));
              }
            
              getDish(id: string): Observable<Dish> {
                return this.http.get<Dish>(baseURL + 'dishes/' + id)
              }
            
              getStartersDish(): Observable<Dish[]> {
                return this.http.get<Dish[]>(baseURL + 'dishes?category=starters')
                  .pipe(catchError(this.processHTTPMsgService.handleError));
              }

              getMainsDish(): Observable<Dish[]> {
                return this.http.get<Dish[]>(baseURL + 'dishes?category=mains ')
                  .pipe(catchError(this.processHTTPMsgService.handleError));
              }

              getDesertDish(): Observable<Dish[]> {
                return this.http.get<Dish[]>(baseURL + 'dishes?category=dessert')
                  .pipe(catchError(this.processHTTPMsgService.handleError));
              }

              getFeaturedDish(): Observable<Dish> {
                return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
                  .pipe(catchError(this.processHTTPMsgService.handleError));
              }
            
              getDishIds(): Observable<number[] | any> {
                return this.getDishes().pipe(map(dishes => dishes.map(dish => dish._id)))

              }

              postComment(id:string , comment : Comment): Observable<Dish> {
                 return this.http.post<Dish>(baseURL + 'dishes/' + id + '/comments' , comment )
                   .pipe(catchError(this.processHTTPMsgService.handleError));

              }
}
