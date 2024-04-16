import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import HeroSecond from '../components/HeroSecond';
import HeroThird from '../components/HeroThird';
import HeroFourth from '../components/HeroFourth';

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards/>
    <HeroSecond />
    <HeroThird />
    <HeroFourth />
    </>
  )
}

export default HomePage