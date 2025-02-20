import { currentUser } from "../../data/usersData.js";


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
      renderSearchbar(event);
    });
  
  document.querySelector('.js-searchbar')
    .addEventListener('focusout', event => {
      renderSearchbar(event);
    });
  
  if (currentUser) {
    generateHeaderSidebarHTML();
  }
}


/* Generates the header for the "profile" and "my videos" page */
export function generateProfileHeaderHTML() {
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


function renderSearchbar(event) {
  const searchbarDropdown = document.querySelector('.js-searchbar-dropdown')

  if (event.type === 'focusout') {
    searchbarDropdown.classList.add('closed');
    return;
  }

  const searchbar = event.target;

  if (searchbar.value) {
    searchbarDropdown.classList.remove('closed');
  } else {
    searchbarDropdown.classList.add('closed');
  }
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
    .addEventListener('click', () => {
      toggleSidebar();
    });

  document.querySelector('.js-header-sidebar-empty')
    .addEventListener('click', () => {
      toggleSidebar();
    });
}


/* Toggles the sidebar on and off */
function toggleSidebar() {
  const sidebar = document.querySelector('.js-header-sidebar');
  const sidebarContent = document.querySelector('.js-header-sidebar-content');
  const sidebarEmpty = document.querySelector('.js-header-sidebar-empty');

  if (sidebar.classList.contains('closed')) {
    // Opens the sidebar
    sidebar.classList.remove('closed');
  } else {
    // Closes the sidebar after the transitions
    sidebarContent.addEventListener('transitionend', () => {
      sidebar.classList.add('closed');
    }, {once: true});
  }

  sidebarContent.classList.toggle('closed');
  sidebarEmpty.classList.toggle('closed');
}