import  { ReactElement } from "react";

 interface ButtonProps{
    variant: "primary"  | "secondary" ;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
    endIcon?: ReactElement;
}


const variantClasses  = {
    "primary": "bg-purple-100 text-purple-800",
    "secondary": "bg-purple-800 text-purple-100"
}
const defaultStyles = " px-4 py-2 font-light flex items-center justify-start rounded-md shadow-sm  text-sm hover:bg-indigo-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 "

const  sizeStyles = {
    "sm": "py-1 px-2 text-sm rounded-sm",
    "md": "py-2 px-4 text-md rounded-md",
    "lg": "py-4 px-6 text-lg rounded-xl"
}
export function Button({variant, text, startIcon, endIcon, onClick, fullWidth, loading}: ButtonProps) {

    return <button  className={variantClasses[variant] + " "+ sizeStyles + defaultStyles + onClick + `${fullWidth ? " px-4 w-full flex justify-center items-center " : ""} ${loading ? "opacity-45" : "" } ` } disabled={loading} >
            <div className="pr-2" >
                {startIcon}
            </div>
            <div>
                {text}
            </div>
            <div>
                {endIcon}
            </div>
    </button>
}


