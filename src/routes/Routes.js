import React from 'react';
import { useApplication } from '../context/ApplicationContext';
import OtherRoutes from './OtherRoutes';
import SignRoutes from './SignRoutes';

const Routes = () => {
  const { currentUser } = useApplication();

  return currentUser ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;