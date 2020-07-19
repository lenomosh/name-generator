import React, { useState } from 'react'
import './App.scss';
const App = () => {
    const [genderIsInvalid, setGenderIsInvalid] = useState(false)
    const [dateIsInvalid, setDateIsInvalid] = useState(false);
    const [akanName, setAkanName] = useState(null)
    const [currentStep, setCurrentStep] = useState(1)

    const names = {
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
    const dateValidation = date => {
        console.log('datefrom dateValidation', date);
        const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        console.log('match', dateFormat.test(date));
        if (!dateFormat.test(date) || date === null || date === '' || date === undefined) {
            setDateIsInvalid(true)
            return false
        } else {
            setDateIsInvalid(false)
            return true
        }

    }
    const genderValidation = gender => ((!gender.match(/male|female/gi) || gender === null || gender === undefined) && setGenderIsInvalid(true))
    const handleForm = event => {
        event.preventDefault()
        const form = new FormData(event.target)
        const date = form.get('date')
        const gender = form.get('gender')
        dateValidation(date)
        genderValidation(gender)
        if (dateIsInvalid === false && date !== undefined && date.length > 9 && gender.length >= 4 && genderIsInvalid === false) {
            const newDate = new Date(date)
            const dayBorn = newDate.getDay()
            const daysOfTheWeek = Object.keys(names)
            console.log(daysOfTheWeek);
            console.log(dayBorn)
            const akanName = names[daysOfTheWeek[dayBorn]][gender]
            setAkanName(akanName)
            handleStepIncrement('next')
        }
    }
    const handleDateChange = date => {
        dateValidation(date);
    }
    const handleGenderChange = gender => {
        genderValidation(gender)
    }
    const handleStepIncrement = (stepType = 'next') => {
        console.log(stepType);
        if (stepType === 'next') {
            setCurrentStep(currentStep + 1)

        } else {
            setCurrentStep(currentStep - 1)

        }

    }

    return (
        <div className="main-wrapper">
            {currentStep === 1 &&


                <div className="project-description-wrapper">
                    <p>

                        This is a web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born.
                        </p>
                    <button onClick={() => handleStepIncrement()} className="button">Proceed to next step</button>


                </div>}
            {currentStep === 2 &&

                <div className="form-wrapper">
                    <form onSubmit={event => handleForm(event)}>
                        <div className="input-wrapper">
                            <label for="date">Date of Birth</label>
                            <input id="date" className="input-item" name="date" onChange={event => handleDateChange(event.target.value)} type='date' />
                            {dateIsInvalid && <p className="input-error">The date is either blank or invalid</p>}
                        </div>
                        <div className="input-wrapper">
                            <label for="gender">Gender</label>
                            <select id='gender' onChange={event => handleGenderChange(event.target.value)} className="input-item" name="gender">
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            {genderIsInvalid && <p className="input-error">The gender is either blank or invalid</p>}
                        </div>
                        <div className="input-wrapper">
                            {(dateIsInvalid === false && genderIsInvalid === false) && <input className="submit" type='submit' value="Get Akan Name" />}

                        </div>
                        <button onClick={() => handleStepIncrement('prev')} className="button">Previous Step</button>

                    </form>

                </div>

            }
            {currentStep === 3 &&

                <div className="akanName-wrapper">
                    <p>Congratulations, your Akan Name is {akanName}</p>
                    <button onClick={() => handleStepIncrement('prev')} className="button">Previous Step</button>
                </div>

            }
        </div>
    )
}
export default App
