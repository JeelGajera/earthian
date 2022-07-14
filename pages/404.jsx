import React from 'react';
import Layout from '../layout/Layout';
import Image from 'next/image';
import imgPath from '../public/em404.svg';
import { VscDebugStepBack } from 'react-icons/vsc';
import { LinkButton } from '../components/utils/Button';
import { FadeOut } from '../components/utils/FrameMotion';

function NotFound() {
    return (
        <>
            <Layout title="Ooops... | Go back to earth 🤖">
                <div className="justify-center">
                    <center className="mt-24 m-auto">
                        <div className="animate-bounce">
                            <Image src={imgPath} alt="404" width={200} height={200} />
                        </div>
                        <div className=" tracking-widest">
                            <FadeOut><span className="text-gray-500 mb-2 text-6xl block"><span>4  0  4</span></span></FadeOut>
                            <hr className="w-24 h-[2px] rounded-lg m-2 border-none bg-teal-500" />
                            <span className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>
                        </div>
                        <div className="mt-3 max-w-fit text-[#f8b34b] hover:text-red-500">
                            <LinkButton type="dynamic" 
                                onClick={() => window.history.back()}>
                                Go back
                                <span className="mx-1 px-1 text-red-500 animate-pulse"><VscDebugStepBack /></span>
                            </LinkButton>
                        </div>
                    </center>
                </div>
            </Layout>
        </>
    )
}

export default NotFound;