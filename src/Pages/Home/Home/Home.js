import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
import FAQ from '../FAQ/FAQ';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            <div className='text-center mb-12'><Link to='/dashboard/sellpost'><button className=" btn btn-wide ">Sale your car</button></Link>
            </div>
            <ExtraSection2></ExtraSection2>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;