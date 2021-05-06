import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import HomeAlt from '../icons/homeAlt';
import Pin from '../icons/pin';
import RSS from '../icons/rss';
import { Card } from 'react-bootstrap';

const Overview = (props) => {
  return (
    <div className='m-3'>
      <Card>
        <div className='shadow-fb rounded w-full bg-white p-4'>
          <div className='text-xl font-bold text-fBlack'>OverView</div>
          <div className='grid grid-cols-2'>
            <div>
              <div className='mt-4 flex items-center'>
                <SuitCase />
                <span className='ml-4'>{props.work}</span>
              </div>
              <div className='mt-4 flex items-center'>
                <Hat />
                <span className='ml-4'>{props.university}</span>
              </div>
              <div className='mt-4 flex items-center'>
                <Hat />
                <span className='ml-4'>{props.school} </span>
              </div>
            </div>
            <div>
              <div className='mt-4 flex items-center'>
                <HomeAlt />
                <span className='ml-4'>
                  Lives in <b>{props.home_town}</b>{' '}
                </span>
              </div>
              <div className='mt-4 flex items-center'>
                <Pin />
                <span className='ml-4'>
                  From <b>{props.current_city}</b>{' '}
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
