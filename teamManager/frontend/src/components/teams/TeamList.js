import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Protypes from 'prop-types';

import { get_TEAMS } from '../../actions/teams';

export class TeamList extends Component {

    static Protypes = {
        teams: Protypes.array.isRequired
    };

    componentDidMount() {
        this.props.get_TEAMS();
    }

    render() {
        return (
            <Fragment>
                <h1>Users</h1>
                {/* log to see my arrays with days
                no ideia how to send this data to mey table
                same problem with ride in group
                {this.props.teams.map(team => (
                    console.log(team.daysOfWeek)
                    console.log()
                    team.daysOfWeek.map(day => console.log(day))
                ))}
                */}

                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>City</th>
                                <th>Ride in group</th>
                                <th>Day of the week</th>
                                <th>Posts</th>
                                <th>Albums</th>
                                <th>Photos</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.teams.map(team => (
                                <tr key={team.id}>
                                    <td>{team.username}</td>
                                    <td>{team.name}</td>
                                    <td>{team.email}</td>
                                    <td>{team.city}</td>
                                    <td>team.rideInGroup</td>
                                    <td>team.daysOfWeek</td>
                                    <td>{team.posts}</td>
                                    <td>{team.albums}</td>
                                    <td>{team.photos}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fragment >
        );
    }
}

const mapStateToProps = state => ({
    /*
    this.teams is my teams reducer (frontend/src/reducers/index.js)
    the second teams is part of the state that I want (frontend/src/reducers/teams.js)
    */
    teams: state.teams.teams
});

export default connect(mapStateToProps, { get_TEAMS })(TeamList);
