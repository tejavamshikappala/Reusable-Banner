// Write your code here.
import './index.css'

const Welcome = props => {
  const {eachBanner} = props
  const {headerText, className, description} = eachBanner
  return (
    <li className={`List-container ${className}`}>
      <div className="for-row">
        <h1 className="for-header">{headerText}</h1>
        <p className="for-para">{description}</p>
        <div>
          <button className="for-button" type="button">
            Show More
          </button>
        </div>
      </div>
    </li>
  )
}

export default Welcome
