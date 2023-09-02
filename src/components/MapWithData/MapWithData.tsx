import { FunctionComponent } from 'react';
import { fetchCasesWithCountryData } from '../../api/api';
import { useQuery } from 'react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



type CountryData = {
    country: string;
    active: number;
    recovered: number;
    deaths: number;
    countryInfo: {
        lat: number;
        long: number;
    };
}


const MapWithData: FunctionComponent = () => {
    const { data, isLoading, isError } = useQuery('fetchCasesWithCountryData', fetchCasesWithCountryData);

    if (isLoading) {
        return <div className='text-center text-xl text-gray-400 font-bold'>Loading...</div>;
    }
    if (isError) {
        return <div className='text-center text-xl text-gray-400 font-bold'>Something went wrong.</div>;
      }


    const countriesData = data.map((item: CountryData) => {
        return {
            country: item.country,
            active: item.active,
            recovered: item.recovered,
            deaths: item.deaths,
            countryInfo: { lat: item.countryInfo.lat, long: item.countryInfo.long },
        }
    })

    


    return (
        <div>
            <MapContainer
                center={[countriesData[0].countryInfo.lat, countriesData[0].countryInfo.long]}
                zoom={2}
                scrollWheelZoom={false}
                style={{ height: '500px', width: '100wh' }}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Loop through the countriesData array and create markers */}
                {countriesData.map((country: CountryData, index: number) => (
                    <Marker
                        key={index}
                        position={[country.countryInfo.lat, country.countryInfo.long]} // Use latitude and longitude from the data
                    >
                        <Popup>
                            <div>
                                <h3>{country.country}</h3>
                                <p>Total Active Cases: {country.active}</p>
                                <p>Total Recovered Cases: {country.recovered}</p>
                                <p>Total Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapWithData;