import React from 'react';
import uok from '../../assets/uok.jpg';
import HomeLayout from '../../componet/layout/HomeLayout';

const Home = () => {
  return (
    <HomeLayout>
      <div className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-md-6 nopadding'>
            <img src={uok} alt='uok logo' width={700} />
          </div>
          <div className='col-md-6 nopadding '>
            <div className='container mt-5 p-5'>
              <p className='text-2xl'>About Kelaniya</p>
              <p>
                The University of Kelaniya is committed to provide high quality
                education and to conduct high impact research which will
                contribute significantly to the enhancement of existing
                knowledge in various fields of Humanities, Medicine, Sciences,
                Commerce & Management and to the development of the country.
              </p>
            </div>
          </div>
        </div>
        <div className='m-2'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-6'>
                  <div class='card m-2'>
                    <div class='card-body'>
                      <h5 class='card-title'>University Vission</h5>
                      <p class='card-text'>
                        "To become a centre of excellence in creation and
                        dissemination of knowledge for sustainable development."
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class='card m-2'>
                    <div class='card-body'>
                      <h5 class='card-title'>University Mission</h5>
                      <p class='card-text'>
                        "To nurture intellectual citizens through creativity and
                        innovation, who contribute to the national development."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'></div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
