import { currentUser } from "../../data/usersData.js";


/* Generates the HTML for the sidebar */
export function generateSidebarHTML() {
  const profileInfoHTML = 
  `
    <img src="../${currentUser.profilePicturePath}" class="sidebar-creator-pfp">
    <p class="sidebar-creator-name"> ${currentUser.username} </p>
  `;

  document.querySelector('.js-sidebar-profile-info')
    .innerHTML = profileInfoHTML;
}