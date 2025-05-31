"use client";
import React from "react";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import { useForm, SubmitHandler, Field, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const LoginClient = () => {
  const RegisterClient = () => {
    const {
      register,
      handleSubmit,
      // watch, // Uncomment if you need to watch form values
      formState: { errors },
    } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      console.log(data);
      // Kayıt işlemleri burada
    };
  };

  return (
    <AuthContainer>
      <div className="w-full flex flex-col  md:w-[500px] p-3 shadow-lg rounded-md">
        <div className="flex flex-col items-center justify-center mb-4 gap-2">
          <Heading text="Register" center />
          <Input
            placeholder="Ad"
            type="text"
            id="name"
            register={register}
            errors={errors}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            id="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            placeholder="Parola"
            type="password"
            id="password"
            register={register}
            errors={errors}
            required
          />
        </div>
        <Button text="Kayıt Ol" onClick={handleSubmit(onSubmit)} />

        <div className="text-center my-2 font-bold text-lg">OR</div>
        <Button
          text="Google ile Kayıt Ol"
          icon={FcGoogle}
          outline
          onClick={() => {}}
        />
      </div>
    </AuthContainer>
  );
};

export default LoginClient;
