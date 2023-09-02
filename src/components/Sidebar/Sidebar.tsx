import {FunctionComponent} from 'react';
import { Link } from 'react-router-dom';

const Sidebar:FunctionComponent = () => {
    return (
        <div className='sm:flex-[2] flex sm:block justify-center gap-4 sm:space-y-5 sm:pl-5 py-3 border-r-[2px]'>
            <h3 className='text-xl cursor-pointer border border-black sm:border-none font-medium sm:bg-gradient-to-r from-sky-600 to-white sm:pl-2 px-2 sm:px-0 py-1 rounded-l-sm'><Link to="/">Contact</Link></h3>
            <h3 className='text-xl cursor-pointer border border-black sm:border-none font-medium sm:bg-gradient-to-r from-sky-600 to-white sm:pl-2 px-2 sm:px-0 py-1 rounded-l-sm'><Link to="/map">Chart & Maps</Link></h3>
        </div>
    );
};

export default Sidebar;