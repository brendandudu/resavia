import OnlineEvent from "./OnlineEvent";

class LimitedOnlineEvent extends OnlineEvent {
    constructor(id, title, url, invitationOption, availableTicket) {
      super(id, title, url, invitationOption);
      this.availableTicket = availableTicket
    }
  
    book(user){
        console.log("ok")
        if(this.availableTicket >= 1){
            this.availableTicket --;
            return super.book(user);
        }
        else{
            throw new Error("Plus de place disponible")
        }
    }
}

export default LimitedOnlineEvent