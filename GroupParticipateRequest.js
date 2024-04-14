class User {
    // Existing methods...

    handleRequest(request) {
        console.log(`Owner of group chat "${request.groupChat.groupName}" received a request from user ${request.sender.username}: ${request.message}`);
        // Process owner's response here
    }
}

function sendRequestToOwner(groupChat, userId, message = "") {
    const requestingUser = new User(userId);
    const request = {
        sender: requestingUser,
        message: message,
        groupChat: groupChat
    };
    groupChat.receiveRequest(request);
    console.log(`Request sent to the owner of group chat "${groupChat.groupName}" from user ${userId}.`);
}