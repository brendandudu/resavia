class User{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.bookings = [];
    }

    addBooking(booking){
        this.bookings.push(booking);
    }
}

export default User;