import React, { Component } from 'react';


class SiteView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: null,
        }
    }


    generateInput() {
        return <input className="url-input" type="text" placeholder="Enter site url" onKeyPress={e => this.setUrl(e)} />
    }

    generateIframe() {
        return <iframe title="main-site" className="iframe-view" src={this.state.url} />
    }

    setUrl(event) {
        if (event.key === "Enter") {
            this.setState({ url: event.currentTarget.value });
        }
    }


    render() {
        return (
            <div className="site-view">
                {(this.state.url) ? this.generateIframe() : this.generateInput()}
            </div>
        );
    }
}

export default SiteView;