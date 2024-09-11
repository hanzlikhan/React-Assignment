import React , {useState} from "react";

const Form = () =>{
  const [formData , setFormData] = useState({
    userId : "",
    password : "",
    name: "",
    address : "",
    country: "",
    zipcode : "",
    email: "",
    sex: "",
    language : ""
  })

  const [formError , setFormError]  = useState({})

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validate = ()=>{
    const errors = {}
    if (
      !formData.userId ||
      formData.userId.length > 5 ||
      formData.userId.length < 12
    )
    {
      errors.userId = "Required and must be more than 5 characters and greater than 12 characters"
    }
    if (
      !formData.password ||
      formData.password.length > 7 ||
      formData.password.length < 12
    ) {
      errors.password =
        "Required and must be more than 5 characters and greater than 12 characters";
    }
    if (
      !formData.name || !/^[A-Za-z]+$/.test(formData.name)
    ){
      errors.name = "Required and must be the alphabetic"
    }
    if(!formData.country){
      errors.country = "Required country name"
    }
    if(!formData.zipcode || !isNaN(formData.zipcode)){
      errors.zipcode = "Required and must be the numeric only"
    }
    if(!formData.email || !/\S+@\S+\.\S+/.test(formData.email)){
      errors.email = "required and must be the valid email"
    }
    if(!formData.language){
      errors.language= "must to select the language";
    }
    setFormError(errors);
    return Object.keys(errors).length === 0;
  }
   const handleSubmit = (e) => {
     e.preventDefault();
     if(validate()){
      const message = `
      User ID: ${formData.userId}
      Password : ${formData.password}
      Name : ${formData.name}
      address : ${formData.name}
      Country : ${formData.country}
      Zipcode : ${formData.zipcode}
      Email : ${formData.email}
      sex : ${formData.sex}
      Language : ${formData.language}
      About : ${formData.about}
      `
      alert(`Form submiited successfully ! \n\n ${message}`)
     }
   };
  return (
    <>
      <div className="app">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="userId">User Id:</label>
            <input type="text" 
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required/>
            <span className="errors">{formErrors.userId}</span>
          </div>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
              <input type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required />
              <span>formErrors</span>
          </div>
        </form>
      </div>
    </>
  );
  
}