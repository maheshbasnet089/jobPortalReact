import React, { useState } from "react";
import Preloder from "../preloader/preloder";
import Carousel from "./Carousel";
import Content from "./Content";
import FeturedJobs from "./FeturedJobs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopJobs from "./TopJobs";

const Home = () => {
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        <>
            {loading ? (
                <Preloder />
            ) : (
                <div>
                    <Navbar />
                    <Carousel />
                    <TopJobs />
                    <FeturedJobs />
                    <Content />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Home;
