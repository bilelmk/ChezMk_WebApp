import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish'

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder , FormGroup ,Validators, MaxLengthValidator,} from '@angular/forms';
import { Observable} from 'rxjs' ;
import { Comment } from '../shared/comment';
import { Visibility ,flyInOut ,expand} from '../animations/app.animations';

import {switchMap} from 'rxjs/operators' ;

 
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

  CommentForm: FormGroup;
  comment:Comment ;

  dish : Dish ;
  dishcopy= null ;
  dishIds : number [] ;

  next : number ;
  prev : number ;



  errMess:string;

  commentErrors = {
    'comment': '',
    'author': '',
  };

  validationMessages = {
    'comment': {
      'required':      'comment is required.',
    },
    'author': {
      'required':      'author Name is required.',
      'minlength':     'author Name must be at least 2 characters long.',
    },
    
  };


  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL ) 
    
    { 
      this.createForm();
    }

    Visibility = 'hidden' ;
    ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }
  
    

    createForm(){
      this.CommentForm = this.fb.group({
        rating: 5,
        comment: ['',Validators.required ] ,
        author: ['',[Validators.required,Validators.minLength(2)]],
        
      });
      this.CommentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

      this.onValueChanged(); // (re)set validation messages now

    }

    onValueChanged(data?: any) {
      if (!this.CommentForm) { return; }
      const form = this.CommentForm;
      for (const field in this.commentErrors) {
        // clear previous error message (if any)
        this.commentErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.commentErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  
    onSubmit() {
      this.comment = this.CommentForm.value;
    this.comment.date = new Date().toISOString();
      console.log(this.comment);
    this.dishcopy.comments.push(this.comment)
    this.dishcopy.save()
      .subscribe(dish => { this.dish = dish; console.log(this.dish); });
      this.CommentForm.reset(
    {
    rating: 5,
    author : '',
    comment: ''	
    });
    }
  



    setPrevNext(dishId:number){
      let index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
    }
    goBack(): void {
      this.location.back();
    }
}
