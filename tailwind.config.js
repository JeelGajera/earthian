module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ping: 'ping 4s cubic-bezier(0, 0, 0.4, 1) infinite',
      },
      screens: {
        'xsm': '320px',
      },
    }
  },
  plugins: [],
}