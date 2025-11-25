import React, { useEffect, useState } from 'react';

const DesktopOnly: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is less than or equal to 768px (mobile)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#fff',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Desktop Only</h1>
      <p style={{ fontSize: '1.2rem' }}>
        This site is best viewed on a desktop device.<br />
        Please switch to a larger screen for the best experience.
      </p>
    </div>
  );
};

export default DesktopOnly;
