import { Button } from "../component/button"
import { Input } from "../component/input"
import { RightArrow } from "../Icons/rightArrrow"
import { TwitterIcon } from "../Icons/TwitterIcon"


export function SignIn(){
    return <div className="bg-black">
        <div className=" border min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
            <div className=" sm:mx-auto sm:w-full sm:max-w-md ">
                <div className="flex justify-center gap-4">
                    <a className="flex items-center justify-center gap-2 mb-8" href="/">
                    <TwitterIcon />
                    </a>
                    <span className=" text-2xl font-semibolt">Second Brain</span>
                </div>
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">Or
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/SignUp"> Create a new account</a>
                </p>
            </div>
            <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md border rounded ">
                <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                    <div className=" mt-1 relative ">
                        <label  className=" pb-1 block text-sm font-medium text-gray-700">
                            username
                        </label>
                    <Input placeholder="Enter your username"/>
                    </div>
                    <div className="mt-1 relative">
                        <label  className=" pb-1 block text-sm font-medium text-gray-700">
                            password
                        </label>
                        <div className="">  
                            <Input placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="w-full flex gap-2 py-2 px-4 border border-transparent rounded-lg   text-white">
                        <Button variant="secondary" size="md" text="SignIn" fullWidth={true} endIcon={<RightArrow />} />
                    </div>
                </div>
            </div>

        </div>

        </div>
}