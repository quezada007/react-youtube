import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const VideoDetails = ({ selectedVideo, errorMsg }) => {
    if (errorMsg !== '') {
        return (
            <div className="col-md-8 col-lg-7 mb-4">{errorMsg}</div>
        );
    }

    if (selectedVideo === null) {
        return <div className="col-md-8 col-lg-7 mb-4">Loading...</div>;
    }

    const url = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    const channelURL = `https://www.youtube.com/channel/${selectedVideo.snippet.channelId}`;
    const publishedDate = moment(selectedVideo.snippet.publishedAt, 'YYYY-MM-DDTHH:mm:ssZ').format('MMMM D, YYYY');

    return (
        <div id="video-details" className="col-md-8 col-lg-7 mb-4">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="YouTube Video" className="embed-responsive-item" width="854" height="480" src={url} allow="autoplay; encrypted-media" allowFullScreen />
            </div>
            <h1 className="mt-3">{selectedVideo.snippet.title}</h1>
            <div className="description">
                <div className="channel">
                    <strong>Channel Title: </strong>
                    <a href={channelURL} target="_blank" rel="noopener noreferrer">{selectedVideo.snippet.channelTitle}</a>
                </div>
                <div className="published-date">
                    <strong>Published: </strong>
                    {publishedDate}
                </div>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
};

VideoDetails.propTypes = {
    selectedVideo: PropTypes.shape({
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
    }),
    errorMsg: PropTypes.string
};

VideoDetails.defaultProps = {
    selectedVideo: null,
    errorMsg: 'error'
};

export default VideoDetails;