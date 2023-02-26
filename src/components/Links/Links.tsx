import './Links.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Links = () => {
  return (
    <div className="container container-links">
        <h3>You can find me there:</h3>
        <div className='links-icons'>
          <a
              href="https://github.com/m-gibas"
              target="_blank"
              rel="noreferrer noopener"
              title="Click me!"
              className='links-icon'
            ><BsGithub size={'2.5rem'} />
          </a>
          <a
              href="https://www.linkedin.com/in/maksymilian-gibas-259791235/"
              target="_blank"
              rel="noreferrer noopener"
              title="Click me!"
              className='links-icon'
            ><BsLinkedin size={'2.5rem'} />
          </a>
        </div>
    </div>
  )
}

export default Links