"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import Validator from "email-validator";
import toast from "react-hot-toast";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_STORE } from "@/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState<null | string>(null);
  const [isValidPassword, setIsValidPassword] = useState<null | string>(null);
  const [isValidUsername, setIsValidUsername] = useState<null | string>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitButtonDisabled = isLogin
    ? !email || !password
    : !email || !fullName || !username || !password;

  const auth = FIREBASE_AUTH;
  const database = FIREBASE_STORE;
  const loginUser = useAuthStore((state) => state.login);
  const router = useRouter();

  const isLoadingSpinner = isLoading ? "pt-3" : "";

  const signUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    fullName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required().min(8),
  });

  const validateEmailAndPassword = () => {
    if (!Validator.validate(email)) {
      setIsValidEmail("Please enter a valid email address");
      return;
    } else {
      setIsValidEmail(null);
    }

    if (password.length < 8) {
      setIsValidPassword("Password must be at least 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setIsValidPassword("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
      setIsValidPassword(
        "Password must contain at least one special character"
      );
      return;
    }

    setIsValidEmail(null);
    setIsValidPassword(null);
    validateUsername();
  };

  const validateUsername = () => {
    if (/[A-Z]/.test(username)) {
      setIsValidUsername("Username cannot contain uppercase letters");
      return false;
    }
    if (/\s/.test(username)) {
      setIsValidUsername("Username cannot contain spaces");
      return false;
    }
    setIsValidUsername(null);
    isLogin ? login() : signUp();
  };

  const signUp = async () => {
    setIsLoading(true);
    try {
      const newAuthUser = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );

      await setDoc(doc(database, "users", newAuthUser.user.uid), {
        userId: newAuthUser.user.uid,
        email,
        createdAt: new Date(),
        fullName,
        username,
      });

      const userData = {
        userId: newAuthUser.user.uid,
        email,
        createdAt: new Date(),
        isVerified: false,
        fullName,
        username,
      };

      router.push("/profile");
      toast.success("Account created successfully. Please verify your email.");

      loginUser(userData);

      setEmail("");
      setFullName("");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error("Error signing up. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async () => {
    setIsLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      if (userCred) {
        const docRef = doc(database, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();

        loginUser(userData);
      }

      toast.success("Logged in successfully");
      router.push("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Error logging in. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center pt-32 sm:pt-10">
      <div className="flex flex-col w-full justify-center items-center max-w-xs">
        <h1 className="text-[3rem] sm:text-[5rem] font-thin">
          <span className="hero-gradient-text">BRIGHT</span>
        </h1>

        <h2 className="mb-2 text-black dark:text-white text-center">
          Log in or sign up to see and write posts or ask any questions.
        </h2>

        <input
          autoFocus={true}
          type="text"
          className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-4 rounded-lg placeholder:text-[#a5a5a6]"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-red-500 text-xs">{isValidEmail}</p>
        {!isLogin && (
          <>
            <input
              type="text"
              className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-4 rounded-lg placeholder:text-[#a5a5a6]"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-4 rounded-lg placeholder:text-[#a5a5a6]"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="text-red-500 text-xs">{isValidUsername}</p>
          </>
        )}
        <div className="relative flex w-full">
          <input
            className="bg-[#EFEFEF] dark:bg-[#161616] w-full mt-1 px-3 py-4 rounded-lg placeholder:text-[#a5a5a6]"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={isSecureTextEntry ? "password" : "text"}
          />
          <div
            onClick={() => setSecureTextEntry(!isSecureTextEntry)}
            className="absolute right-4 top-5"
          >
            {isSecureTextEntry ? (
              <VisibilityOffOutlined className="text-[#a5a5a6]" />
            ) : (
              <RemoveRedEyeOutlined className="text-[#a5a5a6]" />
            )}
          </div>
        </div>
        <p className="text-red-500 text-xs">{isValidPassword}</p>
        <p className="text-xs text-center mt-3">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </p>
        <button
          onClick={validateEmailAndPassword}
          aria-describedby={`tier-join-now`}
          className={`bg-[#0295f6] w-full text-white transition hover:bg-blue-500 mt-6 rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-60 disabled:cursor-not-allowed max-h-[2.5rem]  flex justify-center items-center ${isLoadingSpinner}`}
          rel="noopener noreferrer "
          disabled={submitButtonDisabled}
        >
          {isLoading ? (
            <div className="">
              <CircularProgress size={40} className="text-white p-2" />
            </div>
          ) : !isLogin ? (
            "Sign up"
          ) : (
            "Log in"
          )}
        </button>
        <p className="text-sm mt-10 text-center">
          Have an account?{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#0295f6] hover:cursor-pointer hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
