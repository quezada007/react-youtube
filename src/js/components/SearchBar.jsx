import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    onInputChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        const { onVideoSearch } = this.props;
        const { searchTerm } = this.state;
        onVideoSearch(searchTerm);
    }

    render() {
        const { searchTerm } = this.state;
        return (
            <form className="mt-3 mb-3" onSubmit={this.onFormSubmit.bind(this)}>
                <div className="row">
                    <div className="form-group col-sm-10">
                        <label htmlFor="searchInput" className="sr-only">Search for YouTube videos</label>
                        <input
                            type="search"
                            id="searchInput"
                            className="form-control form-control-lg"
                            value={searchTerm}
                            onChange={this.onInputChange.bind(this)}
                            placeholder="Search for YouTube videos"
                        />
                    </div>
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-primary btn-lg">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}

SearchBar.propTypes = {
    onVideoSearch: PropTypes.func
};

SearchBar.defaultProps = {
    onVideoSearch: () => {}
};