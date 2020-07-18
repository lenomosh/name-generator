import React, { Component } from 'react'
import './App.scss';
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateIsInvalid: false,
            genderIsInvalid: false,
            date: '',
            gender: '',

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

    dateValidation = (date) => {
        const dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (date.match(dateFormat)) {
            this.setState({ dateIsInvalid: true })
        }

    }
    genderValidation = (gender) => ((gender !== 'm' || gender !== 'f') && this.setState({ genderIsInvalid: true }))
    splitDate = date =>{
        const dateArray =date.split('-').join('/').split('/')
        return {
            year:dateArray[0],
            month:dateArray[1],
            day:dateArray[2],
        }
    }
    handleForm = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const date = form.get('date')
        const gender = form.get('gender')
        /** */
        const splittedDate =this.splitDate(date)
        const centuryDigits = parseInt(splittedDate.year.toString().slice(0,2));
        // console.log(centuryDigits);
        const yearDigits =parseInt(splittedDate.year.toString().slice(2));
        console.log(yearDigits);
        // const dayBorn = this.getDayOfTheWeek(centuryDigits,yearDigits,splittedDate.month,splittedDate.day)
        const newDate = new Date(date)
        const dayBorn = newDate.getDay()
        console.log(dayBorn)


    }
    handleDateChange = date => this.setState({ date })
    handleGenderChange = gender => this.setState({ gender })
    render() {
        return (
            <div className="main-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={(event) => this.handleForm(event)} onChange={(event) => console.log(event)}>
                        <div className="input-wrapper">
                            <input name="date" onChange={(event) => this.dateValidation(event.target.value)} type='date' />
                            {this.state.dateIsInvalid && <p>The date is invalid</p>}
                            <select name="gender">
                                <option value='m'>Male</option>
                                <option value='f'>Female</option>
                            </select>
                            {this.state.genderIsInvalid && <p>The gender is invalid</p>}
                            <input type='submit' value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default App
