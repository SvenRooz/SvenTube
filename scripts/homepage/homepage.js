import { videos } from '../../data/videos.js';

/* --- Running code --- */

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
                <p class="video-date"> 1 hour ago </p>
              </div>
              <img src="icons/homepage/dots-icon.png" class="video-dots-icon">
            </div>
          </div>
        </a>
      `

			videosHTML += html;
  });

	document.querySelector('.video-grid')
		.innerHTML = videosHTML;
}

