import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { styles } from '../../config/themeTemperatura';

const TemperaturaScreen = () => {
    const [temperature, setTemperature] = useState(20);

    const increaseTemperature = () => {
        setTemperature(temperature + 1);
    };

    const decreaseTemperature = () => {
        setTemperature(temperature - 1);
    };

    const getTemperatureColor = () => {
        if (temperature < 15) {
            return 'blue';
        } else if (temperature >= 15 && temperature <= 25) {
            return 'green';
        } else {
            return 'red';
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Temperatura App</Text>
            <Text style={[styles.temperature, { color: getTemperatureColor() }]}>
                {temperature}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="+" onPress={increaseTemperature}/>
                <Button title="-" onPress={decreaseTemperature} />
            </View>
        </View>
    );
};

export default TemperaturaScreen;