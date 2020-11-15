import React ,{useEffect , useState, Fragment}from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './FAQ.css'
const Schedule=()=>{

 return(
    <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'white', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title" style = {{textAlign:'left'}}>18-12-2020</h3>
      <h4 className="vertical-timeline-element-title" style = {{textAlign:'left'}}</h4>
      <p>Opening Ceremony </p>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title">19-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">10 :00 AM</h4>
      <p>Idea Pitch Round</p>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      iconStyle={{ background: 'white', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title">20-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">11:00 AM - 02:00 PM</h4>
      <p>
      Evaluation
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title">20-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">03:00 PM - 04:00 PM</h4>
      <p>
      Semi Final Round
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title" >20-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">06:00 PM - 09:00 PM</h4>
      <p>
      Grand Finale
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title">21-12-2020</h3>
      <h4 className="vertical-timeline-element-subtitle">11:00 AM Onwards</h4>
      <p>
      Felicitation Ceremony
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     
    >
      <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
      <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
      <p>
        Creative Direction, Visual Design
      </p>
    </VerticalTimelineElement>
    
  </VerticalTimeline>
 )

}
export default Schedule