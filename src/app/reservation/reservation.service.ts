import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  reservations: Reservation[] = [];

  constructor(){
    let storedReservations = localStorage.getItem("reservations");
    if(storedReservations){
      this.reservations = JSON.parse(storedReservations);
    }
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(r => r.id === id);
  }

  addReservation(reservation: Reservation): void{
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    console.log(this.reservations);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id:string): void {
    let index = this.reservations.findIndex(r => r.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(r => r.id === id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }


}
