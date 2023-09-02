import {FunctionComponent} from 'react';
import LineGraph from '../../LineGraph/LineGraph';
import MapWithData from '../../MapWithData/MapWithData';

const Map:FunctionComponent = () => {
    return (
        <div>
            {/* charts and maps header */}
            <div className='bg-blue-200 text-center py-3'>
                <h2 className='text-2xl font-medium'>Charts & Maps</h2>
            </div>

            {/* showing linegrap */}

            <div>
            <h2 className='text-center text-lg font-medium mt-5 mb-5'>Covid19 Cases Over Time</h2>
                <LineGraph/>
            </div>

            {/* showing map with data */}

            <div className='mt-10'>
                <h2 className='text-center text-lg font-medium mb-5'>Covid19 Cases by Country</h2>
                <MapWithData/>
            </div>
        </div>
    );
};

export default Map;