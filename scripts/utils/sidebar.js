import { currentUser } from "../../data/usersData.js";


/* Generates the HTML for the sidebar */
export function generateSidebarHTML() {
  const iconsPath = getIconsPath();

  const sidebarHTML = 
  `
    <div class="sidebar-profile-info">
      <img src="../${currentUser.profilePicturePath}" class="sidebar-creator-pfp">
      <p class="sidebar-creator-name"> ${currentUser.username} </p>
    </div>

    <div class="sidebar-button-content">
      <a href="profile.html">
        <button class="sidebar-button">
          <img src="${iconsPath}/profile-icon.png" class="sidebar-button-icon">
          <p class="sidebar-button-text"> My profile </p>
        </button>
      </a>

      <a href="my-videos.html">
        <button class="sidebar-button">
          <img src="${iconsPath}/my-videos-icon.png" class="sidebar-button-icon">
          <p class="sidebar-button-text"> My videos </p>
        </button>
      </a>
    </div>

    <div class="sidebar-bottom-button-content">
      <button class="sidebar-button">
        <img src="../icons/profile/settings-icon.png" class="sidebar-button-icon">
        <p class="sidebar-button-text"> Settings </p>
      </button>
    </div>
  `;

  document.querySelector('.js-sidebar')
    .innerHTML = sidebarHTML;
}


/* Returns the path of the icons depending on the page */
function getIconsPath() {
  if (window.location.pathname === '/html/my-videos.html') {
    return '../icons/my-videos';
  } else if (window.location.pathname === '/html/profile.html') {
    return '../icons/profile';
  }
  return '';
}