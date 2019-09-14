import { Component, OnInit ,Inject} from '@angular/core';
import { Dish } from '../shared/dish' 
import { DishService } from '../services/dish.service' ;
import { flyInOut , expand } from '../animations/app.animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})

export class MenuComponent implements OnInit {

  maindishes :Dish[] ;
  startersdishes :Dish[] ;
  dessertdishes :Dish[] ;


  errMess:String ;

  constructor(private dishService:DishService,@Inject('BaseURL') private BaseURL) { }


  ngOnInit() {
   


      this.dishService.getStartersDish()
    .subscribe(startersdishes => this.startersdishes = startersdishes,
      errmess => this.errMess = <any>errmess);


      this.dishService.getMainsDish()
    .subscribe(maindishes => this.maindishes = maindishes,
      errmess => this.errMess = <any>errmess);

      this.dishService.getDesertDish()
    .subscribe(dessertdishes => this.dessertdishes = dessertdishes,
      errmess => this.errMess = <any>errmess);

      

  }

}
