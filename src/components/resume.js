
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw94OjqMOjukkF1EOn9cO3VUske1EwoWfkkA&usqp=CAU"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Kwee F. Wang </h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, 
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-6789</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Education 
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Experience</h2> 
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName="First 2nd Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/css"
              progress={60}
            />
            <Skills
              skill="Node.js"
              progress={50}
            />
            <Skills
              skill="React"
              progress={30}
            />
          </Cell>  
        </Grid>      
      </div>
    )
  }
}

export default Resume;