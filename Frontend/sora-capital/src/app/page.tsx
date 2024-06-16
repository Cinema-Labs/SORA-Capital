"use client"

import useAuth from "@/hooks/useAuth";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { signInWithEmail, signUpWithEmail, user } = useAuth();

  const [form, setForm] = useState({email: '', password: ''});
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let error;

    if(isLogin)
      error = signInWithEmail(form.email, form.password);
    else
      error = signUpWithEmail(form.email, form.password);

    if(error) setError(error);
  }

  console.log(user)

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-[#0A0B0D] w-[55vw] flex rounded-xl">
        <div className="w-1/2 h-full">
          <img src="login.png" className="w-full h-full rounded-tl-xl rounded-bl-xl"/>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center w-1/2 relative">
          <div className="absolute top-2 flex justify-between w-full px-[10%] items-center ">
            <div className="w-fit">
              <ArrowLeft className="cursor-pointer" size={20}/>
            </div>
            <div className="w-full pr-[20px] text-center">
              <h1 className=" ">{isLogin ? "Login" : "Register"}</h1>
            </div>
          </div>

          <p className="text-red text-lg">{error}</p>
          <form action="" onSubmit={handleSubmit} className="w-[80%]">
            <div className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Email" className="bg-[#1B1C1E] text-[#D9EBFF] p-2 rounded-md" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
              <input type="password" placeholder="Password" className="bg-[#1B1C1E] text-[#D9EBFF] p-2 rounded-md" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
              <button className="bg-[#00234D] text-[#D9EBFF] p-2 rounded-md">{isLogin ? "Sign in" : "Sign up"}</button>
            </div>
          </form>

          <div className="text-xs flex justify-between w-[80%]" >
            <div className="cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
              <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
            </div>
            <a href="">{isLogin ? "Forgot password?" : ""}</a>
          </div>
        </div>
      </div>
    </div>
  );
}