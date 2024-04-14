class GroupChat {
  constructor(groupName) {
      this.groupName = groupName;
      this.owner = null;
      this.members = [];
      this.requests = [];
  }

  addMember(member) {
      this.members.push(member);
  }

  setOwner(owner) {
      this.owner = owner;
  }
}

function createGroupChat(groupName) {
  const groupChat = new GroupChat(groupName);
  console.log(`Group chat "${groupName}" has been created successfully!`);
  return groupChat;
}