import React from 'react';
import HeroSection from '../components/homecomponents/hero-section';
import ProjectsWork from '../components/commonchild/projectsWork';
import Layout from '../components/layout/layout';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection/> 
      <ProjectsWork/> 
    </Layout>
  );
};
export default HomePage;