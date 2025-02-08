import { currentUser } from "../../data/usersData.js";
import { generateSidebarHTML } from '../utils/sidebar.js';
import { formatTimeDDMMYYYY } from "../utils/time.js";


/* --- Running code --- */

generateProfileInfoHTML();
generateSidebarHTML();


/* --- Functions --- */

/* Generates the HTML for all profile info rows */
function generateProfileInfoHTML() {
  document.querySelector('.js-profile-info-pfp-container')
    .innerHTML = `<img src="../${currentUser.profilePicturePath}" class="profile-info-pfp">`;
  
  document.querySelector('.js-profile-name-input')
    .value = currentUser.username;
  
  document.querySelector('.js-profile-gender-input')
    .value = currentUser.pronouns;

  document.querySelector('.js-profile-location-input')
    .value = currentUser.location;

  document.querySelector('.js-profile-description-info-input')
    .innerHTML = currentUser.description;
  
  document.querySelector('.js-profile-general-info-email')
    .innerHTML = `Email: ${currentUser.email}`;
  
  document.querySelector('.js-profile-general-info-date-joined')
    .innerHTML = `Date joined: ${formatTimeDDMMYYYY(currentUser.dateJoined)}`;
}