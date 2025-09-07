import React, { useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import BannerSlider from '../../components/Header/BannerSlider';
import Footer from '../../components/Footer/Footer';
import NewPlants from '../../Pages/NewPlants';
import Community from '../../Pages/Community';
import Contact from '../../Pages/Contact';
import FAQ from '../../Pages/FAQ';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const Home = () => {
    const location=useLocation();
    const navigate= useNavigate();
    useEffect(()=>{
        if(location.state?. message){
            toast.success(location.state.message);
            navigate(location.pathname, { replace: true });
        }
    },[location.state])
    return (
        <div>
            <ToastContainer/>
            <BannerSlider></BannerSlider>
            <NewPlants></NewPlants>
            <Community></Community>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;