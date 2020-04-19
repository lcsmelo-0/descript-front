import { Routes, RouterModule } from '@angular/router'


import { LoginComponent } from './login'
import { DashboardComponent } from './dashboard'
import { WorkflowComponent } from './worflow'
import { AuthGuard } from './_helpers'

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'worflow/:id', component: WorkflowComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

export const appRoutingModule = RouterModule.forRoot(routes)
