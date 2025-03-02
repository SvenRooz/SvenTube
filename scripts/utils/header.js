import { currentUser } from "../../data/usersData.js";
import { videos } from "../../data/videosData.js";
import { stringIncludes } from "./strings.js";


/* Generates the header for all basic pages */
export function generateGeneralHeaderHTML() {
  let headerHTML = `
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
  `;
  
  if (currentUser) {
    headerHTML += `
      <div class="header-right">
        <a href="../html/my-videos.html">
          <button class="create-button button-gray-to-white">
            Create
            <img src="../icons/homepage/create-icon.png" class="create-button-icon">
          </button>
        </a>

        <img src="../${currentUser.profilePicturePath}" class="profile-button-icon js-profile-button-icon">
      </div>
    `;
  } else {
    headerHTML += `
      <div class="header-right">
        <a href="../html/login.html">
          <button class="signin-button button-light-gray-to-white">
            Sign in
          </button>
        </a>
      </div>
    `;
  }
    
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
  
  if (currentUser) {
    generateHeaderSidebarHTML();
  }
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

    if (stringIncludes(videoTitle, searchbarText)) {
      const html = `<a href="../html/watch.html" class="searchbar-text"> ${videoTitle} </a>`
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


/* Generates the sidebar of the header */
function generateHeaderSidebarHTML() {
  const headerSideBarHTML = 
  `
    <div class="header-sidebar-empty js-header-sidebar-empty closed"></div>
			<div class="header-sidebar-content js-header-sidebar-content closed">
				<div class="header-sidebar-user-info">
					<p class="header-sidebar-user-info-text"> ${currentUser.username} </p>
					<p class="header-sidebar-user-info-text"> ${currentUser.email} </p>
				</div>

				<div class="header-sidebar-buttons-container">
					<div class="header-sidebar-top-buttons">
						<a>
							<button class="button-sidebar">
								<img src="../icons/homepage/channel-icon.png" class="button-sidebar-icon">
								<p class="button-sidebar-text"> My channel </p>
							</button>
						</a>

						<a href="../html/profile.html">
							<button class="button-sidebar">
								<img src="../icons/homepage/profile-icon.png" class="button-sidebar-icon">
								<p class="button-sidebar-text"> My profile </p>
							</button>
						</a>

						<a href="../html/my-videos.html">
							<button class="button-sidebar">
								<img src="../icons/homepage/my-videos-icon.png" class="button-sidebar-icon">
								<p class="button-sidebar-text"> My videos </p>
							</button>
						</a>
					</div>

					<div class="header-sidebar-bottom-buttons">
						<a>
							<button class="button-sidebar">
								<img src="../icons/homepage/settings-icon.png" class="button-sidebar-icon">
								<p class="button-sidebar-text"> Settings </p>
							</button>
						</a>

						<button class="button-sidebar">
							<img src="../icons/homepage/logout-icon.png" class="button-sidebar-icon">
							<p class="button-sidebar-text"> Log out </p>
						</button>
					</div>
				</div>
			</div>
  `;

  document.querySelector('.js-header-sidebar')
    .innerHTML = headerSideBarHTML;

  document.querySelector('.js-profile-button-icon')
    .addEventListener('click', toggleSidebar);
}


/* Toggles the sidebar on and off */
function toggleSidebar() {
  const sidebar = document.querySelector('.js-header-sidebar');
  const sidebarContent = document.querySelector('.js-header-sidebar-content');
  const sidebarEmpty = document.querySelector('.js-header-sidebar-empty');

  // Sidebar is about to open
  if (sidebar.classList.contains('closed')) {
    sidebar.classList.remove('closed');
    sidebarEmpty.addEventListener('click', toggleSidebar);
  
  // Sidebar is about to close
  } else { 
    sidebarEmpty.removeEventListener('click', toggleSidebar);

    sidebarContent.addEventListener('transitionend', () => {
      sidebar.classList.add('closed');
    }, {once: true});
  }

  // Toggle sidebar
  sidebarContent.classList.toggle('closed');
  sidebarEmpty.classList.toggle('closed');
}