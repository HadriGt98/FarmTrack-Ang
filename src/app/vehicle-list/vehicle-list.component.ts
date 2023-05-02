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

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();

    // Keep this code for reference!!!
    // this.vehicleService.getVehicles().subscribe({
    //   next: (vehicledata: any) => {
    //     this.vehicles = vehicledata;
    //   },
    //   error: (error: any) => {
    //     console.log(error.error.message);
    //   }
    // });
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

}
