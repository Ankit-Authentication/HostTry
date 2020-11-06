import React ,{useEffect , Fragment}from "react";
import  AOS from "aos";
import "aos/dist/aos.css";
import './FAQ.css'
const FAQ=()=>{
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
      
   
   
return(<Fragment>
 <img src="/images/FAQ.png" className="image"></img>

<div className="container">
        <div className="accordion">
          <div className="accordion-item" id="question1">
            <button type="button" className="collapsible">
            What is WEB-A-THON ?
            </button>
            <div className="content">
              <p>
              
WEB-A-THON is a Virtual Hackathon. Whether you are a beginner or expert ,here is a perfect chance to show your skills and witness a competitive yet inclusive developer community around it. In light of the CoronaVirus outbreak, your safety and well being are our primary concern. Hence all the activities Related to WEB-A-THON like workshops,talks will be conducted online.
              </p>
            </div>
          </div>

          <div className="accordion-item" id="question9">
            <button type="button" className="collapsible"> What is the goal of WEB-A-THON?</button>
            <div className="content">
              <p>
             
              We want to create an environment that embraces new ideas and technology solutions. A place where technology designers and developers can come to help the industry, and a safe zone Research and Development teams to geek out without having to worry about failure. We know it takes longer than a weekend to build great solutions, but this is ample time to form teams of good people and begin creating great solutions.
              </p>
            </div>
          </div>

          <div className="accordion-item" id="question3">
            <button type="button" className="collapsible">
            What is the team size ?</button>
             
            <div className="content">
              <p>
             

You can participate as solo or your can make the team in range of 2 to 5.
               </p>
            </div>
          </div>
          <div className="accordion-item" id="question4">
            <button type="button" className="collapsible"> What are the benefits of participating ?</button>
            <div className="content">
              <p>
           

As a participant, the biggest prize for you is the experience and learning you will gain.
              </p>
            </div>
          </div>
         

          <div className="accordion-item" id="question7">
            <button type="button" className="collapsible"> How much does it cost ?</button>
            <div className="content">
              <p>
             

WEB-A-THON is absolutely free to attend!
              </p>
            </div>
          </div>
          <div className="accordion-item" id="question8">
            <button type="button" className="collapsible">What if I want to edit your team or want to change your problem statement?</button>
            <div className="content">
              <p>
              

If you have any changes or edits in your registrations, mail on <a href="mailto:apptechtell@gmail.com">apptechtell@gmail.com</a>. We'll get back to you shortly for that! But remember, this change can be done only once! So think carefully before you make any changes.
              </p>
            </div>
          </div>
          <div className="accordion-item" id="question9">
            <button type="button" className="collapsible"> Can I start working on my Web before the event ?</button>
            <div className="content">
              <p>
             
              Yes, you may start working on the project on the first day of registering itself. This will help you pitch your ideas in a better way and also give you an upperhand over other teams.
              </p>
            </div>
          </div>
         
          <div className="accordion-item" id="question9">
            <button type="button" className="collapsible"> What if I don't know how to code?</button>
            <div className="content">
              <p>
             
              Not a problem! The entire PU Digital Hackathon team knew very little when they each attended their very first hackathon. It’s entirely irrelevant what your experience is going into a hackathon, it’s more about your interest in technology. Every PU Digital Hackathon Member is passionate about making their hackathons very welcoming and beginner-friendly.
              </p>
            </div>
          </div>


        </div>
      </div>
   
</Fragment>)
}
export default FAQ