import React from 'react'


export default function Highlight(props) {
    const {children,color} = props
    return (
      <span
        style={{
          backgroundColor: color,
          borderRadius: '2px',
          color: '#fff',
          padding: '0.2rem',
        }}>
        {children}
      </span>
    );
  }