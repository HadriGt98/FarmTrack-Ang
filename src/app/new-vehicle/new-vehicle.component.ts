import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent {

  vehicleForm!: FormGroup;
  vehicles: any[] = ["Tractor", "Harvester", "ATV"];

  constructor(
    private builder: FormBuilder, 
    private toastr: ToastrService, 
    private vehicleService: VehicleService,
    private router: Router,
    
    ) { }

  ngOnInit() {
    // create a form group
    this.vehicleForm = this.builder.group({
      model_make: this.builder.control('',Validators.required),
      nickname: this.builder.control(''),
      type: this.builder.control('',Validators.required),
  });

  }
  
  // get the form controls and validate; if valid, call the service (create a user)
  submitVehicle(){
    if(this.vehicleForm.valid){
      this.vehicleService.addVehicle(this.vehicleForm.value).subscribe({
        next: (response:any) => {
          console.log(response);
          this.toastr.success('Vehicle created successfuly');
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

}
