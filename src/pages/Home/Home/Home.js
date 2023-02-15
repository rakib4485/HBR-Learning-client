import React from 'react';
import Loader from '../../../components/Loader/Loader';
import Categories from '../Categories/Categories';
import Explore from '../Explore/Explore';
import Hero from '../Hero/Hero';
import HeroTwo from '../HeroTwo/HeroTwo';
import Review from '../Review/Review';
import Support from '../Support/Support';
import TrendingCourses from '../TrendingCourses/TrendingCourses';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Explore></Explore>
            <Support></Support>
            <TrendingCourses></TrendingCourses>
            <HeroTwo></HeroTwo>
            <Categories></Categories>
            
            <Review></Review>
        </div>
    );
};

export default Home;