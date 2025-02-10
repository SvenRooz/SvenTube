import { currentUser } from "../../data/usersData.js";
import { generateSidebarHTML } from '../utils/sidebar.js';
import { formatTimeDDMMYYYY } from "../utils/time.js";
import { generateProfileHeaderHTML } from '../utils/header.js';
import { loadCountryList } from "../utils/countries.js";


/* --- Running code --- */

generateProfileInfoHTML();
generateSidebarHTML();
generateProfileHeaderHTML();


/* --- Functions --- */

/* Generates the HTML for the profile location */
async function generateProfileLocationHTML() {
  const locationElement = document.querySelector('.js-profile-location-input');

  const countryList = await loadCountryList();

  let locationOptionsHTML = '<option value="0"> Not set </option>';

  countryList.forEach(country => {
    const html = 
    `
      <option value="${country.id}"> ${country.name} </option>
    `;

    locationOptionsHTML += html;
  });

  locationElement.innerHTML = locationOptionsHTML;
  locationElement.value = currentUser.location;
}


/* Generates the HTML for all profile info rows */
function generateProfileInfoHTML() {
  generateProfileLocationHTML();

  document.querySelector('.js-profile-info-pfp-container')
    .innerHTML = `<img src="../${currentUser.profilePicturePath}" class="profile-info-pfp">`;
  
  document.querySelector('.js-profile-name-input')
    .value = currentUser.username;
  
  document.querySelector('.js-profile-gender-input')
    .value = currentUser.pronouns;

  document.querySelector('.js-profile-description-info-input')
    .innerHTML = currentUser.description;
  
  document.querySelector('.js-profile-general-info-email')
    .innerHTML = `Email: ${currentUser.email}`;
  
  document.querySelector('.js-profile-general-info-date-joined')
    .innerHTML = `Date joined: ${formatTimeDDMMYYYY(currentUser.dateJoined)}`;
}