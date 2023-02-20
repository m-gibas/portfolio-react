import home from './home.png';
import './Home.css'

const Home = () => {
  return (
    <div className="container">
        <h2>Welcome to my Portfolio website!</h2>
        <img src={home} alt='home' />
    </div>
  )
}

export default Home