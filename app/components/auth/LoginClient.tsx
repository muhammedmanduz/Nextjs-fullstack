"use client";
import React from "react";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterClient = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback: any) => {
      if (callback?.ok) {
        router.push("/cart"); // Başarılı giriş sonrası anasayfaya yönlendir
        router.refresh(); // Sayfayı yenile
        toast.success("Giriş başarılı");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <AuthContainer>
      <div className="w-full flex flex-col md:w-[500px] p-3 shadow-lg rounded-md">
        <div className="flex flex-col items-center justify-center mb-4 gap-2">
          <Heading text="Login" center />

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
        <Button text="Giriş Yap" onClick={handleSubmit(onSubmit)} />

        <div className="text-red-500 text-center gap-2 text-sm my-2">
          Daha önce kayıt olmadıysan{" "}
          <Link className="underline" href="/register">
            buraya tıkla
          </Link>
        </div>
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <Button
          text="Google ile Giriş Yap"
          icon={FcGoogle}
          outline
          onClick={() => {}}
        />
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
