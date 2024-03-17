import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Service from "../components/Service/Service";
import Testimonial from "../components/Testimonial/Testimonial";
import data from "../data.json";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
  let [userdata ,setuserdata] = useState(null);
  const [error, setError] = useState(null);
  const [dataloading, setdataLoading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setuserdata(res.data.user);
      } catch (error) {
        setError(error.message);
      }finally{
        setdataLoading(!dataloading)
      }
    };
    fetchdata();
  }, []);

  if (dataloading) {
    return <p className="err">Loading user data...</p>;
  }

  if (error) {
    return <p className="err">Error: {error}</p>; // Display error message
  }

  if (!userdata) {
    return <p className="err">No user data found</p>;
  }
  const { heroData, aboutData, experienceData, portfolioData, serviceData, blogData, sliderData, contactData, footerData } = data;
  return (
    <>
      <main className="wrapper">
        <Hero userdata={userdata} data={heroData} />
        <About data={aboutData} userdata={userdata} />
        <Experience data={experienceData} userdata={userdata}  />
        <Service data={serviceData} userdata={userdata} />
        <Portfolio data={portfolioData} userdata={userdata} />
        <Testimonial data={sliderData} userdata={userdata}  />
        <Blog data={blogData} userdata={userdata}  />
        <Contact data={contactData} userdata={userdata} />
        <Footer data={footerData} userdata={userdata} />
      </main>
    </>
  )
}

export default Home;
