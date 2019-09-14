import { Component, OnInit,Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { flyInOut ,expand} from '../animations/app.animations';
import {NgForm} from '@angular/forms';
import {Reservation} from '../shared/reservation';
import {ReservationService} from '../services/reservation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {


  active = "active" ;
  noactive = "" ;
  ref :string  ;


  promotions : Promotion[];
  Time = ['6:00 pm','6:30 pm','7:00 pm','7:30 pm','8:00 pm','8:30 pm','9:00 pm','9:30 pm','10:00 pm','10:30 pm'];
  Person =[1,2,3 ,4,5 ,6 ,7 ,8 ,9,10,11,12,13 ,14 ,15]
  Ville =['Tunis','Medenine','Sfax'];

  promo : string ;
  errMess1:string ;
  
  
  constructor(
    private promotionservice:PromotionService,
    private reservationservice : ReservationService ,
    @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
    this.promotionservice.getPromotions().subscribe(
      promotions => {
        this.promotions = promotions;
        this.ref = promotions[0].name ;
        },
      errmess => this.errMess1 = <any>errmess);

  }

  send(f: NgForm){
    var res = new Reservation() ;
    res.name = f.value.name ;
    res.tel = f.value.tel ;
    res.date = f.value.date ;
    res.time = f.value.time ;
    res.number = f.value.number ;
    res.ville = f.value.ville ;
    this.reservationservice.postReservation(res).subscribe()
  }

}
