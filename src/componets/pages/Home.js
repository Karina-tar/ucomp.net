import { Link } from "react-router-dom";
import imgs from "../../assets/images/imgs";

import '../../assets/styles/css/pages/home.css'

function Home() {
  return (
    <main>
      <article className="home-info">
        <div className="general-info">
          <span className="description">
            Complex Analytics For Simpler Urban Life
          </span>
          
          <h1 className="title">
            urban complexity lab
          </h1>
          
          <h3 className="about">
            We promote potential of data science and complexity to broad audience and the students through teaching and public speaking. Our courses include Applied Data Science, Machine Learning, Network Analysis, Scientific Writing.
          </h3>
          
          <div className="links">
            <Link to='Publications' className="active">Publications</Link>
            <Link to='Contacts'>Contacts</Link>
          </div>
        </div>
        <div className="info-image">
          <img src={imgs.city} alt="city"/>
        </div>
      </article>

      <article className="home-text">
        <p>
          Urban Complexity Lab at NYU's Center For Urban Science + Progress is unfolding complexity of urban systems for research, innovation and applications. We leverage big urban data and cutting edge machine learning and network analysis techniques to  make our cities more smart, efficient, sustainable, resilient – better places to live in.
        </p>

        <p>
          Our team brings together faculty, researchers and students – goal-oriented, bright and enthusiastic personalities inspired by smart cities and the promise of data science.
        </p>

        <p>
          Our projects on urban mobility, transportation, public safety, urban impact assessments as well as fundamental research in network science, big data and complexity are supported by industrial partners and foundations and help innovating the cities we live in. Our supporters include US Department Of Energy, US Department Of Transportation, National Geospatial Intelligence Agency, Lockheed Martin, Future Cities Catapult, Arcadis.
        </p>

        <p>
          Our papers are published in top tier journals including Nature's Scientific Reports, PNAS, Physical Review E, PLjournal.pone.0014248.g001OS ONE, Royal Society Open Science, International Journal Of GIS, Applied Geography, Environment And Planing B, EPJ Data Science and many others and push forward the frontier of the modern science.
        </p>

        <p>
          We promote potential of data science and complexity to broad audience and the students through teaching and public speaking.
        </p>

        <p>
          The courses we teach cover applied aspects of Data Science, Machine Learning and Network Analysis.
        </p>
        
      </article>
    </main>
  );
}

export default Home;