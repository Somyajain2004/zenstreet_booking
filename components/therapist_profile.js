import React from 'react';
import Image from 'next/image';
import styles from '../styles/profile.css';
import { useRouter } from 'next/router';

const TherapistProfile = () => {
  const router = useRouter();

  const handleBookSessionClick = () => {
    router.push('/available_sessions');
  };
  
  return (
    <div className="container">
    <div className="left-section">
      <Image
        src="/images/Frame 26.svg"
        alt="Static background"
        layout="fill"
        objectFit="cover"
      />
      <div className="overlay-content">
        <div className='back'>
          <Image
            src="/images/Frame 239.svg"
            width={25}
            height={24}
            alt='BACK'
          />
          <p>Back</p>
        </div>

        <div className='therapist-card'>
          <Image
            className='share-icon'
            src="/images/uiw_share.svg"
            width={15}
            height={15}
            alt='share'
          />

          <div className='therapist-details'>
            <Image
              className='therapist-pic'
              src="/images/Frame 7.svg"
              width={150}
              height={150}
            />

            <div className='tp-name-flex'>
              <Image
                src="/images/Vector.svg"
                width={22}
                height={12}
              />
              <p className='tp-name-name'>Swetha Varma</p>
              <Image
                src="/images/Verified.svg"
                width={12}
                height={12}
              />          
            </div>

            <p className='tp-profession'>Consultant Clinical Psychologist</p>
            <p className='experience'>10+ Years of experience</p>
            <p className='session-start'>Starts at <span className='price'>1,200</span><span className='session'>/ Session</span></p>

            <div className='location'>
              <Image
                src="/images/carbon_location.svg"
                width={23}
                height={23}
              />
              <p className='loc-p'>Block A2, Delhi</p>
            </div>
          </div>
        </div> 
        
        <div className='book-session'>
          <button type="button" onClick={handleBookSessionClick}>
            Book session
          </button>
        </div>
      </div>
    </div>
    <div className="right-section">
      <div className='aboutme'>
        <h3 className='aboutme-head'>About me</h3>
        <p className='aboutme-desc'>Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.</p>
      </div>

      <div className='credentials'>
        <h3 className='cred-head'>Credentials</h3>
        <ul className='cred-list'>
          <li>
            <img src="/images/degree.svg" alt="icon" />
            Ph.D. in Clinical Psychology - Harvard University
          </li>
          <li>
            <img src="/images/degree.svg" alt="icon" />
            M.A. in Counseling - University of California, Berkeley
          </li>
          <li>
            <img src="/images/clarity_license-line.svg" alt="icon" />
            Licensed Professional Counselor (LPC) - State of DEF
          </li>
          <li>
            <img src="/images/carbon_certificate.svg" alt="icon" />
            Certified Cognitive Behavioral Therapist (CBT)
          </li>
          <li>
            <img src="/images/member.svg" alt="icon" />
            Member, American Psychological Association (APA)
          </li>
          <li>
            <img src="/images/exp.svg" alt="icon" />
            10+ years of experience in individual and group therapy
          </li>
        </ul>
      </div>   

      <div className='available'>
        <h3 className='avail-head'>Available on</h3>
        <div className='avail-options'>
          <div className='avail-item'>
            <img src="/images/Frame 522.svg" alt="In-person" className="avail-img"/>
            <p>In-person</p>
          </div>
          <div className='avail-item'>
            <img src="/images/Frame 523.svg" alt="Video/Voice call" className="avail-img"/>
            <p>Video/ Voice call</p>
          </div>
        </div>
      </div>   


    </div>
  </div>
  );
};

export default TherapistProfile;