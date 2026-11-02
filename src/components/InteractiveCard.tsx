'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from './Icons';

interface InteractiveCardProps {
  data: {
    category: string;
    title: string;
    shortdescription: string;
    image: string;
    slug: string;
    date: string;
  };
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div
      className="border my-md-0 my-4"
      style={{
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
        <div style={{ position: 'relative' }}>
          <Image
            src={data.image}
            alt={data.title}
            title={data.title}
            width={400}
            height={240}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#000',
              color: '#fff',
              padding: '5px 16px',
              fontSize: '0.62rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {data.category}
          </div>
        </div>

        {/* Reduced padding-top, smaller title, tighter spacing */}
        <div style={{ padding: '1.2rem 1rem 0.8rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '15px',
            fontWeight: 'bold',
            marginBottom: '0.4rem',
            color: "#111111",
            lineHeight: 1.2,
            display: 'inline-block',
          }}>{data.title}</h2>
          <hr
            style={{
              width: '35px',
              margin: '0 auto 0.4rem',
              borderTop: '2px solid #ccc',
            }}
          />
          <p
            style={{
              fontSize: '0.88rem',
              color: '#333',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginBottom: '0.4rem',
            }}
          >
            {data.shortdescription}
          </p>
         <div
  className="d-flex align-items-center justify-content-center mt-1"
  style={{
    fontSize: '10px',
    fontWeight: 200,
    fontFamily: "'Rubik', Arial, sans-serif",
  }}
>
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
            <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
            <span style={{ color: '#555', marginLeft: '4px' }}>{data.date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InteractiveCard;
