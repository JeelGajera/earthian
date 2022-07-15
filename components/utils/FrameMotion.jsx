import React from "react";
import { motion } from "framer-motion";

export const RighToLeft = ({ children }) => {
    return (
        <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};
RighToLeft.displayName = "RighToLeft";

export const LeftToRight = ({ children }) => {
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};
LeftToRight.displayName = "LeftToRight";

export const UpToDown = ({ children }) => {
    return (
        <motion.div
            initial={{ y: "-50vh", opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};
UpToDown.displayName = "UpToDown";

export const DownToUp = ({ children }) => {
    return (
        <motion.div
            initial={{ y: "50vh", opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};
DownToUp.displayName = "DownToUp";

export const IconFadeOutHover = ({ children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2, origin: 0 }}
            transition={{ type: 'spring', stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};
IconFadeOutHover.displayName = "IconFadeOutHover";

export const ImgFadeOut = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};
ImgFadeOut.displayName = "ImgFadeOut";

export const FadeOut = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};
FadeOut.displayName = "FadeOut";

export const TextDown = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
        >
            {children}
        </motion.div>
    );
};
TextDown.displayName = "TextDown";