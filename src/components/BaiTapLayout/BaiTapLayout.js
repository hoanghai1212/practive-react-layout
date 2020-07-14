import React, { Component } from 'react'
import Navbar from './Navbar'
import Container from './Container'
import Footer from './Footer'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div style={{paddingTop : "56px"}}>
                <Navbar />
                <Container />
                <Footer />
            </div>
        )
    }
}
