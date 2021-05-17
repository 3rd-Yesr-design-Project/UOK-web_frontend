import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import userServices from '../../services/UserServices';
import { useHistory } from 'react-router-dom';
import Home from '../../views/Home/Home';
export default function ProtectRoute(ComposedComponent) {
  const Authentication = (props) => {
    const [isAuthenticated, setIsAuthentication] = useState(null);
    const user = useSelector((state) => state.user);
    const history = useHistory();
    useEffect(() => {
      checkAndRender();
    }, []);

    const checkAndRender = async () => {
      const userDetails = await userServices.fetchLoginUser();

      const userType = user?.user?.user_type;

      if (userDetails?.data?.data?.loginUser?.user_type === userType) {
        history.push('/');
      }
    };

    return (
      <div>
        {user?.user?.name && user?.user?.user_type ? (
          <ComposedComponent {...props} />
        ) : (
          <Home />
        )}
      </div>
    );
  };
  return Authentication;
}
