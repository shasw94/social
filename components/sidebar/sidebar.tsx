"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext, useState } from "react";


const SidebarContext = createContext({expanded: false})
export function SideBar({ children, }: { children: React.ReactNode }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <aside className="h-screen">
            <nav className="h-full w-16 flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    {/* icon goes here */}

                </div>
                <SidebarContext.Provider value = {{expanded}}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, active, alert }: { icon: any, text: String, active: any, alert: any }) {
    const {expanded} = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center justify-center py-2 px-3 my-4 font-medium rounded-md cursor-pointer
            transition-colors ${ active ? "bg-[#00D2E0]" : "hover:bg-indigo-50 hover:text-gray-600"}
        `}>
            {<FontAwesomeIcon icon={icon} color={active ? 'white': 'gray'}/>}
            <span className={`overflow-hidden transition-all
            ${ expanded ? "w-52 ml-3": 'w-0'}`}>{text}</span>
            {
                // alert && (
                //     <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "": "top: 1"}`}/>
                // )
            }
        </li>
    )
}