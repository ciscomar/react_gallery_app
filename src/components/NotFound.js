import React, { Component } from 'react';

//404 Page not found
class NotFound extends Component {
    render() {
        return (
            <div className="notfound">
            <h1>404 Page not found</h1>
                <img src={require('./notfound.png')} alt="notfound"/>
            </div>
        )
    }
}
export default NotFound;