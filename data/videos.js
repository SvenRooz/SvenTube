import { users } from "./users.js";

class Video {
  videoId;
  videoPath;
  thumbnailPath;
  title;
  description;
  creatorId;
  creationDate;
  durationSeconds;

  constructor(videoObject) {
    Object.assign(this, videoObject);
  }

	getVideoCreator() {
		let matchingUser;

		users.usersList.forEach(user => {
			if (user.userId === this.creatorId) {
				matchingUser = user;
			}
		});

		return matchingUser;
	}
}

class Videos {
  videosList = [];

  constructor() {
    let videos = [];

    for (let i = 1; i <= 5; i++) {
      const videoObject = {
        videoId: i,
        videoPath: `videos/Clip${i}.mp4`,
        thumbnailPath: `images/video-preview/Clip${i}.png`,
        title: `Video Title ${i}`,
        description: 'No description',
        creatorId: 1,
        creationDate: new Date(),
        durationSeconds: 20
      };

      const video = new Video(videoObject);
      videos.push(video);
    }

    this.videosList = videos;
  }
}

export const videos = new Videos();