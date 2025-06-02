"use client";
import React from "react";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import { useForm, SubmitHandler, Field, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterClient = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch, // Uncomment if you need to watch form values
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
   
    // Kayıt işlemleri burada
    axios.post("/api/register", data)
      .then((response) => {
        toast.success("Kayıt başarılı:", response.data);
        // Başarılı kayıt sonrası yönlendirme veya mesaj gösterme işlemleri
      })

      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          router.push("/cart"); // Başarılı giriş sonrası anasayfaya yönlendir
          router.refresh(); // Sayfayı yenile
          toast.success("Login işlemi başarılı");
        
        }
        if (callback?.error) {
          toast.error(callback.error );
        }
      });

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

        <div className="text-red-500 text-center text-sm my-2">
          Daha önce kayıt olduysan
          <Link className="underline" href="/login">
            buraya tıkla
          </Link>
        </div>
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

export default RegisterClient;
