
import { SidebarItems } from "./sidebarItems";
import { Option } from "../Icons/option";
import { DimagIcon } from "../Icons/dimag";
import { Button } from "../component/button";
import { ShareIcon } from "../Icons/shareIcon";
import { PlusIcon } from "../Icons/plusIcon";



export function Sidebar(){


    return <div>
        <div className="flex relative">
            <div className="md:hidden fixed top-7 left-7 border bg-[#e1e7ff]  border-[#4f39f6] rounded p-3 z-50 transition-all sidebar-toggle" >
                <Option/>
            </div>
            <div className="fixed top-0 left-0 h-screen w-72 bg-white border-r z-40 transition-transform duration-300 ease-in-out sidebar-container -translate-x-full md:translate-x-0">
                <div className=" h-screen w-72 fixed top-0 left-0 bg-white border border-r-gray-200 border-t-0">
                    <SidebarItems />
                </div>
            </div>
            <div className="flex-1 bg-[#f8fbfc] min-h-screen p-8 md:pl-80 transition-all">
                <div className="flex justify-center items-center md:hidden">
                    <div className="flex items-center">
                        <div className="text-xl text-[#4f45e4] pr-1.5">
                            <DimagIcon/>
                        </div>
                        <div className="text-2xl font-medium"> 
                            Second Brain
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <h1 className=" text-3xl font-semibold md:mt-0 mt-18 ">
                        All Notes
                    </h1>
                            <div className=" hidden md:block  "> 
                                <div className="flex gap-3">
                                    <div className="flex gap-3 mb-3">
                                            <Button startIcon={<PlusIcon/>}  variant="secondary" size="md" text="Add Content" />
                                    </div>
                                    <div className="flex gap-3 mb-3">
                                            <Button startIcon={<ShareIcon/>} variant="secondary" size="md" text="Share Brain"/>
                                    </div>
                                </div>
                            </div>
                            <div className=" block md:hidden">
                                <div className="flex gap-3">
                                    <div className="flex gap-3 mb-12">
                                        <Button startIcon={<PlusIcon/>} variant="secondary" size="md" text="Add" />
                                    </div>
                                    <div className="flex gap-3 mb-12">
                                        <Button  startIcon={<ShareIcon/>} variant="secondary" size="md" text="Share" />
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex justify-center items-center md:hidden">
                        <div className="flex items-center">
                            <div className="text-4xl text-[#4f45e4] pr-1.5">
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                <div>
                        
                    </div>
                    <div className="">
                        <p>
                            No content found for the selected type.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
}