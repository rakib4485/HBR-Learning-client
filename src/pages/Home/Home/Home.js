import React from 'react';
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
            <Categories></Categories>
            <HeroTwo></HeroTwo>
            <TrendingCourses></TrendingCourses>
            <Support></Support>
            <Review></Review>
        </div>
    );
};

export default Home;