import { videos } from '../../data/videos.js';
import { currentUser } from '../../data/users.js';
import { generateSidebarHTML } from '../utils/sidebar.js';


/* --- Running code --- */

generateVideoRowsHTML();
generateSidebarHTML();


/* --- Functions --- */

/* Generates the HTML for the video grid */
function generateVideoRowsHTML() {
  let videoRowsHTML = '';

  const userVideos = videos.getVideosByUser(currentUser.userId);
  
  userVideos.forEach((video) => {
    const html = 
    `
      <div class="video-row">
        <input type="checkbox" class="select-video-checkbox">
        <img src="../${video.thumbnailPath}" class="video-preview">

        <div class="video-info">
          <p class="video-title"> ${video.title} </p>
          <p class="video-description"> ${video.description} </p>
        </div>

        <div class="video-properties-grid">
          <p class="video-date"> 13/01/2025 </p>
          <button class="video-edit-button button-gray-to-white"> Edit video </button>
        </div>
      </div>
    `;

    videoRowsHTML += html;
  });

  document.querySelector('.js-video-grid')
    .innerHTML = videoRowsHTML;
}