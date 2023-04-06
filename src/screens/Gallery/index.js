import React from "react";
import { SafeAreaView, FlatList, Image,TouchableOpacity, View } from "react-native";
import styles from './styles';



const Gallery = ({ navigation, route }) => {
    const { images } = route?.params || {};
    
    const onBack = () =>{
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <FlatList
                    style={{ marginBottom: 24, paddingHorizontal: 24 }}
                    data={images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={styles.image} />
                    )}
                />
                <TouchableOpacity onPress={onBack} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../assets/back.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Gallery);