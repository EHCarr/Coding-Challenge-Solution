import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Container, Grid, Select, Text } from '@mantine/core'

const WeekThree = () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const FORECAST_URL = process.env.REACT_APP_FORECAST_URL

    const [location, setLocation] = useState<string | null>('London');
    const [weatherData, setWeatherData] = useState<any>({});
    const [forecastData, setForecastData] = useState<any>({});
    const url = `${BASE_URL}${API_KEY}&q=${location}&aqi=no`;
    const f_url = `${FORECAST_URL}${API_KEY}&q=${location}&days=5&aqi=no&alerts=no`;
    
    useEffect(() => {
            const getWeatherFromAPI = axios.get(url)
            .then(function (res){
              setWeatherData(res.data)})
              .catch(error => console.log(error))       
            
    },[location])

    useEffect(() => {
          const getForecastFromAPI = axios
          .get(f_url)
          .then(function (res){
              setForecastData(res.data)
            })
          .catch(error => console.log(error))
    },[location])

  return (
    <Container size="sm">
    <h1 className="title mt-5">Weather App</h1>
    <Grid>
      <Grid.Col span={12}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <form>
          <Select
          searchable
      label="Pick the location"
      placeholder="Pick location"
      defaultValue='London'
      data={['London', 'Paris', 'Milan', 'Madrid']}
      value={location}
      onChange={setLocation}
    />
          </form>
       <h2>Weather Condition: {weatherData?.current?.condition?.text}</h2>
       <h2>Humidity: {weatherData?.current?.humidity}</h2>
       <h2>Wind Speed:{weatherData?.current?.wind_mph}</h2>
       <h2>Precipitation: {weatherData?.current?.precip_mm} mm</h2>
        </Card>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col span={12}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h3>5 Day Forecast</h3>
      </Card>
      </Grid.Col>
    </Grid>

  </Container>
  )
}

export default WeekThree