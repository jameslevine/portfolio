import React, { Component } from "react";

class Brand extends Component{
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                    <li>
                        <img src="/assets/images/brand/js-logo.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/node-logo.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/aws-logo.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/react-logo.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/mongodb-logo.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/postgres-logo.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/react-native-logo.png" alt="Logo Images"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;