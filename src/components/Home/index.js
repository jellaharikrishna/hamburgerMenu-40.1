import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        className="home-img-sm"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="home-img-lg"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </>
)

export default Home
