import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../service/vehicle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent {
  
  updateVehicleForm: FormGroup = new FormGroup({
    model_make: new FormControl(''/*,Validators.required*/),
    nickname: new FormControl(''),
    type: new FormControl(''/*, Validators.required*/),
  });
  vehicle!: any;
  types_of_vehicles: string[] = ["Tractor", "Harvester", "ATV"];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private vehicleService: VehicleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('vehicle_id');
    if (id != null) {
      this.vehicle = this.vehicleService.getVehicle((Number(id))).subscribe(
        (vehicle: any) => {
          this.vehicle = vehicle;
          console.log(this.vehicle);
          this.updateVehicleForm = this.formBuilder.group({
            model_make: [this.vehicle.model_make, Validators.required],
            nickname: [this.vehicle.nickname],
            type: [this.vehicle.type, Validators.required],
          });
        },
        (error) => {
          console.log(error);
        });
    } else {
      console.log('Vehicle Id was not found');
    }
  }

  submitVehicleUpdate() {
    if(this.updateVehicleForm.valid){
      this.vehicleService.updateVehicle(this.vehicle.vehicle_id, this.updateVehicleForm.value).subscribe({
        next: (response:any) => {
          console.log(response);
          this.toastr.success('Vehicle updated successfuly');
          this.router.navigate(['/vehicle-list']); // Navigate to vehicle page
        },
        error : (error:any) => {
          console.log(error);
          this.toastr.error(error.error.message);
        }
      });
    } else {
      this.toastr.error('Please fill all the required fields');
    }
  }

  deleteVehicle() {
    if(confirm("Are you sure you want to to delete " + this.vehicle.model_make + "?")) {
    this.vehicleService.deleteVehicle(this.vehicle.vehicle_id).subscribe({
      next: (response:any) => {
        console.log(response);
        this.toastr.success(response.message); // check if this still works...
        this.router.navigate(['/vehicle-list']); // Navigate to vehicle page
      },
      error : (error:any) => {
        console.log(error);
        this.toastr.error(error.error.message);
      }
    });
  }
 }
}