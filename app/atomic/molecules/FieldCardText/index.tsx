import React, { useEffect } from 'react'

import { Text } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import {
  GoogleMap,
  Polygon,
  useJsApiLoader,
} from '@react-google-maps/api'

interface FieldCardTextProps {
  title?: string
  acre?: string
  fieldImage: any
  cordinates?: any
  imagePath: string
}

const containerStyle = {
  width: '100%',
  height: '300px',
}

export const FieldCardText = React.memo(
  ({ title, acre, cordinates }: FieldCardTextProps) => {
    const [map, setMap] = React.useState(null)
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyBByg2SwV3lVu7EB9N8wIiaI-bespOGFqk',
      libraries: ['drawing'],
    })

    useEffect(() => {
      if (map) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            map.setCenter({
              lat: JSON.parse(cordinates)?.[0]?.lat,
              lng: JSON.parse(cordinates)?.[0]?.lng,
            })
          },
          (e) => {
            console.log('error to get location', e)
          },
          { enableHighAccuracy: true },
        )
        map.setMapTypeId('satellite')
      }
    }, [map])

    const onLoad = React.useCallback(function callback(map) {
      setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
    return isLoaded ? (
      <Flex
        flexDirection="column"
        w="100%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={map}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            mapTypeControl: false,
            disableDefaultUI: true,
          }}
        >
          {JSON.parse(cordinates)?.length > 0 && (
            <Polygon
              paths={JSON.parse(cordinates)}
              options={{
                fillColor: 'black',
                fillOpacity: 0.5,
                strokeColor: 'white',
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          )}
        </GoogleMap>
        <Box w="100%" marginTop="10px">
          <Text fontSize="md" align="center" color="white">
            <b>Nome:</b> {title}
          </Text>
        </Box>
        <Box w="100%">
          <Text fontSize="md" align="center" color="white">
            <b> Hectares:</b> {acre}
          </Text>
        </Box>
      </Flex>
    ) : (
      <></>
    )
  },
)
