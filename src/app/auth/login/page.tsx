"use client";

import CardBody from "../../../../components/card/card_body";
import CardFooter from "../../../../components/card/card_footer";
import CardHeader from "../../../../components/card/card_header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"; // Router

function Login() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="rounded-lg overflow-hidden w-full max-w-md shadow-2xl shadow-slate-400">
                <CardHeader className="bg-gray-100 p-4 rounded-t-lg flex justify-between items-center">
                    <Link className="hover:text-gray-500" href={'/'}>
                        <FontAwesomeIcon className="text-md" icon={fas.faArrowLeft} />
                    </Link>
                </CardHeader>
                <CardBody className="bg-gray-100 p-4">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold items-center justify-center flex text-shadow-sm">Login</h1>
                        <input className="w-full shadow-md rounded-lg p-2" type="email" placeholder="Username" />
                        <input className="w-full shadow-md rounded-lg p-2" type="password" placeholder="Password" />
                        <a href="#" className="px-2 underline">Forget Password?</a>
                        <button className="w-full shadow-md rounded-lg p-2 hover:bg-slate-500 hover:text-white">Login</button>
                        <div className="flex items-center justify-between">
                            <hr className="w-full border-gray-300" />
                            <span className="px-2 text-gray-500">or</span>
                            <hr className="w-full border-gray-300" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="w-full shadow-md rounded-lg p-2 bg-green-500 hover:bg-green-700"><span><FontAwesomeIcon icon={fab.faGoogle} className="mr-1"/></span>Login using Google</button>
                            <button className="w-full shadow-md rounded-lg p-2 bg-sky-500 hover:bg-sky-700"><span><FontAwesomeIcon icon={fab.faFacebook} className="mr-1"/></span>Login using Facebook</button>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="bg-gray-100 p-4 rounded-b-lg mb-1">
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-gray-600 text-center">Don't have an account?</p> <Link href={'/auth/register'} className="underline" >Sign Up</Link>
                    </div>
                </CardFooter>
            </div>
        </div>
    );
}

export default Login;