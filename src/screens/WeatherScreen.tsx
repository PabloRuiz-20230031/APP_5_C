// WeatherScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import { API_KEY, API_URL } from '../config/api';

interface WeatherData {
  day: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  rainProbability: number;
  weatherState: string;
}

const WeatherScreen: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  // Solicitar permisos de ubicación
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de ubicación',
          message: 'Esta app necesita acceso a tu ubicación para mostrar el clima.',
          buttonNeutral: 'Preguntar después',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceptar',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // En iOS, el permiso se solicita automáticamente
  };

  // Obtener la ubicación actual
  const getCurrentLocation = () => {
    requestLocationPermission().then((hasPermission) => {
      if (hasPermission) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log('Ubicación obtenida:', position.coords); // Depuración
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error obteniendo la ubicación:', error); // Depuración
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    });
  };

  // Obtener el pronóstico del clima usando las coordenadas
  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          q: `${lat},${lon}`, // Usar latitud y longitud
          days: 5, // Obtener pronóstico para 5 días
        },
      });

      console.log('Respuesta de la API:', response.data); // Depuración

      // Procesar los datos para mostrar los próximos 5 días
      const data = response.data.forecast.forecastday.map((day: any) => ({
        day: new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long' }),
        date: formatDate(new Date(day.date)),
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        rainProbability: day.day.daily_chance_of_rain,
        weatherState: day.day.condition.text,
      }));

      console.log('Datos procesados:', data); // Depuración
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Formatear la fecha
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    getCurrentLocation(); // Obtener la ubicación actual al cargar la pantalla
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeatherData(location.latitude, location.longitude); // Obtener el clima cuando se tenga la ubicación
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <WeatherCard
            day={item.day}
            date={item.date}
            maxTemp={item.maxTemp}
            minTemp={item.minTemp}
            rainProbability={item.rainProbability}
            weatherState={item.weatherState}
          />
        )}
        horizontal
        contentContainerStyle={styles.flatListContent} // Añade esto
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  flatListContent: {
    paddingHorizontal: 10, // Ajusta el padding horizontal si es necesario
  },
});

export default WeatherScreen;