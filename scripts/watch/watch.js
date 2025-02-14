import { generateGeneralHeaderHTML } from '../utils/header.js';
import { videos } from '../../data/videosData.js';
import { formatTimeDiff, formatTimeDMonthY} from '../utils/time.js';


/* --- Running code --- */

const currentVideo = videos.videosList[0];

generateGeneralHeaderHTML();
generateVideoInfoHTML();
generateVideoBarHTML();


/* --- Functions --- */

/* Generates the HTML for the video info */
function generateVideoInfoHTML() {
  const videoCreator = currentVideo.getVideoCreator();

  const videoInfoHTML = `
    <video controls class="video-player">
      <source src="../${currentVideo.videoPath}" type="video/mp4">
    </video>

    <div class="video-info">
      <p class="video-title"> ${currentVideo.title} </p>
      <p class="video-date"> Uploaded on ${formatTimeDMonthY(currentVideo.creationDate)} </p>
      <div class="more-button">
        <img src="../icons/watch/more-icon.png" class="more-icon">
      </div>
    </div>

    <div class="creator-info">
      <a href="profile.html">
        <img src="../${videoCreator.profilePicturePath}" class="creator-pfp">
      </a>
      
      <a href="profile.html">
        <p class="video-creator"> ${videoCreator.username} </p>
      </a>
    </div>

    <div class="video-description">
      <p class="video-description-text"> ${currentVideo.description} </p>
    </div>
  `;

  document.querySelector('.js-video-view')
    .innerHTML = videoInfoHTML;
}


/* Generates the HTML for the video bar */
function generateVideoBarHTML() {
  let videoPreviewContainerHTML = '';

  videos.videosList.forEach(video => {
    const videoCreator = video.getVideoCreator();
    let html = '';

    if (video.videoId !== currentVideo.videoId) {
      html = `
        <a href="watch.html">
          <div class="video-preview-container">
            <img src="../${video.thumbnailPath}" class="video-preview-thumbnail">

            <div class="video-preview-info">
              <p class="video-preview-title"> ${video.title} </p>
              <a href="profile.html">
                <p class="video-preview-creator"> ${videoCreator.username} </p>
              </a>
              <p class="video-preview-date"> ${formatTimeDiff(video.creationDate)} ago </p>
            </div>

            <img src="../icons/watch/dots-icon.png" class="preview-dots-icon">
          </div>
        </a>
      `;
    }

    videoPreviewContainerHTML += html;
  });

  document.querySelector('.js-video-bar')
    .innerHTML = videoPreviewContainerHTML;
}