import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {

  vehicles: any[] = [];
  // filteredVehicles: any[] = [];
  searchText!: string;
  previousPage: string = '/home';

  constructor(private vehicleService: VehicleService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (vehicledata: any) => {
            this.vehicles = vehicledata;
          },
          error: (error: any) => {
            console.log(error.error.message);
          }
        });
  }

  searchVehicles(): void {
    if (this.searchText) {
      this.vehicleService.searchVehicles(this.searchText).subscribe(
        (vehicledata: any) => {
          this.vehicles = vehicledata;
        },
        (error: any) => {
          console.log(error.error.message);
        }
      )
    } else {
      this.getVehicles();
    }
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
