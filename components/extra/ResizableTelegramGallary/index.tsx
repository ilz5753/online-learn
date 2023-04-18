import React, { useState } from 'react';
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import { GalleryViewProps } from './type';

const GalleryView = ({ assets: images }: GalleryViewProps) => {
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    let screenSize = useWindowDimensions()
    const aspectRatio = imageSize.width / imageSize.height;
    const itemWidth = screenSize.width;
    const itemHeight = itemWidth / aspectRatio;
    return (
        <View style={styles.container}>
            {images.map((uri, index) => (
                <Image
                    key={index}
                    source={{ uri }}
                    style={{ width: itemWidth, height: itemHeight }}
                    resizeMode="contain"
                    onLoad={({ nativeEvent: { source: { width, height } } }) => setImageSize({ width, height })}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
});

export default GalleryView;
