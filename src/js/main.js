// compile scss files
import '../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// components
import SearchBar from './components/search-bar';
import VideoDetails from "./components/video-details";
import VideoList from "./components/video-list";

const API_KEY = 'AIzaSyAcZRe4eQy3BaJkqxrrvOw6Xc6JNgWnqZk';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            errorMsg: ''
        };
        this.searchVideos = this.searchVideos.bind(this);
        this.searchVideos('');
    }

    searchVideos(searchTerm) {
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${API_KEY}&maxResults=25&q=${searchTerm}`;

        axios.get(URL)
            .then(response => {
                this.setState({
                    videos: response.data.items,
                    selectedVideo: response.data.items[0],
                    errorMsg: response.data.items.length === 0 ? `${searchTerm} didn't yield any results. Please search for something else.` : ''
                });
            })
            .catch(error => {
                this.setState({
                    errorMsg: error.message
                });
            });
    }

    onVideoSelect(video) {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="container-fluid">
                <SearchBar onVideoSearch={this.searchVideos} />
                <div className="row">
                    <VideoDetails selectedVideo={this.state.selectedVideo} errorMsg={this.state.errorMsg} />
                    <VideoList videoList={this.state.videos} onVideoSelect={this.onVideoSelect.bind(this)} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));