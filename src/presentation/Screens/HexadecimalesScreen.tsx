import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { styles } from '../../config/app-theme';

function HexadecimalesScreen() {
    const [color, setColor] = useState('');

    function generateRandomHexColor() {
        const caracteres = '0123456789ABCDEF';
        let nuevocolor = '#';
        for (let i = 0; i < 6; i++) {
            nuevocolor += caracteres[Math.floor(Math.random() * 16)];
        }
        setColor(nuevocolor);
    }

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Button title="Generar Color" onPress={generateRandomHexColor} />
        </View>
    );
}


export default HexadecimalesScreen;
