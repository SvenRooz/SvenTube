import { users } from "../../data/usersData.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


/* Contains all information about a video */
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

  /* Returns the creator's user object */
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

/* Contains all videos */
export class Videos {
  videosList = [];

  constructor() {
    let videos = [];

    const date = dayjs();

    for (let i = 1; i <= 5; i++) {
      const videoObject = {
        videoId: i,
        videoPath: `videos/Clip${i}.mp4`,
        thumbnailPath: `images/video-preview/Clip${i}.png`,
        title: `Video Title ${i}`,
        description: 'No description',
        creatorId: 1,
        creationDate: date.subtract(i, "hour"),
        durationSeconds: 20
      };

      const video = new Video(videoObject);
      videos.push(video);
    }

    this.videosList = videos;
  }

  /* Returns a list containing all videos created by a user */
  getVideosByUser(userId) {
    const userVideos = this.videosList.filter((video) => {
      return video.creatorId === userId;
    });

    return userVideos;
  }
}