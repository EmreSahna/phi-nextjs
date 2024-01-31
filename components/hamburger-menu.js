"use client"
import { useEffect, useState } from "react";
import HamburgerIcon from "./icons/hamburger-icon";
export default function HamburgerMenu({categories}){
    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened(!isOpened)
    }
    useEffect(() => {
        if(isOpened){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
    }, [isOpened])
    return  (
        <>
        <a onClick={toggleMenu}>
            <HamburgerIcon height={26} width={26} color={"white"} className="visible sm:invisible mr-4 cursor-pointer"/>
        </a>
        {
            isOpened && (
                <div onClick={toggleMenu} className={`flex flex-col absolute top-14 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.92)] z-50 ${isOpened ? 'overflow-hidden' : ''}`}>
                    <div  className="flex flex-col items-center min-w-full">
                        {
                            categories.map((category,index) => {
                                category = category.attributes
                                    return (
                                        <a key={index} href={"/kategori/"+category.Slug} onClick={(e)=>e.stopPropagation()} className="text-white hover:text-ychar mx-3 my-3 sm:mx-6 text-xl w-2/3 text-center">{category.Name}</a>
                                    )
                            })
                        }
                    </div>
                </div>
            )
        }
        </>

    )
}