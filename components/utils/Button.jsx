import React from 'react';

const config = {
    primary: 'bg-teal-400 bg-opacity-10 text-red-500 ',
    secondary: 'bg-red-500 bg-opacity-10 text-teal-400',
    transparent: 'bg-white bg-opacity-10 text-white backdrop-blur-lg',
    dynamic: 'bg-red-500 bg-opacity-10 hover:bg-teal-400 hover:bg-opacity-10 backdrop-blur-md',
    xs: 'py-3 px-6',
    md: 'py-2 px-8 text-lg',
    lg: 'py-2 px-12 text-lg',
    xl: 'py-3 px-12 text-xl',
    full: 'w-full py-3 text-xl',
    nomral: 'p-0 ',
};

// normal button
function Button({ type , size , children = 'Button' }, props) {
    return (
        <button
            {...props}
            className={`${config[type]} ${config[size]} tracking-wide shadow-normal font-medium rounded-full transform active:translate-y-[4px] active:shadow-active flex justify-center items-center`}
        >
            <span className="text-center">{children}</span>
        </button>
    );
}

// button for nextjs link routing
export const LinkButton = React.forwardRef(
    ({ onClick, href, type = 'primary', size = 'md', children = 'Button' }, ref) => {
        return (
            <a
                href={href}
                onClick={onClick}
                ref={ref}
                className={`${config[type]} ${config[size]} min-w-fit backdrop-blur-md text-center tracking-wide shadow-normal font-medium rounded-full transform active:translate-y-[4px] active:shadow-active flex justify-center items-center`}
            >
                {children}
            </a>
        );
    }
);

LinkButton.displayName = 'LinkButton';

export default Button;