import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardGuard as AuthGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'vehicle-list', component: VehicleListComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'register', component: RegisterComponent},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
