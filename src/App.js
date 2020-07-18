import React, { Component } from 'react'
import './App.css';
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

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
    dayOfTheWeek = (centuryDigits, yearDigits, month, day) => ((((centuryDigits / 4) - 2 * centuryDigits - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1) / 10)) + day) % 7)
    dateValidation = (date) => {
        const dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        !date.match(dateFormat) && ("invalid date format")

    }
    render() {
        return (
            <div className="main-wrapper">
                <div className="form-wrapper">
                    <form onChange={(event) => console.log(event)}>
                        <div className="input-wrapper">
                            <input type='date' />
                            <select>
                                <option value='m'>Male</option>
                                <option value='f'>Female</option>
                            </select>
                            <input type='submit' value="Submit"/>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default App
