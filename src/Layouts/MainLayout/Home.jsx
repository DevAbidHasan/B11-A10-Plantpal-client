import React from 'react';
import Navbar from '../../components/Header/Navbar';
import BannerSlider from '../../components/Header/BannerSlider';
import Footer from '../../components/Footer/Footer';
import NewPlants from '../../Pages/NewPlants';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <NewPlants></NewPlants>
            <Footer></Footer>
        </div>
    );
};

export default Home;