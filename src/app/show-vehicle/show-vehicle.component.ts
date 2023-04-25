import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.css']
})
export class ShowVehicleComponent {

  vehicle!: any;

  constructor(
    private route: ActivatedRoute, 
    private vehicleService: VehicleService
    ) { 
    const id = this.route.snapshot.paramMap.get('vehicle_id');
    if (id != null) {
      this.vehicle = this.vehicleService.getVehicle((Number(id))).subscribe(
        vehicle => {
          this.vehicle = vehicle;
        });
    } else {
      console.log('No vehicle id was found');
    }
  }


}
