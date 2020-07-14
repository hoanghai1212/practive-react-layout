import React, { Component } from 'react'
import Header from './Header'
import Features from './Features'

export default class Container extends Component
{
    render()
    {
        return (
            <div className="container">
                <Header />
                <Features />
            </div>
        )
    }
}
