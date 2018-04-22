import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const VideoListItem = ({video, onVideoSelect}) => {
    let publishedDate = moment(video.snippet.publishedAt, 'YYYY-MM-DDTHH:mm:ssZ').format('MMMM D, YYYY');

    return (
        <li>
            <a className="media" href="" onClick={e => {e.preventDefault(); onVideoSelect(video);}}>
                <img className="mr-3" src={video.snippet.thumbnails.default.url} alt=""/>
                <div className="media-body">
                    <strong>{video.snippet.title}</strong><br/>
                    <small className="text-muted">{publishedDate}</small>
                </div>
            </a>
        </li>
    );
};

VideoListItem.propTypes = {
    video: PropTypes.object.isRequired,
    onVideoSelect: PropTypes.func.isRequired
};

export default VideoListItem;