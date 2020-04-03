import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { AuthGuard } from './_helpers'
import { ClientComponent } from './client'
import { ReviserComponent } from './reviser'
import { EditorComponent } from './editor'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
  { path: 'reviser', component: ReviserComponent, canActivate: [AuthGuard] },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

export const appRoutingModule = RouterModule.forRoot(routes)
