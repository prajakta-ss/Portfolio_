import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = React.useState(false);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" }
    ];

    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 scroll-smooth bg-white z-50">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 h-16">
                        <h1 className="text-2xl font-semibold cursor-pointer">
                            Prajakta
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>

                    {/* Desktop Navbar */}
                    <div>
                        <ul className="hidden md:flex space-x-4">
                            {navItems.map(({ id, text }) => (
                                <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                                    <Link to={text} smooth={true} duration={500} activeClass="active" offset={-70}>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <div 
                            onClick={() => setMenu(!menu)} 
                            className="md:hidden cursor-pointer" 
                            aria-label="Toggle navigation"
                        >
                            {menu ? <MdClose size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {menu && (
                    <div className="bg-white absolute top-16 left-0 w-full">
                        <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 font-bold">
                            {navItems.map(({ id, text }) => (
                                <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                                    <Link 
                                        to={text} 
                                        smooth={true} 
                                        duration={500} 
                                        offset={-70} 
                                        onClick={() => setMenu(false)}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
