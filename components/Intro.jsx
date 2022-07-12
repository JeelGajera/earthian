import React from 'react';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";


function Intro() {
    const [textIndex, settextIndex] = useState(0);
    const [textDel, setTextDel] = useState(false);
    const textToRotate = ["Developer!", "Freelancer!", "Student!"];
    const [text, setText] = useState('');
    const [period, setPeriod] = useState(300 - Math.random() * 100);
    const delay = 2000;

    const tick = () => {
        let i = textIndex % textToRotate.length;
        let fullText = textToRotate[i];
        let updatedText = textDel ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (textDel) {
            setPeriod(prevPeriod => prevPeriod / 2);
        }
        if (!textDel && updatedText === fullText) {
            setTextDel(true);
            setPeriod(delay);
        } else if (textDel && updatedText === '') {
            setTextDel(false);
            settextIndex(textIndex + 1);
            setPeriod(500);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, period)
        return () => { clearInterval(ticker) };
    }, [text, period]);

    return (
        <>
            <div className=" flex items-center justify-center ">
                <div className="m-2 p-7 flex-col sm:flex-row md:flex lg:flex justify-center gap-4 min-w-fit max-h-max min-h-auto rounded-lg bg-white bg-opacity-10 backdrop-blur-md lg:p-8">
                    <motion.div
                    initial={{scale: 0.5}}
                    animate={{scale: 1}}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 400}}
                    >
                        <Image className="rounded-full lg:p-0" width="160" height="160" src="https://res.cloudinary.com/www-lakshyafestldce-com/image/upload/v1657554374/MyPorfolio_JG/myself_uf7i4o.webp" alt="Profile_Image" />
                    </motion.div>
                    <div className="h-[140px]">
                        <div className="flex text-lg mx-1">Hey there <span className="text-xl animate-waving-hand">👋</span></div>
                        <motion.div
                            initial="hidden" animate="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    x: '100vw'
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.6,
                                        type: 'spring'
                                    }
                                }
                            }}
                            className="xsm:text-5xl mx-1 mb-2 text-clip bg-transparent text-7xl text-teal-400">
                            Jeel Gajera
                        </motion.div>
                        <div className="absolute text-lg">
                            I'm a passionate&nbsp;
                            <span className="font-mono text-xl underline underline-offset-4 text-teal-200">
                                {text}
                            </span>
                            <br />from India.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;
