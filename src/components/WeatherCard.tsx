import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherCardProps {
  day: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  rainProbability: number;
  weatherState: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ day, date, maxTemp, minTemp, rainProbability, weatherState }) => {
  const getBackgroundColor = (temp: number) => {
    if (temp < 20) return '#87CEEB'; // Azul
    if (temp >= 21 && temp <= 30) return '#FFD700'; // Amarillo
    return '#FFA500'; // Naranja
  };

  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor(maxTemp) }]}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temp}>Max: {maxTemp}°C</Text>
      <Text style={styles.temp}>Min: {minTemp}°C</Text>
      <Text style={styles.rain}>Lluvia: {rainProbability}%</Text>
      <Text style={styles.state}>{weatherState}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: 150,
    alignItems: 'center',
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
  },
  temp: {
    fontSize: 16,
  },
  rain: {
    fontSize: 14,
  },
  state: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default WeatherCard;