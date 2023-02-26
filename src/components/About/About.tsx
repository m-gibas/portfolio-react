import './About.css'
import about from './about.jpg'

const About = () => {
  return (
    <div className="container container-about">
        <section>
          <h3>Hi!</h3> 
          <span>
          My name is Max and I'm currently seeking a job! <br />
          At the moment I'm trying to learn React with TypeScript.
          </span>
        </section>
        <img src={about} alt='about' />
    </div>
  )
}

export default About