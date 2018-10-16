import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component' ;
import { ContactComponent } from './contact/contact.component' ; 

import { AppRoutingModule} from './app-routing/app-routing.module' ;
import { baseURL } from './shared/baseurl' ;
import { ProcessHTTPMsgService } from './services/process-httpmsg.service'
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FeedbackService } from './services/feedback.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms' ;
import { RestangularModule , Restangular } from 'ngx-restangular' ;
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive';


import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



import 'hammerjs' ;












@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory),

    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule

  ],
  providers: [DishService,PromotionService,LeaderService,FeedbackService,{provide:'BaseURL',useValue:baseURL},ProcessHTTPMsgService],
  entryComponents:[LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
