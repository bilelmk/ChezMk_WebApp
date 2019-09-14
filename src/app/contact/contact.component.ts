import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { flyInOut } from '../animations/app.animations';

import {Msg} from '../shared/msg';
import {MsgService} from '../services/msg.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
    
    ]
})
export class ContactComponent implements OnInit {
  
  constructor(private msgservice : MsgService) {}

  ngOnInit() {}

  send(f:NgForm){
      var msg = new Msg();
      msg.firstName = f.value.firstname ;
      msg.lastName = f.value.firstname ;
      msg.email = f.value.email ;
      msg.tel = f.value.tel ;
      msg.feedback = f.value.msg ;
      this.msgservice.postMsg(msg).subscribe() ;

  }



}



