import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { NewUsageComponent } from './new-usage/new-usage.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardGuard as AuthGuard } from './guard/auth-guard.guard';
import { AdminGuardGuard as AdminGuard } from './guard/admin-guard.guard';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { ShowVehicleComponent } from './show-vehicle/show-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';


// add adminguard where necessary
const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'vehicle-list', component: VehicleListComponent, canActivate: [AuthGuard]},
  {path:'new-usage', component: NewUsageComponent, canActivate: [AuthGuard]},
  {path:'new-vehicle', component: NewVehicleComponent, canActivate: [AuthGuard, AdminGuard]},
  {path:'show-vehicle/:vehicle_id', component: ShowVehicleComponent, canActivate: [AuthGuard]},
  {path:'edit-vehicle/:vehicle_id', component: EditVehicleComponent, canActivate: [AuthGuard, AdminGuard]},
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'register', component: RegisterComponent},
  { path: '**', component: PagenotfoundComponent }, // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
