import { useState, useEffect } from 'react';
import './Style.css'
const Validation = () => {


    const intivalues = { userName: '', email: '', password: '', confimpass: '' };
    const [formValues, setFormValues] = useState(intivalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    }

    const HandlSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        //after submit the form data the input text will be empty
        if ((formValues.userName !== "") && (formValues.email !== "") && (formValues.password === formValues.confimpass)) {
            setFormValues({
                userName: "",
                email: "",
                password: "",
                confimpass: ""
            })
        }

    };

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])



    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (!values.userName) {
            errors.userName = "*UserName is required"
        }
        if (!values.email) {
            errors.email = "*Email is required!"
        }
        else if (!regex.test(values.email)) {
            errors.email = "Please Enter Valide Email"

        }

        if (!values.password) {
            errors.password = "*Password is required "
        }
        else if (!passregex.test(values.password)) {
            errors.password = "please enter strong password.."

        }
        else if (!values.password > 10) {
            errors.password = "*password  cannot more then 10 letters  valid.."

        }

        if (!values.confimpass) {
            errors.confimpass = "*Confirm Password is required.."
        }
        //here we to check the confirm password is equal or not to password if its not
        //then its display error
        if (formValues.confimpass !== formValues.password) {
            errors.confimpass = "password mismatch"
        }
        return errors;

    }

    return (
        <div className='Container'>

            {
                (Object.keys(formErrors).length === 0 && isSubmit
                    ?
                    <div className="success">Validation Success </div>
                    :
                    <div className='unsccessful'> Validation unsccessful </div>)
            }
            <form className='form' onSubmit={HandlSubmit}>
                <div className='head'>Please Register Here</div>

                <br />
                <div className='field'>
                    <input type='text'
                        name='userName'
                        onChange={handleChange}
                        value={formValues.userName}
                        placeholder='UserName' />
                </div>
                <div className='error username'>
                    {formErrors.userName}
                </div>
                <div className='field'>
                    <input type='text'
                        placeholder='email'
                        name='email'
                        onChange={handleChange}
                        value={formValues.email} />
                </div>
                <div className='error'>
                    {formErrors.email}
                </div>
                <div className='field'>
                    <input type='password'
                        placeholder='password'
                        name='password'
                        onChange={handleChange}
                        value={formValues.password} />
                </div>
                <div className='error'>
                    {formErrors.password}
                </div>
                <div className='field'>
                    <input type='password'
                        placeholder='Confirm password'
                        name='confimpass'
                        onChange={handleChange}
                        value={formValues.confimpass} />
                </div>
                <div className='error'>
                    {formErrors.confimpass}
                </div>
                <button className='btn btn-success' type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Validation;