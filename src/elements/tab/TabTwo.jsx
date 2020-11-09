import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        // tab1 = "Main skills",
        tab2 = "Recent Experience",
        tab3 = "Skills",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        {/* <Tab>{tab1}</Tab> */}
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    {/* <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                <span> <strong>Web and user interface design</strong> - Development</span><br/>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <span> <strong>Web and user interface design</strong> - Development</span><br/>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                <span> <strong>Web and user interface design</strong> - Development</span><br/>
                                                    I like to move it move it.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel> */}

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                           <li>
                                               <span> <strong>ChargedUp (Nov. 2019 - present)</strong> - Full-Stack Developer</span><br/> Worked on building full-stack applications at speed, with a focus on reliability and scalability.<br/>
- Stack includes serverless lambdas, node, AWS, React and React Native.<br/>
- Projects included web and mobile applications (mainly Android) using React/React-Native.
                                               </li>
                                               <li>
                                               <span> <strong>Ticketmaster (July. 2019 - Nov. 2019)</strong> - Front-End Engineer (4-month Fixed Term Contract)</span><br/> React/Redux engineer responsible for building accessible and thoroughly tested features deployed across 17 countries and 170 million customers<br/>
- Responsible for new features, bug triage and liaising with product and design teams.<br/> - Unit, integration and e2e tests written using Cypress, React Testing Library and Jest. <br/> - Developed feature presented by Ticketmaster International President at annual summit.
                                               </li>
                                               <li>
                                               <span> <strong>Boardingware (Sep. 2017 - Sep. 2018)</strong> - Development</span><br/>  Agile Ed-tech SaaS start-up providing tracking software to boarding schools.<br/> - Responsible for EMEA regional sales, working with engineers on upcoming features.
                                               </li>
                        
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               <span>Javascript</span>
                                                <br/>
                                               <span>Node.js</span>
                                               <br/>
                                               <span>React</span>
                                               <br/>
                                               <span>React Native</span>
                                               <br/>
                                               <span>Redux</span>
                                               <br/>
                                               <span>Typescript</span>
                                               <br/>
                                               <span>AWS</span>
                                               <br/>
                                               <span>ElasticSearch</span>
                                               <br/>
                                               <span>Express</span>
                                               <br/>
                                               <span>MongoDB</span>
                                               <br/>
                                               <span>PostgreSQL</span>
                                               </li>

                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               <span> <strong>Founders & Coders</strong> - 18-week, full-stack, development bootcamp with a focus on ‘Tech for Good’ and pair programming. Topics covered included Agile, Testing, Node.js, React.js, postgreSQL and RESTful APIs.</span><br/>  March.2019 - June. 2019
                                               </li>
                                               <li>
                                               <span> <strong>Bristol University</strong> BSc Accounting & Finance</span><br/> Sept. 2010 - June. 2013
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;