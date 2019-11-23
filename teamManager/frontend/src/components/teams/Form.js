import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTEAM } from '../../actions/teams';

export class Form extends Component {

    state = {
        username: '',
        name: '',
        email: '',
        city: '',
        rideInGroup: '',
        daysOfWeek: '',
        posts: '',
        albums: '',
        photos: ''
    }

    static propTypes = {
        addTEAM: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const {
            username,
            name,
            email,
            city,
            rideInGroup,
            daysOfWeek,
            posts,
            albums,
            photos
        } = this.state;

        const team = {
            username,
            name,
            email,
            city,
            rideInGroup,
            daysOfWeek,
            posts,
            albums,
            photos
        };
        //console.log(team);

        this.props.addTEAM(team);

    };

    render() {

        const {
            username,
            name,
            email,
            city,
            rideInGroup,
            daysOfWeek,
            posts,
            albums,
            photos
        } = this.state;

        return (
            <div className="card card-body my-4">

                <h1>Add new user</h1>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>username</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={username}
                        />
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>

                    <div className="form-group">
                        <label>city</label>
                        <input
                            className="form-control"
                            type="text"
                            name="city"
                            onChange={this.onChange}
                            value={city}
                        />
                    </div>

                    <div className="form-group">
                        <label>rideInGroup</label>
                        <input
                            className="form-control"
                            type="text"
                            name="rideInGroup"
                            onChange={this.onChange}
                            value={rideInGroup}
                        />
                    </div>
                    <div className="form-group">
                        <label>Days of the week</label>
                        <input
                            className="mx-1"
                            type="checkbox"
                            name="daysOfWeek"
                            onChange={this.onChange}
                            value="Sun "
                        />
                        <input
                            className=""
                            type="checkbox"
                            name="daysOfWeek"
                            onChange={this.onChange}
                            value="Mon "
                        />
                        <input
                            className=""
                            type="checkbox"
                            name="daysOfWeek"
                            onChange={this.onChange}
                            value="Tue "
                        />
                        <input
                            className=""
                            type="checkbox"
                            name="daysOfWeek"
                            onChange={this.onChange}
                            value="Wed"
                        />
                        <input
                            className=""
                            type="checkbox"
                            name="daysOfWeek"
                            onChange={this.onChange}
                            value="Thu"
                        />
                        <input
                            className=""
                            type="checkbox"
                            name="daysOfWeek"
                            onChange={this.onChange}
                            value="Fri"
                        />
                        <input
                            className=""
                            type="checkbox"
                            name="daysOfWeek"
                            onChange={this.onChange}
                            value="Sat"
                        />
                    </div>

                    <div className="form-group">
                        <label>posts</label>
                        <input
                            className="form-control"
                            type="number"
                            name="posts"
                            onChange={this.onChange}
                            value={posts}
                        />
                    </div>

                    <div className="form-group">
                        <label>albums</label>
                        <input
                            className="form-control"
                            type="number"
                            name="albums"
                            onChange={this.onChange}
                            value={albums}
                        />
                    </div>

                    <div className="form-group">
                        <label>photos</label>
                        <input
                            className="form-control"
                            type="number"
                            name="photos"
                            onChange={this.onChange}
                            value={photos}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                    </div>

                </form>
            </div>
        )
    }
}
// this first null is for my mapStateToProps, you can find it in frontend/src/components/TeamList.js
export default connect(null, { addTEAM })(Form);
