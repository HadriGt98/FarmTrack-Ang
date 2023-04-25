import { Component } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {

  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (vehicledata: any) => {
        this.vehicles = vehicledata;
      },
      error: (error: any) => {
        console.log(error.error.message);
      }
    });
  }

}
