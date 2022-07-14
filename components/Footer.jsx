import React from 'react';
import Link from 'next/link';
import { ImHome } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

function Footer() {
    const router = useRouter();

    const FooterLink = ({ children, to }) => {
        return (
            <Link href={to} passHref>
                <li className={`p-2 mx-3 text-xl shadow-lg bg-opacity-10 hover:bg-teal-500 hover:bg-opacity-10 hover:text-red-500 ${router.pathname == to ? 'text-teal-400 bg-red-500' : ''} backdrop-blur-md rounded-full duration-500 cursor-pointer`}>
                    {children}
                </li>
            </Link>
        )
    }
    return (
        <footer className="bg-transparent sticky top-0 bottom-4 mt-12 flex justify-center z-40">
            <div className="flex sm:hidden items-center justify-center">
                <ul className="flex items-center justify-center sm:flex p-3 rounded-3xl text-lg bg-opacity-40 backdrop-blur-lg bg-black max-w-fit">
                    <FooterLink to={"/"}><ImHome /></FooterLink>
                    <FooterLink to={"/about"}><BsFillInfoCircleFill /></FooterLink>
                    <FooterLink to={"/portfolio"}><AiFillProject /></FooterLink>
                    <FooterLink to={"/contact"}><FaUserCircle /></FooterLink>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;