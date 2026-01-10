import React from 'react';

const ChatIcon = ({ size = 40 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#9333ea", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="innerShadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
          <feOffset in="blur" dx="2" dy="2" result="offsetBlur"/>
          <feFlood floodColor="#000000" floodOpacity="0.3" result="offsetColor"/>
          <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur"/>
          <feBlend in="SourceGraphic" in2="offsetBlur" mode="normal"/>
        </filter>

        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:"#ffffff", stopOpacity:0.4}} />
          <stop offset="100%" style={{stopColor:"#ffffff", stopOpacity:0}} />
        </linearGradient>
      </defs>
      
      <circle cx="100" cy="100" r="95" fill="url(#mainGradient)" opacity="0.3" filter="url(#glow)"/>
      <circle cx="100" cy="100" r="88" fill="url(#mainGradient)" opacity="0.5" filter="url(#glow)"/>
      <circle cx="100" cy="100" r="80" fill="url(#mainGradient)"/>
      <ellipse cx="100" cy="70" rx="60" ry="50" fill="url(#shineGradient)"/>
      
      <g filter="url(#innerShadow)">
        <path d="M 60 80 Q 60 60 80 60 L 120 60 Q 140 60 140 80 L 140 110 Q 140 130 120 130 L 90 130 L 75 145 L 75 130 Q 60 130 60 110 Z" 
              fill="white" opacity="0.95"/>
        <path d="M 110 70 L 95 95 L 105 95 L 90 120 L 115 90 L 105 90 Z" 
              fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="145" cy="75" r="12" fill="#10b981" opacity="0.9"/>
        <text x="145" y="80" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">!</text>
      </g>
      
      <circle cx="45" cy="60" r="3" fill="white" opacity="0.8">
        <animate attributeName="cy" values="60;50;60" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="155" cy="130" r="4" fill="white" opacity="0.6">
        <animate attributeName="cy" values="130;120;130" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="50" cy="140" r="2.5" fill="white" opacity="0.7">
        <animate attributeName="cy" values="140;132;140" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="150" cy="55" r="3.5" fill="white" opacity="0.5">
        <animate attributeName="cy" values="55;47;55" dur="2.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      
      <ellipse cx="100" cy="160" rx="40" ry="8" fill="white" opacity="0.1"/>
    </svg>
  );
};

export default ChatIcon;