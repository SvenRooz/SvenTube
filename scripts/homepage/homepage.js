import { videos } from '../../data/videosData.js';
import { formatTimeDiff } from '../utils/time.js';
import { generateGeneralHeaderHTML } from '../utils/header.js';


/* --- Running code --- */

generateGeneralHeaderHTML();
generateVideosHTML();


/* --- Functions --- */

/* Generates the HTML for the video grid */
function generateVideosHTML() {
  let videosHTML = '';

  videos.videosList.forEach(video => {
		const videoCreator = video.getVideoCreator();
		
    const html = 
      `
        <a href="html/watch.html">
          <div class="video-container">
            <img src="${video.thumbnailPath}" class="video-preview">
            <div class="video-title-container">
              <img src="${videoCreator.profilePicturePath}" class="video-creator-pfp">
              <div class="video-text-container">
                <p class="video-title"> ${video.title} </p>
                <p class="video-creator"> ${videoCreator.username} </p>
                <p class="video-date"> ${formatTimeDiff(video.creationDate)} ago </p>
              </div>
              <img src="icons/homepage/dots-icon.png" class="video-dots-icon">
            </div>
          </div>
        </a>
      `;

			videosHTML += html;
  });

	document.querySelector('.js-video-grid')
		.innerHTML = videosHTML;
}

