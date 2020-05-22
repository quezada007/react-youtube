// compile scss files
import '../scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// Components
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyA0Tv7U7H_fSscAIhdpE2aMcnjAefFyLVQ';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            errorMsg: ''
        };
        this.searchVideos('');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    searchVideos = (searchTerm) => {
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${API_KEY}&maxResults=25&q=${searchTerm}`;

        axios.get(URL)
            .then((response) => {
                this.setState({
                    videos: response.data.items,
                    selectedVideo: response.data.items[0],
                    errorMsg: response.data.items.length === 0 ? `${searchTerm} didn't yield any results. Please search for something else.` : ''
                });
            })
            .catch((error) => {
                this.setState({
                    errorMsg: error.message
                });
            });
    }

    render() {
        const { selectedVideo, errorMsg, videos } = this.state;
        return (
            <div className="container-fluid">
                <SearchBar onVideoSearch={this.searchVideos} />
                <div className="row">
                    <VideoDetails selectedVideo={selectedVideo} errorMsg={errorMsg} />
                    <VideoList videoList={videos} onVideoSelect={this.onVideoSelect} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));