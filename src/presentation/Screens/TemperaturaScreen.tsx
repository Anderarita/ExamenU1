import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { styles } from '../../config/themeTemperatura';
import { useTemperatura } from '../hooks/useTemperatura';

const TemperaturaScreen = () => {
    
    const { temperature, increaseTemperature, decreaseTemperature, getTemperatureColor } = useTemperatura();

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