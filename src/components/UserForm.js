import React, {useState, useEffect} from 'react'

const UserForm = () => {
    const [formState, setFormState] = useState(JSON.parse(localStorage.getItem("user")) || []);//convert a string into object
    const {email, password} = formState;//destructure formState
    
    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormState((prev => ({...prev, [name]: value})));
    }

    // useEffect(() => {
    //     const formS = localStorage.getItem("user");//convert a string into object
    //     if(formS){
    //         setFormState(JSON.parse(formS));
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(formState));//convert an object into string
    }, [email, password]);

    return (
        <div>
            <input type="email" name="email" placeholder="email" onChange={handleChange} value={email}/>
            <input type="password" name="password" placeholder="password" onChange={handleChange} value={password}/>
            <button type="submit">submit</button>
        </div>
    )
}

export default UserForm