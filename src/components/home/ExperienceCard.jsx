import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <a href={data.url} target="_blank">
                <img className=" bg-white mb-3" src={data.companylogo} href={data.url} alt="" width="450" height="250"/>
                </a>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;