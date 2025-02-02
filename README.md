# Hotel Reservation System

## Overview

This project is an Angular-based Hotel Reservation System that allows users to create, view, update, and delete hotel reservations. It connects to a backend server to manage reservation data and provides a user-friendly interface with Bootstrap styling.

## Features

- Create new reservations
- View a list of all reservations
- Update existing reservations
- Delete reservations
- Responsive design with Bootstrap and Bootstrap Icons
- Routing for navigation between components
- Mock API using Mockoon for testing
- Modular architecture with models and services
- Form Validation
- Data handling with Observables

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Mockoon](https://mockoon.com/) for Mock API

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:sophearyrin-dev/Hotel-Management-System-Web.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Hotel-Management-System-Web
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the Mock API using Mockoon:
   - Open Mockoon and import the provided API configuration.
   - Start the mock server.

2. Start the Angular application:
   ```bash
   ng serve
   ```
3. Open your browser and navigate to `http://localhost:4200`.

## Usage

Upon launching the application, you will see the welcome screen:
<img width="1420" alt="image" src="https://github.com/user-attachments/assets/7415f4a6-147f-40c6-8d16-0f4e4d6b7d39" />
- **Create a New Reservation**: Click the "Create a New Reservation" button to add a new booking.
- **View All Reservations**: Click the "View All Reservations" button to see the list of all bookings.

### Routing

The application uses Angular's routing module to navigate between different views:
- `/home` - Home page
- `/reservations` - List of reservations
- `/reservations/create` - Create a new reservation
- `/reservations/edit/:id` - Edit an existing reservation

### Mock API with Mockoon

The application interacts with a mock API for development and testing. The mock API simulates the backend and provides the following endpoints:

- `GET /reservations` - Retrieve all reservations
- `GET /reservation/:id` - Retrieve a specific reservation by ID
- `POST /reservation` - Create a new reservation
- `PUT /reservation/:id` - Update an existing reservation
- `DELETE /reservation/:id` - Delete a reservation

### Models

The application uses TypeScript models to define the structure of reservation data:
```typescript
export interface Reservation {
  id: number;
  guestName: string;
  roomNumber: number;
  checkInDate: string;
  checkOutDate: string;
}
```

### Services

Services are used to handle API calls and data manipulation using Angular's HttpClient and Observables:
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './models/reservation.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/${id}`);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservation`, reservation);
  }

  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/reservation/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reservation/${id}`);
  }
}
```

## Video Demo

https://github.com/user-attachments/assets/29d8ddd4-f56c-415e-8c24-aba020e90900

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact **Sopheary Rin** at [sophearyrincs@gmail.com](mailto:sophearyrincs@gmail.com).

---

Happy Booking! 🌏✨

