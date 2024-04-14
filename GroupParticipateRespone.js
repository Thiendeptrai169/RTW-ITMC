class User {
  constructor(username) {
      this.username = username;
  }

  sendRequest(groupChat, message = "") {
      groupChat.receiveRequest({ sender: this, message: message });
  }
}

class GroupChat {
  // Existing methods...

  receiveRequest(request) {
      this.requests.push(request);
      console.log(`Group chat "${this.groupName}" received a request from user ${request.sender.username}.`);
      if (this.owner) {
          this.owner.handleRequest(request);
      } else {
          console.log(`No owner set for group chat "${this.groupName}".`);
      }
  }
}

function handleRequest(request) {
  console.log(`Owner of group chat "${request.groupChat.groupName}" received a request from user ${request.sender.username}: ${request.message}`);
  // Process owner's response here
}