import React, {  useState } from "react";

export const FormValidation = () => {
  const { form, setForm } = useState({
    name: "",
    email: "",
    message: "",
  });

  const { errors, setErrors } = useState({});
  const { responseMsg, setResponseMsg } = useState("");

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) {
      errors.name = "Name is Required";
    }
    if (!form.email.trim()) {
      errors.email = "Email is Required";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      errors.email = "Invalid Email Address";
    }
    if (!form.message.message.trim()) {
      errors.message = "Message is Empty Please fill in";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if(object.keys(form).length===0) {
        try{
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form)
                }
            );

            if(response.ok) {
                setResponseMsg("Form is Submitted Successfully");
                setForm({name: "", email: "", message: ""})
            }
            else{
                setResponseMsg('Something went wrong. Try again later');
            } 
        }
        catch(errors) {
            setResponseMsg("Error Submitting the Form. Please try again later Thankyou")
        }
    }

    
    };

    return <div></div>;
};
