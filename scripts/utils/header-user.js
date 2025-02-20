import { currentUser } from "../../data/usersData.js";
import { videos } from "../../data/videosData.js";

/* Generates the header for the user specific pages */
export function generateHeaderHTML() {
  const headerHTML =
  `
    <div class="header-left">
      <a href="../index.html">
        <img src="../icons/homepage/sventube-logo.png" class="header-logo">
      </a>
    </div>

    <div class="header-middle">
      <input class="searchbar" placeholder="Search for videos on my channel">
  
      <button class="search-button">
        <img src="../icons/homepage/search-icon.png" class="search-button-icon">
      </button>
    </div>

    <div class="header-right">
      <a href="../html/my-videos.html">
        <button class="create-button button-gray-to-white">
          Create
          <img src="../icons/homepage/create-icon.png" class="create-button-icon">
        </button>
      </a>

      <a href=../html/profile.html>
        <img src="../${currentUser.profilePicturePath}" class="profile-button-icon">
      </a>
    </div>
  `;

  document.querySelector('.js-header')
    .innerHTML = headerHTML;
}
