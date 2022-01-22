import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";


function Register(props) {
    const [userDetails, setuserDetails] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    //---------------------------------------------------------
    const [isFirstNameValid, setisFirstNameValid] = useState(true)
    const [firstNameError, setfirstNameError] = useState('')
    const [isLastNameValid, setisLastNameValid] = useState(true)
    const [lastNameError, setlastNameError] = useState('')
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')
    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')
    const [isConfirmPasswordValid, setisConfirmPasswordValid] = useState(true)
    const [confirmPasswordError, setconfirmPasswordError] = useState('')
    const [isGenderValid, setisGenderValid] = useState(false)
    const [genderError, setgenderError] = useState('')
    const [isPhoneNumberValid, setisPhoneNumberValid] = useState(true)
    const [phoneNumberError, setphoneNumberError] = useState('')


    //---------------------------------------------------------
    const Register = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);
        const isFirstNameValid = validateFirstName(userDetails.firstName)
        const isLastNameValid = validateLastName(userDetails.lastName)
        const isEmailValid = validateEmail(userDetails.email)
        const isPasswordValid = validatePassword(userDetails.password)
        const isConfirmPasswordValid = validateConfirmPassword(userDetails.confirmPassword, userDetails.password)
        const isGenderValid = validateGender(userDetails.gender)
        const isphoneNumberValid = validatePhoneNumber(userDetails.phoneNumber)



        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isGenderValid && isphoneNumberValid) {
            console.log('props', props);
            props.history.push('/home')
        } else {
            console.error('not valid');
        }
    }
    const validateFirstName = (firstName) => {
        if (firstName) {
            let fName = (/^[a-zA-Z]+$/);
            if (firstName.match(fName)) {
                setisFirstNameValid(true)
                setfirstNameError('')
                return true
            } else {
                setisFirstNameValid(false)
                setfirstNameError('*Please enter valid name')
                return false
            }
        } else {
            setisFirstNameValid(false)
            setfirstNameError('*Name cannot be empty')
            return false
        }
    }
    const validateLastName = (lastName) => {
        if (lastName) {
            let lName = (/^[a-zA-Z]+ [a-zA-Z]+$/);
            if (lastName.match(lName)) {
                setisLastNameValid(true)
                setlastNameError('')
                return true
            } else {
                setisLastNameValid(false)
                setlastNameError('*Please enter valid name')
                return false
            }
        } else {
            setisLastNameValid(false)
            setlastNameError('*Name cannot be empty')
            return false
        }
    }
    const validateEmail = (email) => {
        if (email) {
            let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (email.match(mail)) {
                setisEmailValid(true)
                setemailError('')
                return true
            } else {
                setisEmailValid(false)
                setemailError('*Please enter valid email')
                return false
            }
        } else {
            setisEmailValid(false)
            setemailError('*Email cannot be empty')
            return false
        }
    }
    const validatePassword = (password) => {
        if (password) {
            let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*]).{6,20}$/;
            if (password.match(pass)) {
                setisPasswordValid(true)
                setpasswordError('')
                return true
            } else {
                setisPasswordValid(false)
                setpasswordError('*Please enter valid password')
                return false
            }
        } else {
            setisPasswordValid(false)
            setpasswordError('*Password cannot be empty')
            return false
        }
    }

    const validateConfirmPassword = (confirmPassword, password) => {
        if (confirmPassword) {

            if (confirmPassword === password) {
                setisConfirmPasswordValid(true)
                setconfirmPasswordError('')
                return true
            } else {
                setisConfirmPasswordValid(false)
                setconfirmPasswordError('*Invalid')
                return false
            }
        } else {
            setisConfirmPasswordValid(false)
            setconfirmPasswordError('*ConfirmPassword cannot be empty')
            return false
        }
    }
    const validateGender = (gender) => {
        console.log(gender);
        if ((gender==='Male') || (gender==='Female')) {
            setisGenderValid(true)
            setgenderError('')
            return true
        } else {
            setisGenderValid(false)
            setgenderError('*Please select gender')
            return false
        }
    }
    const validatePhoneNumber = (pnumber) => {
        if (pnumber) {
            let num = /^\d{10}$/;
            if (pnumber.match(num)) {
                setisPhoneNumberValid(true)
                setphoneNumberError('')
                return true
            } else {
                setisPasswordValid(false)
                setphoneNumberError('*Please enter valid phoneNumber')
                return false
            }
        } else {
            setisPhoneNumberValid(false)
            setphoneNumberError('*PhoneNumber cannot be empty')
            return false
        }
    }
    //-----------------------------------------------------------
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] = event.target.value
        setuserDetails(userDetailsCopy)
    }
    //-----------------------------------------------------------
    const navigateToLogin = () => {
        props.history.push('/login')
    }

    return (
        <div className="register">
            <form onSubmit={Register} className="shadow p-3 mb-5 bg-white rounded">
                <div className="form-group p-2">
                
                    <div className="row">
                        <div className="col">
                            <input className=" form-control form-control-sm widthchange" type="firstName"
                                name="firstName"
                                value=""
                                placeholder='Enter First Name'
                                style={{padding:'10px' ,width:'350px'}}

                              
                                onChange={(event) => { handleChange(event) }}
                                value={userDetails.firstName} />
                            {!isFirstNameValid ? <span style={{
                                color: 'red',
                                fontSize: '12px'
                            }}>{firstNameError}</span> : null}
                        </div>
                        <div className="col">
                            <input className=" form-control form-control-sm widthchange" type="lastName"
                                name="lastName"
                                value=""
                                style={{marginTop:'20px',padding:'10px',width:'350px',marginTop:'20px'}}
                                placeholder='Enter last Name'
                                onChange={(event) => { handleChange(event) }}
                                value={userDetails.lastName} />
                            {!isLastNameValid ? <span style={{
                                color: 'red',
                                fontSize: '12px'
                            }}>{lastNameError}</span> : null}
                        </div>
                    </div>
                </div>
                <div className="form-group p-2">
                    <label>Gender: </label>
                    <label >Male</label>
                    <input type="radio"
                        name="gender"
                        value="Male"
                        onChange={(event) => { handleChange(event) }}
                        // value={//userDetails.gender} 
                        />
                    <label >Female</label>
                    <input type="radio"
                        name="gender"
                        value="Female"
                        onChange={(event) => { handleChange(event) }}
                        // value={userDetails.gender} 
                        />
                    {!isGenderValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{genderError}</span> : null}

                </div>
                <div className="form-group p-2">
                    
                    <input className=" form-control form-control-sm widthchange" type="phoneNumber"
                        name="phoneNumber"
                        value=""
                        style={{padding:'10px' ,width:'350px'}}

                        placeholder='Phonenumber'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.phoneNumber} />
                        
                    {!isPhoneNumberValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{phoneNumberError}</span> : null}
                </div>
                <div className="form-group p-2">
                    <label >Email ID: </label><br />
                    <input className=" form-control form-control-sm widthchange" type="text"
                        name="email"
                        style={{padding:'10px' ,width:'350px'}}

                        value=""
                        placeholder='Enter Email'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.email} />
                    {!isEmailValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{emailError}</span> : null}
                </div>
                <div className="form-group p-2">
                    <label>Password: </label><br />
                    <input className=" form-control form-control-sm widthchange" type="text"
                        name="password"
                        value=""
                        style={{padding:'10px' ,width:'350px'}}

                        placeholder='Enter Password'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.password} />
                    {!isPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{passwordError}</span> : null}
                </div>
                <div className="form-group p-2">
                    
                    <input className=" form-control form-control-sm widthchange" type="confirmPassword"
                        name="confirmPassword"
                        value=""
                        style={{padding:'10px' ,width:'350px'}}

                        placeholder='Confirm Password'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.confirmPassword} />
                        
                    {!isConfirmPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{confirmPasswordError}</span> : null}
                </div>
                <div className="form-group  p-2">
                    <input className="btn btn-secondary" type="submit" value="Register" /><br />
                    Already have an account? <span onClick={() => { navigateToLogin() }} style={{color:'white',backgroundColor:'blue',fontSize:'20px'}}>Login</span>
                </div>
            </form>


        </div>
    );
}

export default Register


