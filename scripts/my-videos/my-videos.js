import { videos } from '../../data/videosData.js';
import { currentUser } from '../../data/usersData.js';
import { generateSidebarHTML } from '../utils/sidebar.js';
import { formatTimeDDMMYYYY} from '../utils/time.js';
import { generateHeaderHTML } from '../utils/header-user.js';


/* --- Running code --- */

if (!currentUser) {
  window.location = '../index.html';
}

generateVideoRowsHTML();
generateSidebarHTML();
generateHeaderHTML();


/* --- Event listeners --- */

// Event listener for the check all checkbox
document.querySelector('.js-select-all-checkbox')
  .addEventListener('change', checkAllBoxes);


/* --- Functions --- */

/* Function to run when the check all checkbox is clicked */
function checkAllBoxes() {
  const checkAllBox = document.querySelector('.js-select-all-checkbox');
  const checkboxes = document.querySelectorAll('.js-select-video-checkbox');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checkAllBox.checked;
  });
}


/* Function to run when a regular checkbox is clicked */
function toggleCheckbox(event) {
  const clickedCheckbox = event.target;
  const checkboxes = Array.from(document.querySelectorAll('.js-select-video-checkbox'));
  const checkAllBox = document.querySelector('.js-select-all-checkbox');
  
  if (clickedCheckbox.checked === false) {
    checkAllBox.checked = false;
  } else if (checkboxes.every((checkbox) => checkbox.checked)) {
    checkAllBox.checked = true;
  }
}

/* Generates the HTML for the video grid */
function generateVideoRowsHTML() {
  let videoRowsHTML = '';

  const userVideos = videos.getVideosByUser(currentUser.userId);
  
  userVideos.forEach((video) => {
    const html = 
    `
      <div class="video-row">
        <input type="checkbox" class="select-video-checkbox js-select-video-checkbox">
        <img src="../${video.thumbnailPath}" class="video-preview">

        <div class="video-info">
          <p class="video-title"> ${video.title} </p>
          <p class="video-description"> ${video.description} </p>
        </div>

        <div class="video-properties-grid">
          <p class="video-date"> ${formatTimeDDMMYYYY(video.creationDate)} </p>
          <button class="video-edit-button button-gray-to-white"> Edit video </button>
        </div>
      </div>
    `;

    videoRowsHTML += html;
  });

  document.querySelector('.js-video-grid')
    .innerHTML = videoRowsHTML;
  
  // Event listener for regular checkboxes
  document.querySelectorAll('.js-select-video-checkbox')
  .forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      toggleCheckbox(event);
    })
  });
}