import React, { Component } from 'react'
import Header from './homepage/header'
import Slider from './homepage/slider'
import Features from './homepage/features'
import Latest from './homepage/latest'
import Trending from './homepage/trending'
import Banner from './homepage/banner'
import Footer from './homepage/footer'

import {withRouter} from 'react-router-dom'

class HomePage extends Component{

    render(){
        return(

            <React.Fragment>

              <body>
                <Header />

                <Slider />
                <Features/>
                <Latest />
                <Trending />
                <Banner />
                <Footer />
                </body>
            </React.Fragment>
        )
    }
}

export default withRouter(HomePage)