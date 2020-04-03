import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component'
import { appRoutingModule } from './app.routing'

import { JwtInterceptor, ErrorInterceptor } from './_helpers'
import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { ClientComponent } from './client'
import { ReviserComponent } from './reviser'
import { EditorComponent } from './editor'
import { HeaderComponent, SidebarComponent } from './_components'

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, appRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ClientComponent,
    ReviserComponent,
    EditorComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
