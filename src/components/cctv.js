import React, { useState, useEffect } from 'react';

const CCTVFeed = () => {
  const [feedUrl, setFeedUrl] = useState('https://youtu.be/8DJi4PrdFCg'); // Replace with your CCTV feed URL

  useEffect(() => {
    // Any additional setup or cleanup can go here
    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>CCTV Camera Feed</h2>
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        {/* <video
          src={feedUrl}
          autoPlay
          controls
          style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }}
        >
          Your browser does not support the video tag.
        </video> */}
        <iframe style={{ width: '100%', height: '500px', border: '1px solid #ccc' }} width="973" height="547" src="https://www.youtube.com/embed/8DJi4PrdFCg" title="Example of Hi-Definition Video Surveillance of a Factory Floor - by CCTVDOC.COM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default CCTVFeed;
