import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FavoriteOutput from '../components/modules/FavoriteOutput';


const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={FavoriteOutput} />
    </BrowserRouter>
  );
};

export default OtherRoutes;