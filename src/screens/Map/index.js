import React from "react";
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const Map = ({ navigation, route }) => {
    const { item } = route?.params || {};

    const coords = {
        latitude: item?.coordinates?.lat, // lấy từ data
        longitude: item?.coordinates?.lon, // lấy từ data
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <MapView style={styles.map} initialRegion={coords}>
                <Marker coordinate={coords} title={item?.name} />
            </MapView >

            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <Image style={styles.back} source={require('../../assets/back.png')} />
                </TouchableOpacity>

                <Text style={styles.title}>{`${item?.name}, ${item?.city}`}</Text>
            </View>

        </View>
    );
};

export default React.memo(Map);