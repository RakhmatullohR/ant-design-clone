import React, { useState, useEffect, useMemo } from 'react'
import { Map, Marker, GoogleApiWrapper, Polyline, Polygon, InfoWindow, Circle } from 'google-maps-react';
import { Container } from './style'

const containerStyle = {
  position: 'relative',
  width: '100wh',
  height: '50vh'
};

const GoogleMapContainer = ({ google, data, LocationDetails, polyline, polygon, radiusHighliter }) => {

  const triangleCoords = useMemo(() => {
    let list = [];
    data.map((item) => (
      list.push(item.position)
    )
    )
    list.push(data[0].position)
    return list

  }, [data])

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [googleData, setGoogleData] = useState([])

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      setGoogleData(data)
    }
    return () => {
      mounted = true;
    };
  }, [data])
  const onMarkerClick = (props, marker) => {
    setSelectedPlace(props.place_);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };
  const onCloseInfoWindow = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };


  return (
    <Map
      google={google}
      containerStyle={containerStyle}
      zoom={13}
      center={{
        lat: 41.2935, lng: 69.2401
      }}
      initialCenter={{
        lat: 41.2935, lng: 69.2401
      }}
    >
      {
        radiusHighliter &&
        <Circle
          radius={radiusHighliter || 3000}
          center={{
            lat: 41.2935, lng: 69.2401
          }}
          // onMouseover={() => console.log('mouseover')}
          // onClick={() => console.log('click')}
          // onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
        />
      }
      {
        polygon &&
        <Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={1}
          fillColor="#0000FF"
          fillOpacity={0.2} />
      }
      {
        polyline &&
        <Polyline
          path={triangleCoords}
          strokeColor="red"
          strokeOpacity={0.4}
          strokeWeight={1} />
      }
      {
        googleData && googleData.length && googleData.map((item, i) => {
          return (
            <Marker
              key={item.id}
              title={item.title}
              place_={item}
              onClick={onMarkerClick}
              position={item.position}
            // content={(<div>test</div>)}
            // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'
            // icon={{
            //   url: item.icon.url,
            //   anchor: new google.maps.Point(56, 56),
            //   scaledSize: new google.maps.Size(56, 56)
            // }}
            />
          )
        })
      }
      <InfoWindow
        onClose={onCloseInfoWindow}
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        {
          LocationDetails ||
          <div>
            <h2>{selectedPlace.name}</h2>
            <h4>{selectedPlace.title}</h4>
          </div>
        }
      </InfoWindow>
    </Map >
  )
}

const GoogleMapWrapper = GoogleApiWrapper(() => ({
  // put your api key
  // apiKey: 'AIzaSyBg33f-iEoZaA1wEVVqKiPquhdWacg3Dh0',
  // LoadingContainer: LoadingContainer
}))(GoogleMapContainer)

export default ({ data, polygon, polyline, radiusHighliter, LocationDetails }) => {
  return (
    <Container>
      <GoogleMapWrapper data={data} polygon={polygon} polyline={polyline} radiusHighliter={radiusHighliter} LocationDetails={LocationDetails} />
    </Container>
  )
}


