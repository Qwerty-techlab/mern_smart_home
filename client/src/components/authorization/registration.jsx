import React, {useState} from 'react';
import './auth.css'
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return (
        <div className='authorization'>
            <div className="authorization__header">Регистрация</div>
            <Input value={name} setValue={setName} type="text" placeholder="Ваше имя..."/>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" onClick={() => registration(name, email, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;