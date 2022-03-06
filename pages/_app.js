import '../styles/app.scss'
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({Component, pageProps}) {
    return (
        <div className="main__app">
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </div>

    )
}

export default MyApp