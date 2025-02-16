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
      <input class="searchbar" placeholder="Search for videos on my channel">
  
      <button class="search-button">
        <img src="../icons/homepage/search-icon.png" class="search-button-icon">
      </button>
    </div>
  `;
  
  if (currentUser) {
    headerHTML += `
      <div class="header-right">
        <a href="my-videos.html">
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
        <a href="html/login.html">
          <button class="signin-button button-light-gray-to-white">
            Sign in
          </button>
        </a>
      </div>
    `;
  }
    
  document.querySelector('.js-header')
    .innerHTML = headerHTML;
  
  generateHeaderSidebarHTML();
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
      <a href="my-videos.html">
        <button class="create-button button-gray-to-white">
          Create
          <img src="../icons/homepage/create-icon.png" class="create-button-icon">
        </button>
      </a>

      <img src="../${currentUser.profilePicturePath}" class="profile-button-icon">
    </div>
  `;

  document.querySelector('.js-header')
    .innerHTML = headerHTML;
}


/* Generates the sidebar of the header */
function generateHeaderSidebarHTML() {
  // const headerSideBarHTML = 
  // `
    
  // `;

  // document.querySelector('.js-header-sidebar')
  //   .innerHTML = headerSideBarHTML;

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