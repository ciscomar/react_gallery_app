import React, { Component } from 'react';
import Body from './Body'

//Search component
export default class Search extends Component {
    state = { query: 'react js'}
    onSearchChange = e => {this.setState({ query: e.target.value });}

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ query: this.state.query });
        e.currentTarget.reset();
    }
//Search on change, runs query with text typed
    render() {
        return (
            <div>              
                <form onSubmit={this.handleSubmit}>
                    <input className="search" type="search" onChange={this.onSearchChange} placeholder="Search Images" />
                    <i className="fa fa-search"></i>
                </form>
                <Body query={this.state.query} api={this.props.api} />
            </div>
        )
    }
}