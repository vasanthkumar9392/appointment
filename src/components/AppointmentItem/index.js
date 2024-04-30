import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointDeataile, addAsFavorite} = props
  const {id, title, date, isFavorite} = appointDeataile
  console.log(date)
  const newDate = `${format(new Date(date), 'dd MMMM yyyy, EEEE')}`
  const clickOnisFavorite = () => {
    addAsFavorite(id)
  }
  const starImage = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list">
      <div className="container">
        <p className="title">{title}</p>
        <p className="date">{newDate}</p>
      </div>
      <button
        className="button1"
        type="button"
        data-testid="star"
        onClick={clickOnisFavorite}
      >
        <img className="star-icon" src={starImage} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
