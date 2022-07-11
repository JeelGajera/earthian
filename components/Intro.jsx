import React from 'react';
import Image from 'next/image'
import { useEffect, useState } from 'react';


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
    }, [text]);

    return (
        <>
            <div className=" flex items-center justify-center ">
                <div className="m-2 flex justify-between w-2/4 rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-md lg:p-8">
                    <div>
                        <div className="text-lg">Hey there 👋</div>
                        <div className="xsm:text-5xl mb-2 text-clip bg-transparent text-7xl text-teal-400">Jeel Gajera</div>
                        <div className="text-lg">
                            I'm a passionate&nbsp;
                            <span className="font-mono text-xl underline underline-offset-4 text-teal-200">
                                {text}
                            </span>
                            <br />from India.
                        </div>
                    </div>
                    <Image className="rounded-full shadow-7xl lg:p-0" width="160" height="160" src="https://res.cloudinary.com/www-lakshyafestldce-com/image/upload/v1650570768/Team/Jeel_Gajera_mwzqpg.webp" alt="Profile_Image" />
                </div>
            </div>
        </>
    )
}

export default Intro;
