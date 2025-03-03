interface InputProps { 
    placeholder: string; 
    reference?: any;
    startIcon?: any;
}

export function Input({placeholder, startIcon, reference}: InputProps) {
    return (
        <div>

            <input 
                ref={reference} 
                placeholder={placeholder} 
                type={"text"} 
                className="appearance-none block w-full pl-2 px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " 
            />
        </div>
    );
}