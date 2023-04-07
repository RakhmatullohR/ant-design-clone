import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapContainer } from './style';

const mapStyle = {
  position: 'relative',
  left: 0,
  top: 0,
  width: '100wh',
  height: '50vh',
  overflow: 'hidden'
};

export default ({ data }) => {
  const [template, setTemplate] = useState({});

  const createTemplateLayoutFactory = (ymaps) => {
    setTemplate({
      iconTemplate: ymaps.templateLayoutFactory.createClass(
        '<div class="map-custom-marker">'
        + '<img src="$[properties.iconContent]" alt="">'
        + '<div class="online-status"></div>'
        + '</div>'
      ),
      balloonTemplate: ymaps.templateLayoutFactory.createClass(
        '<div class="placemark-popover">'
        + '<div class="placemark-popover-header">$[properties.balloonContentHeader]</div>'
        + '<ul class="placemark-props">'
        + '{% for key, value in properties.hash %}'
        + '<li class="placemark-prop-item">'
        + '<span class="placemark-prop-icon {{ key }}"></span> {{ value }}</li>'
        + '{% endfor %}'
        + '</ul>'
        + '</div>'
      )
    });
  };

  return (
    <MapContainer>
      <YMaps
        enterprise
        query={{ apikey: 'afbb60c1-0761-48a5-b821-b566bf220d8b' }}
      >
        <Map
          onLoad={((ymaps) => createTemplateLayoutFactory(ymaps))}
          defaultState={{ center: [41.2775, 69.2331], zoom: 13 }}
          style={mapStyle}
          modules={['templateLayoutFactory', 'layout.ImageWithContent']}
        >
          {
            data.length > 0
            && data.map((placemark) => (
              <Placemark
                key={placemark.id}
                geometry={[placemark.position.lat, placemark.position.lng]}
                properties={{
                  hash: { ...placemark.content },
                  balloonContentHeader: placemark.name,
                  // iconContent: placemark.icon.url
                }}
                options={{
                  hideIconOnBalloonOpen: false,
                  iconImageHref: '',
                  iconImageSize: [54, 54],
                  iconImageOffset: [-30, 0],
                  iconLayout: 'default#imageWithContent',
                  iconContentLayout: template.iconTemplate,
                  balloonContentLayout: template.balloonTemplate
                }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              />
            ))
          }
        </Map>
      </YMaps>
    </MapContainer>
  );
};
