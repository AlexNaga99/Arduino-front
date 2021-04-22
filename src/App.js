import React, { useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { getTemperature } from './connection/request';
import { Statistic, Card, Row, Col } from 'antd';



const App = () => {

  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    getTemp();
    setInterval(() => {
      getTemp()
    }, 5000);
  });

  const getTemp = async () => {
    let { data: response } = await getTemperature.get();
    setTemperature(response);
  }

  return (
    <div className="site-statistic-demo-card">
      <center>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Statistic title="Celsius" value={temperature} precision={2} valueStyle={{ color: '#3f8600' }} suffix="°C" />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic title="Kelvin" value={temperature + 273} precision={2} valueStyle={{ color: '#3f8600' }} suffix="°K" />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic title="Farenheit" value={(temperature * 1.8) + 32} precision={2} valueStyle={{ color: '#3f8600' }} suffix="°F" />
            </Card>
          </Col>
        </Row>
      </center>
    </div>
  )
}

export default App;
