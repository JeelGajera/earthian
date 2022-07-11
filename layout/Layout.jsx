import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import BgObjects from '../components/BgObjects';
import Frame from '../components/utils/Frame';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icon.png" />
        <meta title="description" content="Jeel Gajera's porfolio site :)" />
        <meta name={title} content={description} />
      </Head>
      <BgObjects/>
      <Navbar />
      <Frame>{children}</Frame>
    </>
  );
};

export default Layout;