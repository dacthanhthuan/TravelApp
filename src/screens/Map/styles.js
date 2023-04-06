import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        top: 40,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        width: width - 48,
        padding: 16,
        margin: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
    },
    back: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
});
export default styles;