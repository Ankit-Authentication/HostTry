import React ,{useEffect , useState, Fragment}from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './FAQ.css'
const Schedule=()=>{

 return(
    <VerticalTimeline style ={{textAlign:"left"}}>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'white', color: 'rgb(33 , 150 ,243)' }}
     
    >
      <h3 className="vertical-timeline-element-title" style = {{textAlign:'left'}}>18-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle" >09:00 AM- 10:00 AM</h4>

      <p style ={{fontSize:"25px"}}>Inaugration </p>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title" style = {{textAlign:'left'}}>18-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">12:00 PM - 2:00 PM</h4>
      <p style ={{fontSize:"25px"}}>Idea Pitch Round</p>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      iconStyle={{ background: 'white', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title" style = {{textAlign:'left'}}>20-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">7:00 PM - 09:00 PM</h4>
      <p style ={{fontSize:"25px"}}> Evaluation</p>
      <li> <b>Idea</b></li>
      <li><b>Idea Implementation </b></li>
      <li><b>Technicality </b></li>
      <li><b>Level of innovation </b></li>
      <li><b>Feasibility </b></li>
      <li><b>Market Adaptibility </b></li>
      <p  style = {{fontSize:"19px"}}>Only Top 50% teams will be qualified for next round.</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title" style = {{textAlign:'left'}}>19-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">12:00 PM - 2:00 PM</h4>
      <p style ={{fontSize:"25px"}}> Semi Final Round</p>
      <li><b> Implementation </b></li>
      <li><b>Technicality </b></li>
      <li><b>Level of innovation </b></li>
      <li><b>Feasibility </b></li>
      <li><b>Market Adaptibility </b></li>
      <p  style ={{fontSize:"19px"}}>Only Top 5 teams will be qualified for next round.</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      iconStyle={{ background: 'white', color: '#fff' }}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    >
      <h3 className="vertical-timeline-element-title" style = {{textAlign:'left'}}>20-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">07:00 PM - 09:00 PM</h4>
      <p style ={{fontSize:"25px"}}>Final Idea Pitch</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title" style = {{textAlign:'left'}}>21-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">11:00 AM Onwards</h4>
      <p style ={{fontSize:"25px"}}>Felicitation Ceremony</p>
    </VerticalTimelineElement>
    
    
  </VerticalTimeline>
 )

}
export default Schedule