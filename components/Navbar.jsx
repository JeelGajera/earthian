import React from 'react'
import Link from 'next/link';
import SiteData from '../SiteData/NavbarData.json';
import { ImHome } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter();

    function NavLink({ name, to }) {
        return (
            <Link href={to} passHref>
                <li className={`mx-3 p-2 md:my-0 hover:bg-teal-400 hover:bg-opacity-10 ${router.pathname == to ? 'bg-red-500 text-teal-400 underline underline-offset-4' : ''} bg-opacity-10 backdrop-blur-md rounded-3xl duration-500 cursor-pointer`}>
                    {name}
                </li>
            </Link>
        );
    }

    const TinyNavLink = ({ children, to }) => {
        return (
            <Link href={to} passHref>
                <li className={`p-2 mx-3 text-xl shadow-lg bg-opacity-10 hover:bg-teal-500 hover:bg-opacity-10 ${router.pathname == to ? 'text-teal-400 bg-red-500' : ''} backdrop-blur-md rounded-full duration-500 cursor-pointer`}>
                    {children}
                </li>
            </Link>
        )
    }

    return (
        <>
            <nav className="flex items-center justify-center p-2">
                {/* main navbar */}
                <ul className="hidden sm:flex">
                    {SiteData.navbarData.map((item, index) => (
                        <NavLink key={index} name={item.name} to={item.to} />
                    ))}
                </ul>
                {/* tiny navbar */}
                <div className="fixed flex sm:hidden items-center justify-center z-10 bottom-3">
                    <ul className="flex items-center justify-center sm:flex p-3 rounded-3xl text-lg bg-opacity-40 backdrop-blur-lg bg-black max-w-fit">
                        <TinyNavLink to={"/"}><ImHome /></TinyNavLink>
                        <TinyNavLink to={"/about"}><BsFillInfoCircleFill /></TinyNavLink>
                        <TinyNavLink to={"/portfolio"}><AiFillProject /></TinyNavLink>
                        <TinyNavLink to={"/contact"}><FaUserCircle /></TinyNavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;