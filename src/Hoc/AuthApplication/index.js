import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import userServices from '../../services/UserServices';
import { useHistory } from 'react-router-dom';

export default function ProtectRoute(ComposedComponent) {
  const Authentication = (props) => {
    const user = useSelector((state) => state.user);
    const history = useHistory();
    useEffect(() => {
      checkAndRender();
    }, [user?.user?.user_type]);

    const checkAndRender = async () => {
      const userDetails = await userServices.fetchLoginUser();

      if (
        user?.user?.user_type &&
        user?.user?.user_type !== userDetails?.data?.data?.user_type
      ) {
        history.push('/');
      }
    };

    return (
      <div>
        {user?.user?.name && user?.user?.user_type ? (
          <ComposedComponent {...props} />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  };
  return Authentication;
}
