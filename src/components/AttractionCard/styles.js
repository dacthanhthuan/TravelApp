import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    card: {
        padding: 4,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 15,
        marginBottom: 12,
    },
    image: {
        width: (width - 96) / 2,
        height: 100,
        borderRadius: 15,
    }, title: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000000',
        marginTop: 12,
        marginLeft: 6,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '300',
        color: 'rgba(0,0,0,0.5)',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginLeft: 6,
        marginTop: 4,
    },
    icon: {
        width: 10,
        height: 10,
        marginRight: 6,
    }
})

export default styles;