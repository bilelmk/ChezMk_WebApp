import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish'
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup, NgForm, Validators,} from '@angular/forms';
import { Comment } from '../shared/comment';
import { Visibility ,flyInOut ,expand} from '../animations/app.animations';


 
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations :[
    Visibility (), 
    flyInOut(),
    expand() 

    
  ]
})
export class DishdetailComponent implements OnInit {

  commentt= new Comment() ;


  

  dish : Dish ;
  dishcopy= null ;
  dishIds : String [] ;

  next : String ;
  prev : String ;



  errMess:string;


  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL ) 
    
    {
      // this.createForm();
    }

    Visibility = 'hidden' ;
    ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => {
        this.dishIds = dishIds ;
        console.log(this.dishIds)

      });

      this.route.params.subscribe(
        (param) => {
          console.log(param.id)
          this.dishservice.getDish(param.id).subscribe(
            (dish) => {
              this.dish = dish;
              this.setPrevNext(dish._id);

            }
          )
        },
        (error) => console.log(error)
      )
    }





    // onValueChanged(data?: any) {
    //   if (!this.CommentForm) { return; }
    //   const form = this.CommentForm;
    //   for (const field in this.commentErrors) {
    //     // clear previous error message (if any)
    //     this.commentErrors[field] = '';
    //     const control = form.get(field);
    //     if (control && control.dirty && !control.valid) {
    //       const messages = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         this.commentErrors[field] += messages[key] + ' ';
    //       }
    //     }
    //   }
    // }

    onSubmit(f:NgForm , id:string) {

      this.commentt.date = new Date().toISOString();
      this.commentt.rating = f.value.rating ;
      this.commentt.comment = f.value.comment
      console.log(this.commentt);
      this.dishservice.postComment(id , this.commentt).subscribe() ;
    //   this.dishcopy.comments.push(this.comment)
    //   this.dishcopy.save().subscribe(
    //     dish => {
    //       this.dish = dish; console.log(this.dish);
    //     });
    //     this.CommentForm.reset(
    //   {
    //   rating: 5,
    //   author : '',
    //   comment: ''
    // });
    }



  setPrevNext(dishId: String) {
    if(this.dishIds) {
      let index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
    }
  }

    goBack(): void {
      this.location.back();
    }
}
