import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let // tab1 = "Main skills",
      tab2 = "Recent Experience",
      tab3 = "Skills",
      tab4 = "Education";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
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
                          <span>
                            {" "}
                            <strong>
                              AWS (Amazon Web Services (Oct. 2022 - present)
                            </strong>
                            <br />- Software Development Engineer
                          </span>
                          <br />
                          Senior Software Engineer working with React,
                          React-Native, AWS, Python, Node, Typescript on global
                          internal tooling and customer facing projects.
                          <br />- Led and delivered full stack projects
                          presented to customers using AWS Services.
                          <br />- Presented to AWS customers at conferences and
                          summits on Serverless and front-end topics.
                          <br />- Involved with interviews and hiring decisions
                          across several role types.
                          <br />- Individually mentored junior developers
                          one-to-one.
                          <br />- Presented AWS services to customers at
                          conferences and events, helped customers navigate
                          technical difficulties.
                          <br />- Organised teams by leading agile ceremonies,
                          improving team processes, ticket refinement and owning
                          communications with global stakeholders.
                          <br />- Organised scaling strategies for several
                          projects, both greenfield and coming out of Keep the
                          Lights On (KTLO).
                        </li>
                        <li>
                          <span>
                            {" "}
                            <strong>
                              Reach Plc (May. 2021 - Oct. 2022)
                            </strong>{" "}
                            <br />- Full-stack Developer{" "}
                          </span>
                          <br />
                          The UK's largest regional and national newspaper
                          conglomerate. Owner of Daily Mirror, Daily Express,
                          OK! magazine and around 70 others.
                          <br />- Organised ticket refinement and scoping of
                          work amongst team members, agile planning and
                          communication with stakeholders for projects built for
                          scale.
                          <br />- Responsible for organising clear documentation
                          and onboarding processes for developers.
                          <br />- Supported junior developers and leading on
                          features, liaising with with stakeholders.
                        </li>
                        <li>
                          <span>
                            {" "}
                            <strong>
                              {" "}
                              ChargedUp/The Up Co. (Nov. 2019 - May 2021)
                            </strong>{" "}
                            - Full-Stack Developer
                          </span>
                          <br />
                          Europe's largest phone charging network. Pivoted
                          during COVID-19 to tools to help restaurant and pub
                          industry, including order at table, hand sanitiser and
                          virtual queuing.
                          <br /> Planned and built 6 full-stack, applications
                          with React, AWS, Terraform, React-Native and Node.
                          <br />
                          - Liaised with business leaders including Redbull and
                          Jagermeister to build applications.
                          <br />- Mentored junior developers to up-skill them in
                          the domain.
                        </li>
                        <li>
                          <span>
                            {" "}
                            <strong>
                              Ticketmaster (July. 2019 - Nov. 2019)
                            </strong>{" "}
                            - Front-End Engineer (4-month Fixed Term Contract)
                          </span>
                          <br /> React/Redux engineer responsible for building
                          accessible and thoroughly tested features deployed
                          across 17 countries and 170 million customers
                          <br />
                          - Responsible for new features, bug triage and
                          liaising with product and design teams.
                          <br /> - Unit, integration and e2e tests written using
                          Cypress, React Testing Library and Jest. <br /> -
                          Developed feature presented by Ticketmaster
                          International President at annual summit.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <span>Javascript</span>
                          <br />
                          <span>Node.js</span>
                          <br />
                          <span>React</span>
                          <br />
                          <span>React Native</span>
                          <br />
                          <span>Redux</span>
                          <br />
                          <span>Typescript</span>
                          <br />
                          <span>AWS</span>
                          <br />
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <span>
                            {" "}
                            <strong>Founders & Coders</strong> - 18-week,
                            full-stack, development bootcamp with a focus on
                            ‘Tech for Good’ and pair programming. Topics covered
                            included Agile, Testing, Node.js, React.js,
                            postgreSQL and RESTful APIs.
                          </span>
                          <br /> Feb.2019 - July. 2019
                        </li>
                        <li>
                          <span>
                            {" "}
                            <strong>Bristol University</strong>
                          </span>
                          <br /> Sept. 2010 - June. 2013
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
    );
  }
}

export default TabsTwo;
