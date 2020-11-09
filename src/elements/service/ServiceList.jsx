import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'App Prototyping',
        description: 'Creating full-stack web or mobile applications or MVPs at speed.'
    },
    {
        icon: <FiLayers />,
        title: 'Automated Testing and CI',
        description: 'Testing and CI to ensure code is robust and built with scale in mind'
    },
    {
        icon: <FiUsers />,
        title: 'Front-End',
        description: 'Proficient with React, a front-end development framework for Javascript'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I use React-Native for rapid mobile development on iOS or Android devices.'
    },
    {
        icon: <FiUsers />,
        title: 'Complex/Custom projects',
        description: 'I am part of a network of developers & designers, who cover many other areas of technology.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Back-End',
        description: 'Architecting projects using Node.js framework. Focus on robust, scalable code.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
