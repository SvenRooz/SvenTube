import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


/* Contains all information about a user */
class User {
  userId;
  email;
  passwordHash;
  username;
  profilePicturePath;
  dateJoined;
  description;
  pronouns;
  location;
  adminPrivileges;

  constructor(userObject) {
    Object.assign(this, userObject);
  }
}

/* Contains all registered users */
export class Users {
  usersList = [];

  constructor() {
    const user1Object = {
      userId: 1,
      email: 'roozendaalsven@gmail.com',
      passwordHash: 'dummypassword',
      username: 'DexyBentai',
      profilePicturePath: 'images/profile-pictures/pfp-sven.png',
      dateJoined: dayjs('2025-07-02'),
      description: 'My name is DexyBentai, the creator of SvenTube!',
      pronouns: 'He/Him',
      location: 156,
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
      dateJoined: dayjs('2025-07-03'),
      description: 'Moussie\'s test account!',
      pronouns: 'They/Them',
      location: 176,
      adminPrivileges: false
    };

    const user2 = new User(user2Object);
    this.usersList.push(user2);
  }
}