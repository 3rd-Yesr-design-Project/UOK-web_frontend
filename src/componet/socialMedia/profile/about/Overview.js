import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import HomeAlt from '../icons/homeAlt';
import Pin from '../icons/pin';
import RSS from '../icons/rss';
import { Card } from 'react-bootstrap';

const Overview = () => {
  return (
    <div className='m-3'>
      <Card>
        <div className='shadow-fb rounded w-full bg-white p-4'>
          <div className='text-xl font-bold text-fBlack'>OverView</div>
          <div className='grid grid-cols-2'>
            <div>
              <div className='mt-4 flex items-center'>
                <SuitCase />
                <span className='ml-4'>
                  Massa eros etiam diam massa gravida nullam urna{' '}
                </span>
              </div>
              <div className='mt-4 flex items-center'>
                <Hat />
                <span className='ml-4'>Gravida nullam urna</span>
              </div>
              <div className='mt-4 flex items-center'>
                <Hat />
                <span className='ml-4'>Etiam diam massa </span>
              </div>
            </div>
            <div>
              <div className='mt-4 flex items-center'>
                <HomeAlt />
                <span className='ml-4'>
                  Lives in <b>Lutsk</b>{' '}
                </span>
              </div>
              <div className='mt-4 flex items-center'>
                <Pin />
                <span className='ml-4'>
                  From <b>Lutsk</b>{' '}
                </span>
              </div>
              <div className='mt-4 flex items-center'>
                <RSS />
                <span className='ml-4'>
                  Followed by <b>97 people</b>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Overview;
