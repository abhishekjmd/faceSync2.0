import React from 'react';

class VideoStream extends React.Component {
    render() {
        return (
            <div>
                <h2>Video Stream</h2>
                {/* Update the src attribute to the URL of your Flask `/video_feed` endpoint */}
                <img src="http://localhost:8000/video_feed" alt="Video Stream" />
            </div>
        );
    }
}

export default VideoStream;
