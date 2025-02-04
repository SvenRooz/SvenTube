class Video {
    id;
    videoPath;
    thumbnailPath;
    title;
    description;
    creatorId;
    creationDate;
    durationSeconds;

    constructor(id, videoPath, thumbnailPath, title, description, creatorId, creationDate, durationSeconds) {
        Object.assign(this, {id, videoPath, thumbnailPath, title, description, creatorId, creationDate, durationSeconds });
    }
}

function generateVideos() {
    
}