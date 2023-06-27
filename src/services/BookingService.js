import { createInvitationMsg } from "./InvitationService";

//METHODS NOT USED !!//

const commonBooking = (event) =>{

  const reservation = {
    id: Math.floor(Math.random() * 10000),
    eventId: event.id,
    eventName: event.title,
    eventType: event.type,
  };
  return reservation;
}  

//Seulement pour les evenements en ligne :
//Limite de place (availableTicket) - Optionel
//Invitation par lien (link) - Optionel
const onlineBooking = (event) => {

  if(event.type !== "online")
    throw new Error('Not an online event');

  const reservation = commonBooking(event)

  if(event.availableTicket && event.availableTicket >= 1){
    event.availableTicket--;
  }

  if(event.link){
    createInvitationMsg(event)
    reservation.link = event.link
  }
  
  return reservation;
}

//Seulement pour les evenements hybrid :
//Attribution de place (availableSeats) -- Optionel
//Limite de place (availableTicket) - Optionel
//Invitation par lien (link) - Optionel
const physicalBooking = (event) => {

  if(event.type !== "physical")
    throw new Error('Not an physical event'); 

  const reservation = commonBooking(event)

  if(event.availableSeats){
    const randomIndex = Math.floor(Math.random() * event.availableSeats.length);
    const picked = event.availableSeats[randomIndex];
    reservation.seat = picked;
    
    alert("Place attribuée : " + picked )
    event.availableSeats = event.availableSeats.filter((item) => item !== picked);
  }
  
  return reservation;
}

//Seulement pour les evenements physique :
//Attribution de place (availableSeats) -- Optionel
const hybridBooking = (event) => {
  if(event.type !== "hybrid")
    throw new Error('Not an hybrid event'); 

  const reservation = commonBooking(event)

  if(event.availableTicket && event.availableTicket >= 1){
    event.availableTicket--;
  }

  if(event.link){
    createInvitationMsg(event)
  }

  if(event.availableSeats){
    console.log(event.availableSeats.length)
    const randomIndex = Math.floor(Math.random() * event.availableSeats.length);
    const picked = event.availableSeats[randomIndex];
    reservation.seat = picked;
    
    alert("Place attribuée : " + picked )
    event.availableSeats = event.availableSeats.filter((item) => item !== picked);
  }
  
  return reservation;
}


  export {commonBooking, onlineBooking, physicalBooking, hybridBooking};