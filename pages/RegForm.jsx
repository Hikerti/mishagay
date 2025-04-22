import React from 'react';
import {useForm} from "react-hook-form";

const RegForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = (data) => {
        // fetch("bluh", {
        //     headers: {
        //         "Accept": 'application/json',
        //         "Content-Type": 'application/json'
        //     },
        //     method: "POST",
        //     body: JSON.stringify(data)
        // })
        console.log(data)
    };

    return (
        <form className="bg-gray-800 text-white rounded-2xl p-[100px] mx-[20%] mt-[50px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between mt-[20px] flex items-center">
                <label htmlFor="login" className="font-bold text-xl">Login: </label>
                <input {...register("login", { required: "Логин обязателен" })} id="login" type="text" className="bg-white text-black rounded-2xl px-[30px] py-[10px] outline-0 font-bold" placeholder="Логин" />
            </div>
            {errors.login && <p className="text-red-600">{errors.login.message}</p>}
            <div className="flex justify-between mt-[20px] flex items-center">
                <label htmlFor="email" className="font-bold text-xl">Email: </label>
                <input {...register("email", { required: "Мыло обязательно" })} id="email" type="text" className="bg-white text-black rounded-2xl px-[30px] py-[10px] outline-0 font-bold" placeholder="E-mail" />
            </div>
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            <div className="flex justify-between mt-[20px] flex items-center">
                <label htmlFor="pass" className="font-bold text-xl">Password: </label>
                <input {...register("password", { required: "Пароль обязателен" })} id="pass" type="text" className="bg-white text-black rounded-2xl px-[30px] py-[10px] outline-0 font-bold" placeholder="Пароль" />
            </div>
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            <div className="flex justify-between mt-[20px] flex items-center">
                <label htmlFor="pass" className="font-bold text-xl">Reapeat Password: </label>
                <input {...register("reapeatPassword", { required: "Повтор пароля    обязателен" })} id="pass" type="text" className="bg-white text-black rounded-2xl px-[30px] py-[10px] outline-0 font-bold" placeholder="Повтор пароля" />
            </div>
            {errors.reapeatPassword && <p className="text-red-600">{errors.reapeatPassword.message}</p>}
            <button type="submit" className="w-full h-[70px] hover:bg-gray-600 cursor-pointer hover:text-white duration-300 bg-white rounded-2xl text-black font-bold text-xl mt-[100px]">Регистрация</button>
        </form>
    );
};

export default RegForm;