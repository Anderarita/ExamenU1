import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
            <Text style={[styles.temperature, { color: getTemperatureColor() }]}>
                {temperature}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="+" onPress={increaseTemperature} />
                <Button title="-" onPress={decreaseTemperature} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperature: {
        fontSize: 100,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 36,
        justifyContent: 'space-between', 
        width: '50%',
    },
});

export default TemperaturaScreen;