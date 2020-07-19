import React, { Component } from 'react'
import './App.scss';
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateIsInvalid: false,
            genderIsInvalid: false,
            akanName: null,
            proceed: false,
            currentStep: 1
        }
    }
    names = {
        Sunday: {
            male: 'Kwasi',
            female: 'Akosua'
        },
        Monday: {
            male: 'Kwadwo',
            female: 'Adwoa'
        },
        Tuesday: {
            male: 'Kwabena',
            female: 'Abenaa'
        },
        Wednesday: {
            male: 'Kwaku',
            female: 'Akua'
        },
        Thursday: {
            male: 'Yaw',
            female: 'Yaa'
        },
        Friday: {
            male: 'Kofi',
            female: 'Afua'
        },
        Saturday: {
            male: 'Kwame',
            female: 'Ama'
        },
    }

    dateValidation = date => {
        console.log('datefrom dateValidation', date);
        const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        console.log('match', dateFormat.test(date));
        if (!dateFormat.test(date) || date === null || date === '' || date === undefined) {
            this.setState({ dateIsInvalid: true })
            return false
        } else {
            this.setState({ dateIsInvalid: false })
            return true
        }

    }
    genderValidation = gender => ((!gender.match(/male|female/gi) || gender === null || gender === undefined) && this.setState({ genderIsInvalid: true }))
    handleForm = event => {
        event.preventDefault()
        const { dateIsInvalid, genderIsInvalid } = this.state;
        const form = new FormData(event.target)
        const date = form.get('date')
        const gender = form.get('gender')
        this.dateValidation(date)
        this.genderValidation(gender)
        if (dateIsInvalid === false && date !== undefined && date.length > 9 && gender.length >= 4 && genderIsInvalid === false) {
            const newDate = new Date(date)
            const dayBorn = newDate.getDay()
            const daysOfTheWeek = Object.keys(this.names)
            console.log(daysOfTheWeek);
            console.log(dayBorn)
            const akanName = this.names[daysOfTheWeek[dayBorn]][gender]
            this.setState({ akanName })
            this.handleStepIncrement('next')
        }
    }
    handleDateChange = date => {
        this.dateValidation(date);
    }
    handleGenderChange = gender => {
        this.genderValidation(gender)
    }
    handleStepIncrement = (type = 'next') => {
        type === 'next' ? this.setState(prevState => ({ currentStep: prevState.currentStep++ }))
            :
            this.setState(prevState => ({ currentStep: prevState.currentStep-- }))
    }
    render() {
        const { dateIsInvalid, genderIsInvalid, akanName, currentStep } = this.state;

        return (
            <div className="main-wrapper">
                {currentStep === 1 &&


                    <div className="project-description-wrapper">
                        <p>

                            This is a web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born.
                        </p>
                        <button onClick={() => this.handleStepIncrement('next')} className="button">Proceed to next step</button>


                    </div>}
                {currentStep === 2 &&

                    <div className="form-wrapper">
                        <form onSubmit={event => this.handleForm(event)}>
                            <div className="input-wrapper">
                                <label for="date">Date of Birth</label>
                                <input id="date" className="input-item" name="date" onChange={event => this.handleDateChange(event.target.value)} type='date' />
                                {dateIsInvalid && <p className="input-error">The date is either blank or invalid</p>}
                            </div>
                            <div className="input-wrapper">
                                <label for="gender">Date of Birth</label>
                                <select id='gender' onChange={event => this.handleGenderChange(event.target.value)} className="input-item" name="gender">
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select>
                                {genderIsInvalid && <p className="input-error">The gender is either blank or invalid</p>}
                            </div>
                            <div className="input-wrapper">
                                {(dateIsInvalid === false && genderIsInvalid === false) && <input className="submit" type='submit' value="Get Akan Name" />}

                            </div>
                            <button onClick={() => this.handleStepIncrement('prev')} className="button">Previous Step</button>

                        </form>

                    </div>

                }
                {currentStep === 3 &&

                    <div className="akanName-wrapper">
                        <p>Congratulations, your Akan Name is {akanName}</p>
                        <button onClick={() => this.handleStepIncrement('prev')} className="button">Previous Step</button>
                    </div>

                }
            </div>
        )
    }
}
export default App
