import { currentUser } from "../../data/usersData.js";
import { videos } from "../../data/videosData.js";
import { stringIncludes } from "./strings.js";

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
      <div class="searchbar-container">
        <input class="searchbar js-searchbar" placeholder="Search for videos">
    
        <button class="search-button">
          <img src="../icons/homepage/search-icon.png" class="search-button-icon">
        </button>
      </div>

      <div class="searchbar-dropdown js-searchbar-dropdown closed"></div>
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

  document.querySelector('.js-searchbar')
    .addEventListener('input', event => {
      renderSearchbarDropdown(event);
    });
  
  document.querySelector('.js-searchbar')
    .addEventListener('focusout', event => {
      renderSearchbarDropdown(event);
    });
}


/* Renders the dropdown menu for the searchbar */
function renderSearchbarDropdown(event) {
  const searchbarDropdown = document.querySelector('.js-searchbar-dropdown');
  const searchbarText = event.target.value;

  if (event.type === 'focusout' || !searchbarText) {
    searchbarDropdown.classList.add('closed');
    return;
  }

  let dropdownHTML = '';
  let numSearchResults = 0;

  for (let i = 0; i < videos.videosList.length && numSearchResults < 10; i++) {
    const videoTitle = videos.videosList[i].title;
    const videoCreatorId = videos.videosList[i].creatorId;

    if (videoCreatorId === currentUser.userId && stringIncludes(videoTitle, searchbarText)) {
      const html = `<a href="../html/my-videos.html" class="searchbar-text"> ${videoTitle} </a>`
      dropdownHTML += html;
      numSearchResults++;
    }
  }

  if (numSearchResults === 0) {
    dropdownHTML = `<p class="searchbar-no-results-text"> No results found </p>`;
  }

  searchbarDropdown.innerHTML = dropdownHTML;
  searchbarDropdown.classList.remove('closed');
}
