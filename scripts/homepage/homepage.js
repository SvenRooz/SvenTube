import {videos} from '../../data/videos.js';

function generateVideosHTML(videos) {
  let videosHML = '';

  videos.videosList.forEach(video => {
    const html = 
      `
        <a href="html/watch.html">
          <div class="video-container">
            <img src="images/video-preview/Clip1.png" class="video-preview">
            <div class="video-title-container">
              <img src="images/profile-pictures/pfp-sven.png" class="video-creator-pfp">
              <div class="video-text-container">
                <p class="video-title"> Super Funny Video 1!!! </p>
                <p class="video-creator"> DexyBentai </p>
                <p class="video-date"> 1 hour ago </p>
              </div>
              <img src="icons/homepage/dots-icon.png" class="video-dots-icon">
            </div>
          </div>
        </a>
      `
  });
}