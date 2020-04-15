import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { DashboardComponent } from './dashboard'
import { AuthGuard } from './_helpers'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

export const appRoutingModule = RouterModule.forRoot(routes)
