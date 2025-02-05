/* Contains all information about a user */
class User {
  userId;
  email;
  passwordHash;
  username;
  profilePicturePath;
  dateJoined;
  description;
  adminPrivileges;

  constructor(userObject) {
    Object.assign(this, userObject);
  }
}

/* Contains all registered users */
class Users {
  usersList = [];

  constructor() {
    const user1Object = {
      userId: 1,
      email: 'roozendaalsven@gmail.com',
      passwordHash: 'dummypassword',
      username: 'DexyBentai',
      profilePicturePath: 'images/profile-pictures/pfp-sven.png',
      dateJoined: new Date(),
      description: 'My name is DexyBentai, the creator of SvenTube!',
      adminPrivileges: true
    };

    const user1 = new User(user1Object);

    this.usersList.push(user1);

    const user2Object = {
      userId: 2,
      email: ' lis368612@gmail.com',
      passwordHash: 'dummypassword',
      username: 'Moussie',
      profilePicturePath: 'images/profile-pictures/pfp-moussie.png',
      dateJoined: new Date(),
      description: 'Moussie\'s test account!',
      adminPrivileges: false
    };

    const user2 = new User(user2Object);
    this.usersList.push(user2);
  }
}

// Export variables
export const users = new Users();
export const currentUser = users.usersList[0];