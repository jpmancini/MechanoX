import React from 'react';
import MapView from 'react-native-maps';

function Map() {
    return(
        <MapView
            style={{ width: 400, height: 300}}
            initialRegion={{
                latitude: 38.9072,
                longitude: -77.0369,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        />
    );
}

export default Map;