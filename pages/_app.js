import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}




//   Important: You need to restart the development server when you add pages/_app.js. Press Ctrl + c to stop the server and run:
//   npm run dev

// Any styles imported in _app.js will be applied globally, to all pages of the application. CANNOT import global CSS anywhere else.