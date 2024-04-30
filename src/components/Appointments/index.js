import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', starred: false}

  addAppointment = event => {
    event.preventDefault()
    const {title, date, appointmentsList} = this.state
    const newAppointment = {
      id: v4(),
      title,
      date,
      isFavorite: false,
    }
    this.setState({
      appointmentsList: [...appointmentsList, newAppointment],
      title: '',
      date: '',
    })
  }

  addAsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachObj => {
        if (id === eachObj.id) {
          console.log(eachObj)
          return {...eachObj, isFavorite: !eachObj.isFavorite}
        }
        return eachObj
      }),
    }))
  }

  userEnterTile = event => {
    this.setState({title: event.target.value})
  }

  userEnterDate = event => {
    this.setState({date: event.target.value})
  }

  isStarredChanged = () => {
    this.setState(prevState => ({starred: !prevState.starred}))
  }

  render() {
    const {appointmentsList, title, date, starred} = this.state
    let resultedLists
    let specialClassName
    if (starred === true) {
      resultedLists = appointmentsList.filter(
        eachObj => eachObj.isFavorite === true,
      )
      specialClassName = 'is-true-class'
    } else {
      resultedLists = appointmentsList
      specialClassName = 'is-false-class'
    }

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="inner-top-container">
            <form className="form-container" onSubmit={this.addAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <label className="label-text" htmlFor="title">
                TITLE
              </label>
              <input
                className="input-element"
                type="text"
                id="title"
                placeholder="Title"
                onChange={this.userEnterTile}
                value={title}
              />
              <label className="label-text" htmlFor="date">
                DATE
              </label>
              <input
                className="input-element"
                type="date"
                id="date"
                onChange={this.userEnterDate}
                value={date}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="appoint-container">
            <h1 className="para">Appointments</h1>
            <button
              className={specialClassName}
              type="button"
              data-testid="star"
              onClick={this.isStarredChanged}
            >
              Starred
            </button>
          </div>
          <ul className="lists">
            {resultedLists.map(eachObj => (
              <AppointmentItem
                key={eachObj.id}
                appointDeataile={eachObj}
                addAsFavorite={this.addAsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
