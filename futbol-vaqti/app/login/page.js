"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import TextInput from "@/components/Fields/Input/TextInput";
import TextButton from "@/components/Buttons/TextButton/TextButton";
import HyperLink from "@/components/Buttons/HyperLink/HyperLink";
import { getSession, signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  const loginFormHandler = (name, value) => {
    loginForm[name].value = value;

    setLoginForm(loginForm);
  };

  const [loginForm, setLoginForm] = useState({
    email: {
      name: "email",
      value: "",
      required: true,
      label: "Email",
      maxLength: 20,
      onChange: loginFormHandler,
    },
    password: {
      name: "password",
      value: "",
      label: "Password",
      required: true,
      onChange: loginFormHandler,
    },
  });


  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const reponse = await signIn("credentials", {
      redirect: false,
      email: loginForm.email.value,
      password: loginForm.password.value,
    });

    console.log(reponse);
    
    if(reponse.ok === true){
      const session = await getSession();
      if (session?.user) {
        router.push(`/dashboard/${session?.user?.role}`);
      }
    }

   
  };

  const toggleShowPassword = () => {
    setShowPassword((showPass) => !showPass);
  };

  return (
    <div id={styles.login_page}>
      <div className={styles.login_image_container}>
        <h1>FUTBALL TIME</h1>
        <span className={styles.login_page_center}>
          <span>
            <h1>
              Football at your <br /> fingertips.
            </h1>
            <h2>
              Sign up to access tickets, play games and <br /> stay up to date
              on FIFA World Cup 26™ <br /> qualification!
            </h2>
          </span>
        </span>
      </div>
      <div className={styles.login_form_container}>
        <h1>Sign In</h1>

        <form method="post" onSubmit={handleLogin}>
          <TextInput {...loginForm.email} />
          <TextInput {...loginForm.password} />
          <TextButton
            disabled={isLoading}
            type="submit"
            className="btn-primary btn-margin-top"
          >
            {isLoading ? <BeatLoader color="white" size={10} /> : "SIGN IN"}
          </TextButton>
          <HyperLink href="/register">Forgotten your password?</HyperLink>
          <div style={{ marginTop: "2rem" }}>
            <p style={{ fontSize: "1.4rem" }}>Don't have an account?</p>
            <TextButton type="submit" className="btn-outline btn-margin-top">
              SIGN UP
            </TextButton>
          </div>
        </form>
      </div>
    </div>
  );
}
