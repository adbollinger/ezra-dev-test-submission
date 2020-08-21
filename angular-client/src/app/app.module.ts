import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberFormComponent } from './member-form/member-form.component';

// To remove the errors complaining that $ and .modal are undefined
///import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddMemberComponent,
      MemberFormComponent,
      LoadingOverlayComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add-member', component: AddMemberComponent },
      { path: 'add-member:id', component: AddMemberComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
