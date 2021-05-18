import React from 'react';
import { connect } from 'react-redux';

const Photos = ({ phots }) => {
  return (
    <div className='card'>
      <div className='w-full shadow-fb bg-white rounded p-4'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-bold text-fBlack'>Photos</div>
          <button className='focus:outline-none text-fBlue'>
            See All Photos
          </button>
        </div>
        <div className='grid grid-cols-3 flex gap-1.5 mt-4'>
          {phots?.slice(0, 9).map((photo) => (
            <img
              src={photo?.post_url}
              className='rounded-tl'
              alt='photo'
              style={{ height: '60px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    phots: state.post.userPost,
  };
};
export default connect(mapStateToProps)(Photos);
