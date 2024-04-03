import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <header className="bg-blue-500 p-4">
                <nav className="flex justify-left space-x-4">
                        <img
                            src={"logo.png"}
                            alt="Charity Clarity Logo"
                            className="h-12"
                        />
                        className={`text-white px-4 py-2 rounded-lg font-bold text-xl `}
                    
                        Charity Clarity
                    <div>
                        className={`${
                            props.active === "donate"
                                ? "bg-white text-blue-500"
                                : "text-white"
                        } px-4 py-2 rounded-full font-bold text-xl hover:bg-white hover:text-blue-500`}
                    
                        Donate
                    </div>
                    
                </nav>
            </header>
        </>
    );
}
