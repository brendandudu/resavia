class Booking {
    constructor(id, user, event){
        this.id = id;
        this.user = user;
        this.event = event;
    }

    setSeat(seat){
        this.seat = seat;
    }
}

export default Booking