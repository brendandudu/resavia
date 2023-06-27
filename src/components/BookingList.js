const BookingList = ({ bookings }) => {
  
    return (
      <div>
        <h4>Liste des réservations :</h4>
        {bookings.map((booking) => (
          <p key={booking.id}>
            {booking.event.title} : {booking.user.nom} {booking.user.prenom} {booking.seat} {booking.event.url}
          </p>
        ))}
      </div>
    );
  };

  export default BookingList;