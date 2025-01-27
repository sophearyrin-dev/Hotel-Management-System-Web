import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];
  
  constructor(private reservationService: ReservationService){

  }
  // ngOnInit(): void {
  //   this.reservationService.getReservations().subscribe(reservations => {
  //     this.reservations = reservations;
  //   })
  // }


  ngOnInit(): void {
    this.reservationService.getReservations().subscribe({
      next: (reservations) => {
        this.reservations = reservations; // Assign the fetched data to the component's `reservations` array.
      },
      error: (error) => {
        console.error('Error fetching reservations:', error); // Log any error to the console.
      },
    });
  }
  
  onDeleteReservation(id: string){
    this.reservationService.deleteReservation(id);
  }

  

}
