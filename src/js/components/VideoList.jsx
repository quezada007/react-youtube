import React from 'react';
import PropType from 'prop-types';
import VideoListItem from './VideoListItem';

const VideoList = ({ videoList, onVideoSelect }) => {
    if (videoList.length === 0) {
        return <div className="col-md-4 col-lg-5">Loading...</div>;
    }
    const videos = videoList.map((video) => <VideoListItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />);
    return (
        <ul id="video-list" className="col-md-4 col-lg-5 list-unstyled">
            {videos}
        </ul>
    );
};

VideoList.propTypes = {
    videoList: PropType.arrayOf.isRequired,
    onVideoSelect: PropType.func.isRequired
};

export default VideoList;