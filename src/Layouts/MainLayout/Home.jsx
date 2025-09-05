import React from 'react';
import Navbar from '../../components/Header/Navbar';
import BannerSlider from '../../components/Header/BannerSlider';
import Footer from '../../components/Footer/Footer';
import NewPlants from '../../Pages/NewPlants';
import Community from '../../Pages/Community';
import Contact from '../../Pages/Contact';
import FAQ from '../../Pages/FAQ';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <NewPlants></NewPlants>
            <Community></Community>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;