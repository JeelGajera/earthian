import React from 'react';

export default function Frame({ children }) {
  return <section className="px-4 md:px-8 lg:max-w-screen-lg md:mx-auto z-0">{children}</section>;
}