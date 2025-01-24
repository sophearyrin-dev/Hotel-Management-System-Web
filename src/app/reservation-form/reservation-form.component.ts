import { ReservationService } from './../reservation/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{

  reservationFormGroup: FormGroup = new FormGroup({})


  //Dependency Injection: Kind of like you inject the service inside the controller if using springboot
  constructor(
    private formBuilder:FormBuilder, 
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.reservationFormGroup = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      let reservation = this.reservationService.getReservation(id);
      if(reservation) this.reservationFormGroup.patchValue(reservation);
    }
  }

  onSubmit(){
    if(this.reservationFormGroup.valid){
      let reservation: Reservation = this.reservationFormGroup.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      //update operation
      this.reservationService.updateReservation(id, reservation);
    }else{
      //add operation
      this.reservationService.addReservation(reservation);
    }

     

      //redirection
      this.router.navigate(['/list']);

    }
  }

}
