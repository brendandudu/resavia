import React, { useState } from 'react';
import EventItem from '../components/EventItem';
import BookingList from '../components/BookingList'
import { commonBooking, hybridBooking, onlineBooking, physicalBooking } from '../services/BookingService';
import PhysicalEvent from '../modules/Event_module/PhysicalEvent';
import User from '../modules/User_module/User';

const SportResa = () => {

    const [activeUser, setActiveUser] = useState(new User("Jean", "Pierre"));

  const physicalEvent2 = new PhysicalEvent(2, 'Foot match', "1 rue Lavoisier 75015");
  physicalEvent2.setAvailableSeats(["a1", "a2", "a3", "b1", "b2"]);

  const physicalEvent5 = new PhysicalEvent(2, 'Baseball', "1 rue Popeye 75015");
  physicalEvent5.setAvailableSeats(["a1", "a2", "a3", "b1", "b2"]);

  const [events, setEvents] = useState([
    new PhysicalEvent(1, 'Tennis match', "4 rue potier 75013"),
    physicalEvent2,
    new PhysicalEvent(3, 'Basket match', "4 rue potier 75013"),
    new PhysicalEvent(4, 'Javelot', "4 rue potier 75013"),
    physicalEvent5
  ]);

    const [reservationList, setReservationList] = useState([]);

    const booking = (event) => {

      const reservation = event.book(activeUser);
      setReservationList([...reservationList, reservation]);
      alert("Reservation executée avec succès")
    }

  return (
    <>
    <h2>Les evenements</h2>

  <div>
    <h2>Événements en Physique :</h2>
    {events.filter(e => e instanceof PhysicalEvent).map((event) => (
        <EventItem key={event.id} event={event} onBooking={() => booking(event)}/>
      ))}
  </div>
   
   <div>
  <h2>Mes reservations</h2>
  <BookingList bookings={reservationList}/>
  </div>
  </>
  );
};

export default SportResa;
