import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Container, Circle } from './styles';
import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';

interface ClusterProps {
  status: string;
}

interface GraphsProps {
  data: any[];
  labels: string[];
}

const HomePage: React.FC = () => {
  const [cpuUsage, setCpuUsage] = useState({
    data: [],
    labels: [],
  } as GraphsProps);
  const [memoryUsage, setMemoryUsage] = useState({
    data: [],
    labels: [],
  } as GraphsProps);
  const [clusterStatus, setClusterStatus] = useState({} as ClusterProps);

  const getCPUUsageData = useCallback(async () => {
    const response = await axios.get(
      'https://run.mocky.io/v3/b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f',
    );
    setCpuUsage(response.data);
  }, []);

  const getMemoryUsageData = useCallback(async () => {
    const response = await axios.get(
      'https://run.mocky.io/v3/d23c3262-967e-4567-b7f6-2fd263748811',
    );
    setMemoryUsage(response.data);
  }, []);

  const getClusterStatusInfo = useCallback(async () => {
    const response = await axios.get(
      'https://run.mocky.io/v3/cab2791c-7c85-4461-b95c-86bc1a12dc72',
    );
    setClusterStatus(response.data);
  }, []);

  useEffect(() => {
    Promise.all([
      getCPUUsageData(),
      getMemoryUsageData(),
      getClusterStatusInfo(),
    ]);
  }, []);

  const graphData = useCallback((labels) => {
    return {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        foreColor: 'var(--gray-500)',
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
      },
      colors: ['var(--pink)'],

      xaxis: {
        type: 'category',
        axisBorder: {
          color: 'var(--gray-600)',
        },
        axisTicks: {
          color: 'var(--gray-600)',
        },
        categories: labels,
      },
      fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          opacityFrom: 0.7,
          opacityTo: 0.3,
        },
      },
    };
  }, []);

  const getData = useCallback((data) => {
    return [{ name: 'series1', data }];
  }, []);

  return (
    <Container>
      <Header />
      <div className="content">
        <Sidebar />
        <div className="grid">
          <div className="box">
            <span>Consumo de CPU</span>
            <Chart
              options={graphData(cpuUsage.labels) as ApexOptions}
              type="area"
              series={getData(cpuUsage.data)}
              height={160}
            />
          </div>
          <div className="box">
            <span>Consumo de Memória</span>
            {/* Arredondei os valores do eixo y para melhorar a visualização principalmente no mobile */}
            <Chart
              options={graphData(memoryUsage.labels) as ApexOptions}
              series={getData(
                memoryUsage.data.map((info) => Number(info).toFixed(2)),
              )}
              type="area"
              height={160}
            />
          </div>
          <div className="box">
            <span>Status do Cluster</span>
            <div className="status">
              <Circle color={clusterStatus.status}>
                {clusterStatus.status === 'green' ? 'On' : 'Off'}
              </Circle>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
