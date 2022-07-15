import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MainPage from '../../scenes/main-page/main-page';

const Routing:React.FC = () =>{
	return( 
	<BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>)
}

export default Routing;