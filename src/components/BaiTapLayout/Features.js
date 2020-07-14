import React, { Component } from 'react'
import Feature from './Feature'

export default class Features extends Component {
    render() {
        return (
            <div className="row text-center">
                <Feature />
                <Feature />
                <Feature />
                <Feature />
            </div>
        )
    }
}
