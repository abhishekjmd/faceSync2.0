import React, { useState, useEffect, useRef } from 'react';
// import './App.css'; // You can define your CSS styles here

const VideoStream = () => {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [ws, setWs] = useState(null);
  const [startBtn, setStartBtn] = useState("start");

  useEffect(() => {
    // start(); // Initial WebSocket connection on component mount
  }, []);

  const connectWebSocket = () => {
    const websocket = new WebSocket('ws://localhost:8765'); // WebSocket server address

    websocket.onmessage = (event) => {
      const frame = event.data;
      const blob = new Blob([frame], { type: 'image/jpeg' });

      const url = URL.createObjectURL(blob);
      videoRef.current.src = url;
      
      const img = new Image();
      img.onload = () => {
        const overlayCanvas = overlayRef.current;
        const ctx = overlayCanvas.getContext('2d');
        ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        ctx.drawImage(img, 0, 0, overlayCanvas.width, overlayCanvas.height);
      };
      img.src = url;
    };

    websocket.onerror = (event) => {
      setStartBtn("fail")
      console.error('WebSocket error observed:', event);
    };

    websocket.onopen = () => {
      setStartBtn("connected")
      console.log('WebSocket connection established.');
      websocket.send("hi");
    };

    websocket.onclose = () => {
      setStartBtn("start")
      console.log('WebSocket connection closed.');
    };

    setWs(websocket);
  };

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send("hi");
    } else {
      console.error("WebSocket connection not established.");
    }
  };

  const start = () => {
    if (ws) {
      ws.close(); // Close existing WebSocket connection
    }
    setStartBtn("wait")
    connectWebSocket(); // Reconnect WebSocket
  };

  const close = () => {
    if (ws) {
      ws.close();
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay hidden/>
      <canvas ref={overlayRef} className="overlay" style={{height: "500px", width: "500px", border: "2px solid black"}}/>
      <button type='button' onClick={sendMessage}>Send Message</button>
      <button type='button' onClick={start}>{startBtn}</button>
      <button type='button' onClick={close}>Close</button>
    </div>
  );
};

export default VideoStream;
