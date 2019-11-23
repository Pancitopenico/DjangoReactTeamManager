import React, { Fragment } from 'react';
import Form from './Form';
import TeamList from './TeamList';

export default function Dashboard() {
    return (
        <Fragment>
            <TeamList />
            <Form />
        </Fragment>
    )
}
