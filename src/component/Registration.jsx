import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Registration = () => {

// const [Name, stateName]= useState('')
// const [Surname, stateSurname] = useState("");
// const [Name, stateName] = useState("");
// const [Name, stateName] = useState("");
// const [Name, stateName] = useState("");

    return (
        <div className="text-center mt-4">
        <h2>REGISTRATION FORM</h2>
        <p>please fill every field correctly as in the following instructions</p>

      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Surname</Form.Label>
          <Form.Control type="name" placeholder="Surname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      </div>
    );
}

export default Registration;






// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup
//   .object({
//     Name: yup.string().required(),
//     Surname: yup.string().required(),
//     email: yup.string().required(),
//     Password: yup.string().required(),
//     Confirm_Password: yup.string().required(),
//   })
//   .required();

// const Registration = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("Name")} />
//       <p>{errors.Name?.message}</p>

//       <input {...register("Surname")} />
//       <p>{errors.Surname?.message}</p>
//       <input {...register("email")} />
//       <p>{errors.email?.message}</p>

//       <input {...register("Password")} />
//       <p>{errors.password?.message}</p>

//       <input {...register("Confirm_Password")} />
//       <p>{errors.Confirm_Password?.message}</p>

//       <input type="submit" />
//     </form>
//   );
// };