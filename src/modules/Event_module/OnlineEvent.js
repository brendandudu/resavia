import { createInvitationMsg } from "../../services/InvitationService";
import EventBase from "./EventBase";


class OnlineEvent extends EventBase {
    constructor(id, title, url, invitationOption) {
      super(id, title);
      this.url = url;
      this.invitationOption = invitationOption;
    }
  
    book(user){
        if(this.invitationOption){
            createInvitationMsg(this);
        }

        return super.book(user);
    }
}

export default OnlineEvent