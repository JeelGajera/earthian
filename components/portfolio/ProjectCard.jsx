import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextDown } from '.././utils/FrameMotion';

function ProjectCard({ project }) {

    const { title, thumbnail, slug } = project;
    return (
        <Link passHref href={`/portfolio/${encodeURIComponent(slug)}`}>
            <div className="shadow-2xl group relative rounded-lg overflow-hidden cursor-pointer bg-white bg-opacity-10 backdrop-blur-md">
                <div className="flex">
                    <Image
                        className="p-1 transform transition-all group-hover:scale-105"
                        alt="project thumbnail"
                        layout="intrinsic"
                        src={thumbnail}
                        width={300}
                        height={200}
                    />
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                    <TextDown>
                        <h2 className="font-bold text-2xl text-red-500 mb-4 capitalize decoration-teal-400 group-hover:underline underline-offset-8">
                            {title}
                        </h2>
                    </TextDown>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;