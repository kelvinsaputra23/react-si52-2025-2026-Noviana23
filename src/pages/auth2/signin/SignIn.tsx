import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import ApiClient from "../../../utils/ApiClient";

interface SignInFrom {
    email : string,
    password : string, 
}
function SignIn (){
     const [form, setForm] = useState<SignInFrom>({
            email : "",
            password :""
        })
        const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await ApiClient.post("/signin", form)

            console.log(response);
        }catch (error){
            console.log(error);
        }
    }

    return <div className='container mx-auto'>
        <h2> Sign In</h2>
       <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                     <Form.Label>Email</Form.Label>
                     <Form.Control 
                        value = {form.email}
                        onChange = {onHandleChange}
                        name="email" 
                        type="text" 
                        placeholder="Email"/>
               </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control 
                        value = {form.password}
                        onChange = {onHandleChange}
                        name="password" 
                        type="password" 
                        placeholder="Password"/>
               </Form.Group>
            </Form>
            <Button type="submit" variant="primary"> Sign In </Button>
    </div>
}

export default SignIn;