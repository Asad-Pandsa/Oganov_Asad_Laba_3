import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../styles/home.css";


const Home = () => {
    const theme  = useSelector(state => state.ui.theme)

    useEffect(() => {
        document.body.className = theme
    }, [theme]) 

    return(
        <main className="home container">

            <h2>Senate</h2>
            <p>Кто мы такие?</p>
        </main>
    )
};

export default Home