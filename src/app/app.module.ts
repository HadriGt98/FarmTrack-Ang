import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NewUsageComponent } from './new-usage/new-usage.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { EditUsageComponent } from './edit-usage/edit-usage.component';
import { ShowVehicleComponent } from './show-vehicle/show-vehicle.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VehicleListComponent,
    RegisterComponent,
    PagenotfoundComponent,
    NewUsageComponent,
    NewVehicleComponent,
    EditVehicleComponent,
    EditUsageComponent,
    ShowVehicleComponent,
    ForbiddenComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');
          },
        }
    }),
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
