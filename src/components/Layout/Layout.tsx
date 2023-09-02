import {FunctionComponent} from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout:FunctionComponent = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-1 min-h-screen'>
            <Sidebar/>
            <div className='max-h-[calc(100vh)] overflow-y-scroll flex-[16]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;