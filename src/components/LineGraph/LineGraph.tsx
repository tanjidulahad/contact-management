import {FunctionComponent} from 'react';
import { useQuery } from 'react-query';
import { fetchCasesWithDate } from '../../api/api';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Covid19 cases fluctuations',
      },
    },
  };

const LineGraph:FunctionComponent = () => {
    const { data, isLoading, isError } = useQuery('diseasecasewithdata', fetchCasesWithDate);

    if (isLoading) {
        return <div className='text-center text-xl text-gray-400 font-bold'>Loading...</div>;
      }
    if (isError) {
        return <div className='text-center text-xl text-gray-400 font-bold'>Something went wrong.</div>;
      }

    const dates=Object.keys(data?.cases)
    const caseValue=Object.values(data?.cases)
    const deathValue=Object.values(data?.deaths)
    const recoveredValue=Object.values(data?.recovered)

    const chartData={
        labels:dates,
        datasets:[
            {
                label: 'Cases',
                data: caseValue,
                borderColor: 'blue',
                fill: false,
              },
              {
                label: 'Deaths',
                data: deathValue,
                borderColor: 'red',
                fill: false,
              },
              {
                label: 'Recovered',
                data: recoveredValue,
                borderColor: 'green',
                fill: false,
              },
        ]
    }

    return (

            <div>
                <Line options={options} data={chartData} />
            </div>
    );
};

export default LineGraph;