import React,{Component} from 'react';
import { BrowserRouter as Router, NavLink, Switch, Link, Route } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
           <div>
<div className="se-pre-con"></div>
 
            
 <div className="menubar">
     <div className="menubar-content">
         <nav className="navbar navbar-default navbar-fixed-top">
             <div className="container block">
                 <div className="row block">
                     <div className="col-lg-2 col-md-2 col-sm-6">
                         <div className="site-title">
                             
                             <h3>Abhisek Bose</h3>
                         </div>
                     </div>
                     <div className="navbar-header">
                         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                             <span className="sr-only">Toggle navigation</span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                         </button>
                     </div>
                     <div className="col-lg-10 f-right col-md-10 col-sm-12 navbar-style">
                         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                             <ul className="nav navbar-nav">
                                 <li>
                                     <a href="#home" className="nav-link">Home</a>
                                 </li>
                                 <li>
                                     <a href="#about" className="nav-link">About</a>
                                 </li>
                                 
                                 <li>
                                     <a href="#testimonial" className="nav-link">Testimonial</a>
                                 </li>
                                
                                 <li>
                                     <a href="#contact" className="nav-link">Contact</a>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </nav>
     </div>
 </div>
 
 <div className="main-page-content">
     <div id="home">
         <div id="particles-js"></div>
         <div className="home-content-main">
             <div className="table-cell">
                 <div className="container">
                     <div className="row home-row">
                         <div className="col-lg-12 col-md-12 col-sm-12">
                             <div className="home-text text-center">
                                 <div className="about-social-icon text-center">
                                     <ul className="about-social"> 
                                         <li><a href="https://www.facebook.com/abhisek.face" target="newtab"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                         <li><a href="https://www.linkedin.com/in/abhisek-bose" target="newtab"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                         <li><a href="https://www.instagram.com/iabhisek.bose/" target="newtab"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                     </ul>
                                 </div>
                                 <h1 className="heading" data-target-resolver>Abhisek Bose</h1>
                                
                                 <p>The Solution Architect, Project Manager, Full Stack Developer</p>
                                 <div className="home-arrow">
                                     <span></span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="bottomtext">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-6">
                         <div className="emailbottom">
                             <h3>abhisek.asp.net@gmail.com</h3>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6">
                         <div className="textbottom">
                             <h3>+919674251877</h3>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
         
    
         
     <div id="about">
         <div className="abouttop">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-8 col-lg-offset-2 col-md-12">
                         <div className="about-text">
                             <h1 className="clip-text clip-text_five">9 Years Of Experience</h1>
                             <p>IT Solution Architect | Data Analyst | AI | ML | BLOCKCHAIN | IOT</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="me-grid wow fadeIn">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 about-col">
                         <div className="about-image">
                             <div className="image-frame">
                                 <div className="img">
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <img src="./assets/img/mine.png"  className="about-img"/>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 about-col">
                         <div className="about-details">
                             <h3>I am Abhisek Bose<span></span></h3>
                             <p>Principal Consultant in Web & Mobility Solutions and Solution Architect & Speaker of Blockchain, currently employed with a reputed US based IT product development and consulting services firm named Arodek Technology Consulting Pvt Ltd. Also holding responsibilities of a Solution Architect & Business Analyst. With a proven record of 8+ year of experience managing technical teams in both corporate and start-up settings. An inquisitive professional with expertise in hiring, training, and mentoring personnel. Background includes a degree in IT and launching, building, and sustaining new retail technology, technology infrastructures (staff, Cloud Server, software, and outsourcing). Possesses strong knowledge of budgeting, analytics, IT policies and methodologies, flexibility and high level of customer services. Now contributing in the field of BLOCKCHAIN private - public & AI. Always keen to learn new & updated technology as per market standard.</p>
                             <div className="col-lg-4 col-md-4 col-sm-12 padding0">
                                 <div className="about-bottom">
                                     <p>1</p>
                                     <i className="fa fa-pencil about-icon" aria-hidden="true"></i>
                                     <h3>
                                         Project management
                                     </h3>
                                 </div>
                             </div>
                             <div className="col-lg-4 col-md-4 col-sm-12 padding0">
                                 <div className="about-bottom">
                                     <p>2</p>
                                     <i className="fa fa-building about-icon" aria-hidden="true"></i>
                                     <h3>
                                         Cloud Server Solutioning
                                     </h3>
                                 </div>
                             </div>
                             <div className="col-lg-4 col-md-4 col-sm-12 padding0">
                                 <div className="about-bottom">
                                     <p>3</p>
                                     <i className="fa fa-pencil about-icon" aria-hidden="true"></i>
                                     <h3>
                                         Data Analytics - ML - AI
                                     </h3>
                                 </div>
                             </div>
                             <a className="btn-6" href="#contact">Hire Me<span></span></a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="message">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12">
                         <div className="message-details text-center">
                             <h3>I know the value of time and money & i use it well.</h3>
                             <p>The triple constraint is the combination of the three most significant restrictions on any project: scope, schedule and cost. The triple constraint is sometimes referred to as the project management triangle or the iron triangle. Either it use in agile way or in waterfall structure.</p>
                            
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="skill-grid">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                         <div className="skill-details1">
                             <div className="skill-image">
                                 <a className="imagelink" href="." data-lity="">
                                     <i className="fa fa-play"></i>
                                 </a>
                             </div>
                             <div className="skill-details">
                                 <div className="main-title text-left">
                                     <h1>Skill</h1>
                                     <h3>I Am Skillful<span></span></h3>
                                     <p> </p>
                                 </div>
                                 <ul id="skill-main">
                                     <li><div className="expand Web"><h3>Full Stack<span>85%</span></h3></div></li>
                                     <li><div className="expand Graphics"><h3>Project Management<span>90%</span></h3></div></li>
                                     <li><div className="expand Developing"><h3>Mobile Stack<span>82%</span></h3></div></li>
                                     <li><div className="expand Photoshop"><h3>Solution Architecter<span>89%</span></h3></div></li>
                                     <li><div className="expand Photoshop"><h3>Consultancy<span>89%</span></h3></div></li>
                                     <li><div className="expand Photoshop"><h3>Pre-Sales<span>89%</span></h3></div></li>
                                     <li><div className="expand Photography"><h3>Photography<span>95%</span></h3></div></li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className='scrolltop'>
             <div className='scroll icon'><a href="#home"><i className="fa fa-4x fa-angle-up topicon"></i></a></div>
         </div>
         <div className="about-content">
             <div className="expert-grid text-center">
                 <div className="container-fluid no-padding">
                     <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-12 wback wback1">
                             <div className="main-title white-title text-left">
                                 <h1>Statistics</h1>
                                 <h3>My Strong Zone<span></span></h3>
                             </div>
                             <div className="info text-left">
                                 <p>Deadline & MSP of any project </p>
                                 <h3>I have already done 30+ Project Implementation.</h3>
                                 <h3>Most of the work was with foreign clients.</h3>
                                 <h3>I know the importance of clients satisfaction.</h3>
                                 <h3>Very Good review and ranking</h3>
                             </div>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-12 no-padding">
                             <div className="skillimage"></div>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-12 no-padding">
                             <div className="textimage"></div>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-12 wback">
                             <div className="main-title white-title text-left">
                                 <h1>Target</h1>
                                 <h3>My Ambitions<span></span></h3>
                             </div>
                             <div className="expert text-left">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                 <div className="tab" role="tabpanel">
                                    
                                     <ul className="nav nav-tabs" role="tablist">
                                         <li role="presentation" className="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">My Motto</a></li>
                                         <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">My Pride</a></li>
                                         <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">My Attitude</a></li>
                                     </ul>
                                     
                                     <div className="tab-content tabs">
                                         <div role="tabpanel" className="tab-pane fade in active" id="Section1">
                                             <h3>I have a Motto.</h3>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, magna a ultricies volutpat, mi eros viverra massa, vitae consequat nisi justo in tortor. Proin accumsan felis ac felis dapibus, non iaculis mi varius.</p>
                                         </div>
                                         <div role="tabpanel" className="tab-pane fade" id="Section2">
                                             <h3>I am Proud of Me.</h3>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, magna a ultricies volutpat, mi eros viverra massa, vitae consequat nisi justo in tortor. Proin accumsan felis ac felis dapibus, non iaculis mi varius.</p>
                                         </div>
                                         <div role="tabpanel" className="tab-pane fade" id="Section3">
                                             <h3>Don't underestimate my Attitude</h3>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, magna a ultricies volutpat, mi eros viverra massa, vitae consequat nisi justo in tortor. Proin accumsan felis ac felis dapibus, non iaculis mi varius.</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="resume-grid">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12 col-md-12">
                             <div className="main-title text-center">
                                 <h1>Resume</h1>
                                 <h3>My Experience<span></span></h3>
                                 <p>9 years experience</p>
                             </div>
                         </div>
                     </div>
                     <div className="row resume-row">
                         <div className="main-timeline">
                             <div className="timeline">
                                 <div className="timeline-icon"></div>
                                 <div className="timeline-content">
                                     <span className="date">May 2010 - Nov 2012</span>
                                     <h5 className="title">Software Engineer</h5>
                                     <p className="description">
Successfully Implement more than 9 education management projects, Social networking site for CA  on .NET with n-tier architecture
Job Responsibilities:
•	Requirement gathering
•	Analysis the system
•	Designing the system
•	Developing
•	Testing
•	Final Project Presentation</p>
                                 </div>
                             </div>
                             <div className="timeline">
                                 <div className="timeline-icon"></div>
                                 <div className="timeline-content">
                                     <span className="date">May 2013 - Sep 2017</span>
                                     <h5 className="title">IT Asst. Manager</h5>
                                     <p className="description">
                                         •	Increased core system availability to 90% by developing standards and architectural governance and implementing best practices. 
•	Saved more than crore by renegotiating an IT outsourcing contract. 
•	Implementation-Stability of SAGE ERP 300 , SAGE CRM V7.3 , Adrenalin HRMS.
•	Implement ISO 9001-2008
•	Implement Business Process Reengineering
•	Mitigated risk factors through careful analysis of financial and statistical data. Anticipated and managed change (ECM) effectively in rapidly evolving global business environments.
•	Defined processes and tools best suited to each project. Moved between agile and waterfall approaches depending on project specifics and client goals, creating detailed project road maps, plans, schedules and work breakdown structures.
•	Honored with BAPL’s “Best Employee Award” in 2014 in recognition of outstanding project results.</p>
                                 </div>
                             </div>
                             <div className="timeline">
                                 <div className="timeline-icon"></div>
                                 <div className="timeline-content">
                                     <span className="date">Aug 2017 - Present</span>
                                     <h5 className="title">IT Solution Architect</h5>
                                     <p className="description">
                                         Application Development, IOT, Big Data (Hadoop), Mobility, Sage ERP 300, Sage CRM and HRMS. 

Contributing in the field of BLOCKCHAIN & Anti-Counterfeit.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="work-counter text-left">
                 <div id="counter">
                     <div className="container">
                         <div className="row">
                             <div className="col-lg-12 col-md-12">
                                 <div className="white-title text-center">
                                     <h1>Counter</h1>
                                     <h3>My Work Statistics<span></span></h3>
                                     <p>In between this 9 years details technical statistics</p>
                                 </div>
                             </div>
                         </div>
                         <div className="row main-row">
                             <div className="col-lg-3 col-md-3 col-sm-6">
                                 <div className="work-statistics text-center">
                                     <i className="fa fa-anchor stat-icon" aria-hidden="true"></i>
                                     <h3 className="Count">2727</h3>
                                     <p>Project Management</p>
                                 </div>
                             </div>
                             <div className="col-lg-3 col-md-3 col-sm-6">
                                 <div className="work-statistics text-center">
                                     <i className="fa fa-android stat-icon" aria-hidden="true"></i>
                                     <h3 className="Count">2827</h3>
                                     <p>Consultancy</p>
                                 </div>
                             </div>
                             <div className="col-lg-3 col-md-3 col-sm-6">
                                 <div className="work-statistics text-center">
                                     <i className="fa fa-apple stat-icon" aria-hidden="true"></i>
                                     <h3 className="Count">3635</h3>
                                     <p>Solutioning</p>
                                 </div>
                             </div>
                             <div className="col-lg-3 col-md-3 col-sm-6">
                                 <div className="work-statistics text-center">
                                     <i className="fa fa-beer stat-icon" aria-hidden="true"></i>
                                     <h3 className="Count">2120</h3>
                                     <p>POC</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div id="testimonial">
         <div className="testimonial-content">
             <div className="testimonial-grid">
                 <div className="testimonial-details">
                     <section id="carousel">    				
                         <div className="container">
                             <div className="row">
                                 <div className="col-lg-12 col-md-12">
                                     <div className="white-title text-center">
                                         <h1>Clients & colleagues</h1>
                                         <h3>What Say About Me<span></span></h3>
                                         <p>Appreciation on our work.</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-lg-12 col-md-12 ">
                                     <div id="testimonial-slider" className="owl-carousel">
                                         <div className="testimonial">
                                             <div className="content">
                                                 <p className="description">
                                                     Very talented, self managed, very professional, good analytics capabilities and knowledgeable person. Will always like to have in my dream team. 
                                                 </p>
                                             </div>
                                             <div className="testimonial-pic">
                                                 <img src="./assets/img/client1.jpg" alt=""/>
                                             </div>
                                             <div className="testimonial-review">
                                                 <h3 className="testimonial-title">Rajat Sikdar</h3>
                                                 <span>IT Manager at Primarc Solution</span>
                                                 
                                             </div>
                                         </div>
                                         <div className="testimonial">
                                             <div className="content">
                                                 <p className="description">
                                                     Abhisek is very efficient colleague, he loves to be updated with new technologies and also handling his team efficiently. 
                                                 </p>
                                             </div>
                                             <div className="testimonial-pic">
                                                 <img src="./assets/img/client2.jpg" alt=""/>
                                             </div>
                                             <div className="testimonial-review">
                                                 <h3 className="testimonial-title">Jyoti Sharma</h3>
                                                 <span>HR Manager at arodek </span>
                                                 
                                             </div>
                                         </div>
                                         <div className="testimonial">
                                             <div className="content">
                                                 <p className="description">
                                                    It is my honour to recommend Abhisek da as project manager over the implementation of ERP and CRM at Kutchina. I was really lucky to get him as my Mentor in Kutchina. Due to his leadership and management skills, Abhisek da is highly respected by his colleagues and subordinates. His enthusiastic, optimistic attitude is contagious and serves to motivate and energize his team members. He is a natural leader who has the gift of identifying each team member’s primary talents and bringing out the best in each one throughout the course of the entire project. Abhisek da is very calm under pressure. He has superb problem-solving skills as well as exceptional team-building skills.</p>
                                             </div>
                                             <div className="testimonial-pic">
                                                 <img src="./assets/img/client3.jpg" alt=""/>
                                             </div>
                                             <div className="testimonial-review">
                                                 <h3 className="testimonial-title">Aritra Ghosh</h3>
                                                 <span>Technology Analyst at Infosys</span>
                                                 
                                             </div>
                                         </div>
                                         <div className="testimonial">
                                             <div className="content">
                                                 <p className="description">
                                                    ‘Genuine expert’ is the phrase that comes to mind when I think about Abhisek Da. A true mentor who will help me a lot to learn the latest technologies in both web & mobile development.</p>
                                             </div>
                                             <div className="testimonial-pic">
                                                 <img src="./assets/img/client4.jpg" alt=""/>
                                             </div>
                                             <div className="testimonial-review">
                                                 <h3 className="testimonial-title">Chiranjib Pahari</h3>
                                                 <span>Senior Mobile Consultant at arodek</span>
                                                 
                                             </div>
                                         </div>
                                     </div>
                                 </div>						
                             </div>
                         </div>
                     </section>
                 </div>
             </div>
         </div>
     </div>
         
    
         
   
         
     <div id="contact">
         <div id="contact-content">
             <div className="contact-grid">
                 <div className="contact-form-details">
                     <div className="container">
                         <div className="row">
                             <div className="col-lg-12 col-md-12">
                                 <div className="main-title text-center">
                                     <h1>Contact</h1>
                                     <h3>Write Me Now<span></span></h3>
                                     <p>For IT Project Consulting, Solution Architect, Cloud Computing</p>
                                 </div>
                             </div>
                         </div>
                         <div className="row margin">
                             <div className="contact-form">
                                 <form id="contactForm" className="contact-form shake" data-toggle="validator">
                                     <div className="col-lg-6 col-md-12 col-sm-12 no-padding-col">
                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lastbox no-padding">
                                             <div className="form-group">
                                                 <div className="controls">
                                                     <input type="text" id="name" className="form-control" placeholder="Name" required data-error="Please enter your name"/>
                                                     <div className="help-block with-errors"></div>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lastbox no-padding">
                                             <div className="form-group">
                                                 <div className="controls">
                                                     <input type="email" className="email form-control" id="email" placeholder="Email" required data-error="Please enter your email"/>
                                                     <div className="help-block with-errors"></div>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lastbox no-padding">
                                             <div className="form-group">
                                                 <div className="controls">
                                                     <input type="text" id="msg_subject" className="form-control" placeholder="Subject" required data-error="Please enter your message subject"/>
                                                     <div className="help-block with-errors"></div>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lastbox no-padding">
                                             <div className="form-group">
                                                 <div className="controls">
                                                     <textarea id="message" rows="7" placeholder="Massage" className="form-control" required data-error="Write your message"></textarea>
                                                     <div className="help-block with-errors"></div>
                                                 </div>
                                             </div>
                                         </div>
                                         <button type="submit" id="submit" className="btn btn-success"> Send Message</button>
                                         <div id="msgSubmit" className="h3 text-center hidden"></div> 
                                         <div className="clearfix"></div> 
                                     </div>
                                     <div className="col-lg-6 col-md-12 col-sm-12 no-padding-col-info">
                                         <div className="contact-bottom-grid text-left">
                                             <div className="contact-top">
                                                 <h3>Abhisek Bose</h3>
                                                 <p>IT Solution Architect | Data Analyst | AI | ML | BLOCKCHAIN | IOT</p>
                                             </div>
                                             <div className="contact-col-grid" data-wow-delay=".2s">
                                                 <i className="fa fa-map-marker contact-icon" aria-hidden="true"></i>
                                                 <h3>Address</h3>
                                                 <p>Kolkata,India</p>
                                             </div>
                                             <div className="contact-col-grid" data-wow-delay=".4s">
                                                 <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
                                                 <h3>Email</h3>
                                                 <p>abhisek.asp.net@gmail.com</p>
                                             </div>
                                             <div className="contact-col-grid lastcontactgrid" data-wow-delay=".6s">
                                                 <i className="fa fa-mobile contact-icon" aria-hidden="true"></i>
                                                 <h3>Phone</h3>
                                                 <p>+919674251877</p>
                                             </div>
                                         </div>
                                     </div>
                                 </form> 
                             </div>
                         </div>
                     </div>
                 </div>
                     
                 <div className="copyright-details text-center bubbles">
                     <h2>Abhisek Bose</h2>
                     <div className="about-social-icon bottom-icon text-center">
                         <ul className="about-social"> 
                             <li><a href="https://www.facebook.com/abhisek.face" target="newtab"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                         <li><a href="https://www.linkedin.com/in/abhisek-bose" target="newtab"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                         <li><a href="https://www.instagram.com/iabhisek.bose/" target="newtab"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                         </ul>
                     </div>
                     <div className="copyright">
                         <h3>copyright and design: Abhisek Bose</h3>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>

           </div>    
        );
    }
}

export default Home;