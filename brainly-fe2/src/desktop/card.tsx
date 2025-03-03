import { ShareIcon } from "../Icons/shareIcon";
import { TrashIcon } from "../Icons/trashicon";


export function Card(){


    return <div>
        <div className="flex justify-center ">
            <div className="bg-slate-400 rounded-lg w-72 h-72 grid">
                <div className="">   
                    <div className="flex cursor-pointer">  
                        <div className="pt-1">
                            <ShareIcon />
                        </div>
                        <div>
                            Vishal Gaikwad
                        </div>
                        <div className="pt-1">
                            <ShareIcon />
                        </div>
                        <div className="pt-1 cursor-pointer">
                            <TrashIcon />
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
}