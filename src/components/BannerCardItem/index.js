// Write your code here.
import './index.css'

const Welcome = props => {
  const {bannerProp} = props
  const {headerText, description, className} = bannerProp

  return (
    <div className="List-container">
      <li className={className}>
        <div className="forRow">
          <h1 className="forHeader">{headerText}</h1>
          <p className="forPara">{description}</p>
          <div>
            <button className="for-button" onClick="">
              Show More
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}
export default Welcome
