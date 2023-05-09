import LandPage from './haederPage.js';
import {ServicesOffered} from './navBar.js';
import '../styles/App.css';
import { Outlet } from 'react-router';

export default function NavPage(){
    return (
        <div>
            <div className='top-bg'>
                <LandPage />
                <ServicesOffered/>
                <Outlet />
            </div>
        </div>
    )
}
