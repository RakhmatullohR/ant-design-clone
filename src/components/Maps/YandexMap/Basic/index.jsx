import React, { useMemo } from 'react';
import { YMaps, Map, Placemark, Circle, SearchControl, FullscreenControl, TypeSelector, GeolocationControl, RouteButton, Polyline, Polygon } from 'react-yandex-maps';
import { MapContainer } from './style';

const mapStyle = {
  position: 'relative',
  left: 0,
  top: 0,
  width: '100wh',
  height: '50vh',
  overflow: 'hidden'
};

export default ({ data, polyline, polygon, radius, center }) => {
  const coords = useMemo(() => {
    let list = [];
    data.map((item) => (
      list.push([item.position.lat, item.position.lng])
    )
    )
    list.push([data[0].position.lat, data[0].position.lng])
    return list

  }, [data])
  return (
    <MapContainer>
      <YMaps
        enterprise
        query={{ apikey: 'afbb60c1-0761-48a5-b821-b566bf220d8b', lang: "EN" }}
      >
        <Map
          // onLoad={((ymaps) => createTemplateLayoutFactory(ymaps))}
          defaultState={{ center: center || [41.2935, 69.2401], zoom: 13 }}
          style={mapStyle}
          modules={['templateLayoutFactory', 'layout.ImageWithContent']}
        >
          <FullscreenControl />
          <RouteButton options={{ float: 'right' }} />
          <TypeSelector options={{ float: 'right' }} />
          <SearchControl options={{ float: 'left' }} />
          <GeolocationControl options={{ float: 'left' }} />
          {
            radius && <Circle
              geometry={[[41.2935, 69.2401], radius || 3000]}
              options={{
                draggable: true,
                fillColor: '#DB709377',
                strokeColor: '#990066',
                strokeOpacity: 0.8,
                strokeWidth: 2,
              }}
            />}
          {polyline && <Polyline
            geometry={coords}
            options={{
              balloonCloseButton: false,
              strokeColor: '#000',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
          />
          }
          {polygon && <Polygon
            geometry={[coords]}
            options={{
              fillColor: '#00FF00',
              strokeColor: '#0000FF',
              opacity: 0.5,
              strokeWidth: 2,
              strokeStyle: 'shortdash',
            }}
          />}
          {
            data.length > 0
            && data.map((placemark, i) => (
              <Placemark key={`${i}+1`} geometry={[placemark.position.lat, placemark.position.lng]} />
            ))
          }
        </Map>
      </YMaps>
    </MapContainer>
  );
};
