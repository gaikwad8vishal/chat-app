
import { TwitterIcon } from "../Icons/TwitterIcon"
import { YoutubeIcon } from "../Icons/youtube"
import { DocumentsIcon } from "../Icons/documents"
import { LinkIcon } from "../Icons/linkicon"
import { OtherIcon } from "../Icons/othericon"
import { NoteIcon } from "../Icons/noteicon"

export function SidebarItems(){
    return <div>
                        <div className="cursor-pointer p-2 rounded-lg">
                            <div className="ml-10 flex items-center gap-4 mt-10 cursor-pointer transition-all duration-300 text-black scale-105 font-medium">
                                    <NoteIcon/>
                                <div>All Notes</div>
                            </div>
                        </div>
                        <div className="cursor-pointer p-2 rounded-lg">
                            <div className="ml-10 flex items-center gap-4 mt-10 cursor-pointer transition-all duration-300 text-gray-400 hover:text-black hover:scale-105">
                                <TwitterIcon/>
                                <div>Tweets</div>
                            </div>
                        </div>
                        <div className="cursor-pointer p-2 rounded-lg">
                            <div className="ml-10 flex items-center gap-4 mt-10 cursor-pointer transition-all duration-300 text-gray-400 hover:text-black hover:scale-105">
                                <YoutubeIcon/>
                                <div>Youtube</div>
                            </div>
                        </div>
                        <div className="cursor-pointer p-2 rounded-lg">
                            <div className="ml-10 flex items-center gap-4 mt-10 cursor-pointer transition-all duration-300 text-gray-400 hover:text-black hover:scale-105">
                                <DocumentsIcon/>
                                <div>Documents</div>
                            </div>
                            
                        </div>
                        <div className="cursor-pointer p-2 rounded-lg">
                            <div className="ml-10 flex items-center gap-4 mt-10 cursor-pointer transition-all duration-300 text-gray-400 hover:text-black hover:scale-105">
                                    <LinkIcon/>
                                    <div>Links</div>
                                </div>
                            </div>
                        <div>
                            <div className="ml-10 flex items-center gap-4 mt-10 cursor-pointer transition-all duration-300 text-gray-400 hover:text-black hover:scale-105">
                                    <OtherIcon/>
                                    <div>Other</div>
                            </div>
                        </div>

    </div>
}