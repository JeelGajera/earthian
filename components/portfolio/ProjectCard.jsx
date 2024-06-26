import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextDown } from '.././utils/FrameMotion';

function ProjectCard({ project, link }) {

    const { title, thumbnail, slug } = project;
    return (
        <Link passHref href={link}>
            <div className="shadow-2xl group relative rounded-lg overflow-hidden cursor-pointer bg-white bg-opacity-10 backdrop-blur-md">
                <div className="flex justify-center">
                    <Image
                        className="transform transition-all group-hover:scale-105"
                        alt="project_thumbnail"
                        layout="intrinsic"
                        src={thumbnail}
                        width={1000}
                        height={600}
                    />
                </div>
                <div className="absolute top-0 left-0 p-5 bg-gradient-to-br from-black to-transparent w-full h-full">
                    <TextDown>
                        <h2 className="font-bold text-2xl text-red-500 mb-4 capitalize">
                            {title}
                        </h2>
                    </TextDown>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;