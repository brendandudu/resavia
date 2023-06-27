import React, { useState } from 'react';

const EventItem = ({ event, onBooking }) => {

  return (
    <div>
      <h3>{event.title}</h3>
      <p>Type : {event.constructor.name}</p>
      <p>Options :</p>
      <ul>
        {event.availableTicket && <li>Places limitées ({event.availableTicket} restants) </li>}
        {event.url && <li>Envoie d'invitation</li>}
        {event.availableSeats && <li>Places atribuées automatiquement</li>}
      </ul>
      <button onClick={onBooking}>Réserver</button>
    </div> 
  );
};

export default EventItem;
