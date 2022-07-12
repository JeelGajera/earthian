import React from "react";
import { motion } from "framer-motion";

export const RighToLeft = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};

export const LeftToRight = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};

export const UpToDown = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            initial={{ y: "-50vh", opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};

export const DownToUp = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            initial={{ y: "50vh", opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};

export const IconFadeOutHover = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            whileHover={{ scale: 1.2, origin: 0 }}
            transition={{ type: 'spring', stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};

export const ImgFadeOut = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};

export const FadeOut = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};

export const TextDown = ({ children }, ...props) => {
    return (
        <motion.div
            {...props}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};