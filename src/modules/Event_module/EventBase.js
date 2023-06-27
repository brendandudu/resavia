import Booking from "../Booking_module/Booking";

class EventBase {
    constructor(id, title) {
      this.id = id;
      this.title = title;
    }
  
    book(user){
        return new Booking(Math.floor(Math.random() *100000), user, this);
    }
  }

export default EventBase;