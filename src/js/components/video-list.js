import React from 'react';
import PropType from 'prop-types';
import VideoListItem from './video-list-item';

const VideoList = ({videoList, onVideoSelect}) => {
    if (videoList.length === 0) {
        return <div>Loading...</div>;
    }
    let videos = videoList.map(video => {
        return <VideoListItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
    });
    return (
        <ul id="video-list" className="col-md-4 col-lg-5 list-unstyled">
            {videos}
        </ul>
    );
};

VideoList.propTypes = {
    videoList: PropType.array.isRequired,
    onVideoSelect: PropType.func.isRequired
};

export default VideoList;