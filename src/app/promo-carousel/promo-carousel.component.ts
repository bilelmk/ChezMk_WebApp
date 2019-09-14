import { Component, OnInit,Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-promo-carousel',
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.scss']
})
export class PromoCarouselComponent implements OnInit {
 
  promotions : Promotion[];

  errMess1:string ;

  constructor(private promotionservice : PromotionService,
    @Inject('BaseURL') private BaseURL) { }

  

  ngOnInit() {
    this.promotionservice.getPromotions()
    .subscribe( bbb => this.promotions = bbb,
      errmess => this.errMess1 = <any>errmess);
  }

}
