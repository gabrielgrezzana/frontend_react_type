import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  visible: boolean;
}

const HelperText: React.FC<NotificationProps> = ({ message, visible }) => {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 4000); 

      return () => clearTimeout(timer); 
    } else {
      setShow(false);
    }
  }, [visible]);

  if (!show) return null;

  return (
    <div style={{                   
      display: 'flex',             
      alignItems: 'center',        
      justifyContent: 'center',    
      width: '350px',
      height: '80px',
      position: 'fixed',
      top: '25%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#add8e6',
      color: '#000',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
      fontSize: 22,
      fontWeight: "600",
      textAlign: 'center' }}>
      {message}
    </div>
  );
};




export default HelperText;