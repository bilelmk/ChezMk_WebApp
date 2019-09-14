import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Reservation} from '../shared/reservation';
import {ReservationService} from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  
  Time = ['6:00 pm','6:30 pm','7:00 pm','7:30 pm','8:00 pm','8:30 pm','9:00 pm','9:30 pm','10:00 pm','10:30 pm'];
  Person =[1,2,3 ,4,5 ,6 ,7 ,8 ,9,10,11,12,13 ,14 ,15]
  Ville =['Tunis','Medenine','Sfax'];

  constructor(private reservationservice : ReservationService) { }

  ngOnInit() {
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
