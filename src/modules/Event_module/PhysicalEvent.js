import Booking from "../../modules/Booking_module/Booking";
import EventBase from "./EventBase";

class PhysicalEvent extends EventBase {
    constructor(id, title, location) {
      super(id, title);
      this.location = location;
    }

    setAvailableSeats(seats){
        this.availableSeats = seats
    }

    book(user){
        if(this.availableSeats && this.availableSeats.length >= 1){
            const randomIndex = Math.floor(Math.random() * this.availableSeats.length);
            const picked = this.availableSeats[randomIndex];

            const booking = super.book(user)
            booking.setSeat(picked)

            alert("Place choisie automatiquement : " + picked)

            this.availableSeats = this.availableSeats.filter((item) => item !== picked);

            return booking;
        }

        return super.book(user);

    }
  
  }

export default PhysicalEvent;