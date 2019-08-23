import React from 'react';
import PropTypes from 'prop-types';
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
    videoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.shape({
                videoId: PropTypes.string.isRequired
            }).isRequired,
            snippet: PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
                publishedAt: PropTypes.string,
                channelId: PropTypes.string,
                channelTitle: PropTypes.string
            }).isRequired
        }).isRequired
    ).isRequired,
    onVideoSelect: PropTypes.func.isRequired
};

export default VideoList;