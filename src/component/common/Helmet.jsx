import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content="James Levine is a full-stack developer, working from London. He works with React and Node with AWS to build applications for mobile (iOS and Android) and web. Code is tested and robust to ensure scalability and security in mind." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
