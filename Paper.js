import React from 'react';
import testLogo1 from './1200px-Advanced_Placement_logo_-_College_Board.svg-468522160.png'; // Import the logo images
import testLogo2 from './ACT-Logo-2530462733.png';
import testLogo3 from './NAPLAN.png';
import testLogo4 from './OC_Opportunity Class Placement Test.png';
import testLogo5 from './PNG-GCSE-LOGO-2878326265.png';
import testLogo6 from './SAT_1.jpg';
import testLogo7 from './selective.svg';


function TestLogos() {
  return (
    <div style={styles.container}>
      <div className='flex'>
      <h2 className="mx-4"style={styles.heading}>Tests We Specialize In</h2>
      <div className='bg-cyan-600 h-1  w-36 my-6'>
        
      </div>
      </div>
      <div style={styles.logoContainer}>
        <img src={testLogo1} alt="Test 1" style={styles.logo} />
        <img src={testLogo2} alt="Test 2" style={styles.logo} />
        <img src={testLogo3} alt="Test 3" style={styles.logo} />
        <img src={testLogo4} alt="Test 4" style={styles.logo} />
        <img src={testLogo7} alt="Test 7" style={styles.logo} />
        <img src={testLogo6} alt="Test 6" style={styles.logo} />
        <img src={testLogo5} alt="Test 5" style={styles.logo} />
        
       
      
        {/* Add more img tags for other test logos */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '98vw', // Increased maxWidth
    margin: '0 auto',
    padding: '10px',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-around', // Adjust this value as needed
  },
  logo: {
    width: '195px', // Increased width of logos
    height: 'auto',
    margin: '10px', // Adjust the spacing between logos
  },
};

export default TestLogos;
