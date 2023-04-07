import React, { useState, useMemo } from 'react'
import GoogleMapReact from 'google-map-react';
import { Container, Wrapper, Popup, ArrowDown, MarkerIcon, CloseInfo, InfoBody } from './style'



export default ({ data, polygon, polyline, radius }) => {
  const [markerDetails, setMarkerDetails] = useState({})
  const MarkerLabel = ({ onClick, id }) => (
    <Wrapper open={markerDetails.id === id}>
      <MarkerIcon onClick={onClick} size={40} color={markerDetails.id === id ? "blue" : 'red'} />
      <Popup open={markerDetails.id === id} >
        <CloseInfo size={22} onClick={() => setMarkerDetails({})} />
        <InfoBody>
          <h1>Your Info Design</h1>
        </InfoBody>
        <ArrowDown />
      </Popup>
    </Wrapper>
  )
  const coords = useMemo(() => {
    let list = [];
    data.map((item) => (
      list.push(item.position)
    )
    )
    list.push(data[0].position)
    return list

  }, [data])


  const renderPolylines = (map, maps) => {
    if (polyline) {
      let geodesicPolyline = new maps.Polyline({
        geodesic: false,
        strokeColor: 'red',
        strokeOpacity: 0.7,
        strokeWeight: 3,
        path: coords,
        // ...
      })
      geodesicPolyline.setMap(map)
    }
    if (polygon) {
      let geodesicPolygon = new maps.Polygon({
        geodesic: false,
        strokeColor: 'blue',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        path: coords,
        // ...
      })
      geodesicPolygon.setMap(map)
    }
    if (radius) {
      new maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.3,
        map,
        center: {
          lat: 41.2935, lng: 69.2401
        },
        radius: radius || 2000,
      })
    }
  }

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBg33f-iEoZaA1wEVVqKiPquhdWacg3Dh0',
          language: 'en'
        }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={{ lat: 41.2935, lng: 69.2401 }}
        defaultZoom={13}
        onGoogleApiLoaded={({ map, maps }) => renderPolylines(map, maps)}
      >

        {
          data && data.length && data.map((item, i) => (
            <MarkerLabel
              key={item.id}
              id={item.id}
              title={item.name}
              lat={item.position.lat}
              lng={item.position.lng}
              text={item.name}
              onClick={() => { setMarkerDetails(item) }}
            />
          ))
        }
      </GoogleMapReact>
    </Container >
  )
}
