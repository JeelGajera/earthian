import React from 'react'
import Link from 'next/link';
import SiteData from '../SiteData/NavbarData.json';
import { useRouter } from 'next/router';
import { TextDown, RighToLeft } from './utils/FrameMotion';

function Navbar(props) {
    const router = useRouter();

    function NavLink({ name, to }) {
        return (
            <Link href={to} passHref>
                <li className={`mx-3 p-2 md:my-0 text-xl hover:bg-teal-400 hover:bg-opacity-10 hover:text-red-500 ${router.pathname == to ? 'text-teal-500 underline underline-offset-4' : ''} bg-opacity-10 backdrop-blur-md rounded-3xl duration-500 cursor-pointer`}>
                    {name}
                </li>
            </Link>
        );
    }

    return (
        <>
            <nav className="flex sticky backdrop-blur-md top-0 z-40 items-center justify-between p-2">
                {/* page title */}
                <div className="mx-1">
                    <TextDown>
                        <h1 className="text-teal-400 text-2xl sm:text-4xl text-bold">
                            {props.section}
                        </h1>
                    </TextDown>
                    <RighToLeft>
                        <hr className={` ${props.section ? "" : "hidden"} w-24 h-[2px] rounded-lg mt-1 border-none bg-red-500`} />
                    </RighToLeft>
                </div>
                {/* main navbar */}
                <ul className="hidden sm:flex">
                    {SiteData.navbarData.map((item, index) => (
                        <NavLink key={index} name={item.name} to={item.to} />
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;