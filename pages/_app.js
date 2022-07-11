import React from 'react'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        crossorigin="anonymous"
        strategy="afterInteractive"
      ></Script> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
