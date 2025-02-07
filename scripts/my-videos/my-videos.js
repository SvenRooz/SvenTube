import { videos } from '../../data/videosData.js';
import { currentUser } from '../../data/usersData.js';
import { generateSidebarHTML } from '../utils/sidebar.js';
import { formatTimeDDMMYYYY} from '../utils/time.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


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
          <p class="video-date"> ${formatTimeDDMMYYYY(video.creationDate)} </p>
          <button class="video-edit-button button-gray-to-white"> Edit video </button>
        </div>
      </div>
    `;

    videoRowsHTML += html;
  });

  document.querySelector('.js-video-grid')
    .innerHTML = videoRowsHTML;
}