import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="notfound-container">
      <img
        className="notfound-img"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1 className="notfound-heading">Lost Your Way?</h1>
      <p className="notfound-description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
