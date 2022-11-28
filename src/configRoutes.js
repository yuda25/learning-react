import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from "./contents/landingPage";
import ManageUsers from "./contents/manageUsers";
import React from 'react';
import Navbar from './components/navbar';

class ConfigRoutes extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='landingPage' element={< LandingPage />} />
                        <Route path='/' element={< Navigate to={'landingPage'} />} />
                        <Route path='manageUsers' element={< ManageUsers />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default ConfigRoutes;