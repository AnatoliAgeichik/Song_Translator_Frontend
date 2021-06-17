import React from 'react';
import { Redirect } from 'react-router'

export class HomePage extends React.Component{

    render() {
        return (
            <Redirect to='/tracks/'/>
        );
    }
}
