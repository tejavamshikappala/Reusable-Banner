import './App.css'
import Welcome from './components/BannerCardItem/index'
import './components/BannerCardItem/index.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  // <h1>Replace this element with your code</h1>
  <ul className="forUl">
    {bannerCardsList.map(eachItem => (
      <Welcome bannerProp={eachItem} key={eachItem.id} />
    ))}
  </ul>
)

export default App
