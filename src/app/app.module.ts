﻿import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FileUploadModule } from 'ng2-file-upload';
// used to create fake backend
//import { fakeBackendProvider } from './_helpers'

import { AppComponent } from './app.component'
import { appRoutingModule } from './app.routing'

import { JwtInterceptor, ErrorInterceptor } from '@app/_helpers'

import { LoginComponent } from './login'
import { DashboardComponent } from './dashboard'
import { WorkflowComponent } from './worflow'
import { ClientComponent, EditorComponent, ReviserComponent } from '@app/_components'

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    FileUploadModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WorkflowComponent,
    LoginComponent,
    DashboardComponent,
    ClientComponent,
    EditorComponent,
    ReviserComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
