import React from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, View, Share } from 'react-native';
import base64 from 'react-native-base64'
import InfoCard from '../../components/InfoCard';
import MapView, { Marker } from 'react-native-maps';
import Title from '../../components/Title';
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;

    // Thời gian open và close (lấy từ data)
    const getOpeningHours = `OPEN
${item?.opening_time} - ${item?.closing_time}`;

    // vị trí và độ zoom của map 
    const coords = {
        latitude: item?.coordinates?.lat, // lấy từ data
        longitude: item?.coordinates?.lon, // lấy từ data
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const onShare = async () => {
        try {

            const base64Image = await base64.encode(mainImage);

            const result = await Share.share({
                title: item?.name,
                message:
                    'Hey, I wanted to share with you this amazing attraction',
                url: `data:image/jpg;base64,${base64Image}`
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (e) {
            console.log('Sharing error: >>', e);
        }
    };

    // Trở về trang Home
    const onBack = () => {
        navigation.goBack();
    };

    // Chuyển sang trang hình ảnh
    const onGalleryNavigate = () => {
        navigation.navigate('Gallery', { images: item?.images });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    style={styles.mainImage}
                    imageStyle={{ borderRadius: 20 }}
                    source={{ uri: mainImage }}
                >
                    <View style={styles.header}>
                        <Pressable onPress={onBack} hitSlop={8}>
                            <Image style={styles.icon} source={require('../../assets/back.png')} />
                        </Pressable>
                        <Pressable onPress={onShare} hitSlop={8}>
                            <Image style={styles.icon} source={require('../../assets/share.png')} />
                        </Pressable>
                    </View>

                    <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                        {slicedImages?.map((image, index) => (
                            <View key={image}>
                                <Image source={{ uri: image }} style={styles.miniImage} />
                                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                                    <View style={styles.moreImagesContainer}>
                                        <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                    </View>
                                ) : null}
                            </View>
                        ))}
                    </Pressable>
                </ImageBackground>

                <View style={styles.headerContainer}>
                    <View style={{ maxWidth: '70%' }}>
                        <Title style={styles.title} text={item?.name} />
                        <Text style={styles.city}>{item?.city}</Text>
                    </View>
                    <Title style={styles.title} text={item?.entry_price} />
                </View>

                <InfoCard text={item?.address} icon={require('../../assets/location_circle.png')} />
                <InfoCard
                    text={getOpeningHours}
                    icon={require('../../assets/schedule.png')}
                />
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                    <MapView
                        style={styles.map}
                        initialRegion={coords}
                    >
                        <Marker
                            coordinate={coords}
                            title={item?.name}
                        />
                    </MapView>
                </View>
                <Text style={styles.mapText} onPress={() => navigation.navigate('Map', { item })}>Show full screen map</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);