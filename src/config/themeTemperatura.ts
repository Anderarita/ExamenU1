import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    temperature: {
        fontSize: 100,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 50,
        margin: 100,
        justifyContent: 'space-between', 
        width: '50%',
        
    },
    buttontext:{
        fontSize: 20,
    }
});