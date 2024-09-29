import React from 'react';
import Layout from '../components/layout/layout';
import AboutHero from '../components/aboutcomponents/abouthero';
import EduExperience from '../components/aboutcomponents/eduexperience';
import Testimonial from '../components/aboutcomponents/testimonial';

const AboutPage = () => {
  return (
    <Layout>
      <AboutHero/> 
      <EduExperience/>
      <Testimonial/>
      
    </Layout>
  );
};

export default AboutPage ;