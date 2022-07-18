import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextDown } from '.././utils/FrameMotion';

function ProjectDomainCard({ project, link }) {

    const { title, thumbnail } = project;
    return (
        <Link passHref href={link}>
            <div className="shadow-2xl group relative rounded-lg overflow-hidden cursor-pointer bg-white bg-opacity-10 backdrop-blur-md">
                <div className="p-1 flex justify-center w-full">
                    <Image
                        className="transform transition-all group-hover:scale-105"
                        alt="project_thumbnail"
                        layout="intrinsic"
                        src={thumbnail}
                        width={1000}
                        height={400}
                    />
                </div>
                <div>
                    <TextDown>
                        <h2 className="pl-4 font-bold text-2xl text-red-400 mb-4 capitalize decoration-[#f8b34b] group-hover:underline underline-offset-8">
                            {title}
                        </h2>
                    </TextDown>
                </div>
            </div>
        </Link>
    );
};

export default ProjectDomainCard;