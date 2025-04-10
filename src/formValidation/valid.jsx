import React, { useState } from 'react'

const valid = () => {

    const {form, setForm} = useState({
        name: '',
        password: '',
        job: ''
    })

    const {errors, setErrors} = useState({});
    const {message, setMessage} = useState('');

    const validate = () => {
        const errors = {};

        if(!form.name.trim()) {
            errors.name = 'please what is your name';
        }

        if ( !form.password) {
            errors.password = "fill in the password field";
        }

        if(!form.job) {
            errors.job = 'what is your job';
        }
    }

        const handleChange = async (e) => {
            const {name, value} = e.target;
            setForm((prev) => ({...prev, [name]: value}))
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const formErrors = validate();

            if(Object.keys(form).length===0) {
                try{
                    const response = await fetch
                }
            }

        }
  return (
    <div>valid</div>
  )
}

export default valid