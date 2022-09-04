import brain from '../../assets/images/brain.png';

import '../../assets/styles/css/pages/home.css';

function Home() {
  return (
    <div className='main_skeleton'>
      <div className='main_info'>
        <div><h6>Complex Analytics For Simpler Urban Life</h6></div>
        <div className='title'><h1>URBAN COMPLEXITY LAB</h1></div>
        <div className='about'> 
          <h5>
            We promote potential of data science and complexity to broad audience and the students through teaching and public speaking.
          </h5>
          <h5>
            Our courses include Applied Data Science, Machine Learning, Network Analysis, Scientific Writing.
          </h5> 
        </div>
      </div>
      <div>
        <img src={brain} alt="brain"/>
      </div>
    </div>
  );
}

export default Home;