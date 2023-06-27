import React, { useState } from 'react';
import EventItem from '../components/EventItem';
import BookingList from '../components/BookingList'
import { commonBooking, hybridBooking, onlineBooking, physicalBooking } from '../services/BookingService';
import OnlineEvent from '../modules/Event_module/OnlineEvent';
import LimitedOnlineEvent from '../modules/Event_module/LimitedOnlineEvent';
import PhysicalEvent from '../modules/Event_module/PhysicalEvent';
import User from '../modules/User_module/User';

const WebResa = () => {

  const [activeUser, setActiveUser] = useState(new User("Jean", "Pierre"));

  const physicalEvent2 = new PhysicalEvent(2, 'Physical meeting IA', "1 rue Lavoisier 75015");
  physicalEvent2.setAvailableSeats(["a1", "a2", "a3", "b1", "b2"]);

    const [events, setEvents] = useState([
        new LimitedOnlineEvent(1, 'Online Webinar Blockchain', "https://zoom.com/lien", true, 5),
        physicalEvent2,
        new PhysicalEvent(3, 'Physical meeting sport', "1 rue Dupont 75015"),
        new OnlineEvent(4, 'Online Spring Boot formation', "https://zoom.com/lien")
    ])

    const [reservationList, setReservationList] = useState([]);

    const booking = (event) => {

      const reservation = event.book(activeUser);
      setReservationList([...reservationList, reservation]);
      alert("Reservation executée avec succès")
    }

  return (
      <>
      <h2>Les evenements</h2>
    <div style={{width: '33%', float: 'left'}}>
      <h2>Événement en Ligne :</h2>
      {events.filter(e => e instanceof OnlineEvent).map((event) => (
          <EventItem key={event.id} event={event} onBooking={() => booking(event)}/>
        ))}
    </div>

    <div style={{width: '33%',  float: 'left'}}>
      <h2>Événements en Physique :</h2>
      {events.filter(e => e instanceof PhysicalEvent).map((event) => (
          <EventItem key={event.id} event={event} onBooking={() => booking(event)}/>
        ))}
    </div>

    <div style={{width: '33%',  float: 'left'}}>
      <h2>Événement en Hybride :</h2>
      TODO
    </div>
     
     <div style={{clear:'both', paddingTop:'30px'}}>
    <h2>Mes reservations</h2>
    <BookingList bookings={reservationList}/>
    </div>
    </>
  );
};

export default WebResa;
