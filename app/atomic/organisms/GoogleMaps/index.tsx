import React, { useEffect, useRef } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import {
  DrawingManager,
  GoogleMap,
  Polygon,
  useJsApiLoader,
} from '@react-google-maps/api'
import { IoClose } from 'react-icons/io5'

interface GoogleMapsProps {
  handleOnClose?: () => void
  setPolygonCoordinates?: any
  setDefaultAcreValue?: any
  initialValues?: any
  isEditForm?: boolean
}

const containerStyle = {
  width: '100%',
  height: '458px',
}

export const GoogleMaps = React.memo(
  ({
    handleOnClose,
    setPolygonCoordinates,
    setDefaultAcreValue,
    initialValues,
    isEditForm,
  }: GoogleMapsProps) => {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyBByg2SwV3lVu7EB9N8wIiaI-bespOGFqk',
      libraries: ['drawing'],
    })

    const [map, setMap] = React.useState(null)
    const [hectares, setHectares] = React.useState(0)
    const [isHectares, setIsHectares] = React.useState(false)
    const polygonRef = useRef(null)

    const onPolygonComplete = (polygon) => {
      const path = polygon.getPath().getArray()
      setPolygonCoordinates(path)

      const areaM2 = google.maps.geometry.spherical.computeArea(
        polygon.getPath(),
      )

      if (areaM2 / 10000 <= 1) {
        setHectares(areaM2)
        setIsHectares(false)
      } else {
        setHectares(areaM2 / 10000)
        setIsHectares(true)
      }
      polygonRef.current = polygon
    }

    useEffect(() => {
      setDefaultAcreValue(hectares)
    }, [hectares, setDefaultAcreValue])

    const removePointFromPolygon = () => {
      if (polygonRef.current) {
        const path = polygonRef.current.getPath()
        const newPath = path.getArray().slice(0, -1) // Remove o último ponto
        path.clear() // Limpa o caminho atual
        newPath.forEach((point) => path.push(point)) // Adiciona os pontos atualizados de volta ao caminho
      }
      setHectares(0)
    }

    useEffect(() => {
      if (map) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (
              isEditForm &&
              JSON.parse(initialValues?.cordinates)?.[0]
            ) {
              map.setCenter({
                lat: JSON.parse(initialValues?.cordinates)?.[0]?.lat,
                lng: JSON.parse(initialValues?.cordinates)?.[0]?.lng,
              })
            } else {
              map.setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              })
            }
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
      <>
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
          <Flex
            position="absolute"
            top="5px"
            left="46%"
            bg="white"
            borderRadius={3}
            pl="2px"
            h={6}
            w={6}
          >
            <button onClick={removePointFromPolygon}>
              <IoClose size={18} />
            </button>
          </Flex>
          <DrawingManager
            onPolygonComplete={onPolygonComplete}
            options={{
              drawingControl: true,
              drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['polygon'],
              },
              polygonOptions: {
                editable: true,
                strokeColor: '#FFFFFF',
              },
            }}
          />
          {isEditForm &&
            JSON.parse(initialValues?.cordinates)?.length > 0 && (
              <Polygon
                paths={JSON.parse(initialValues?.cordinates)}
                options={{
                  fillColor: 'black',
                  fillOpacity: 0.5,
                  strokeColor: 'white',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                }}
              />
            )}
          <Flex
            position="absolute"
            top="1%"
            left="55%"
            bg="white"
            pl={1}
            pr={1}
            borderRadius={3}
          >
            {hectares != 0 && (
              <Text>
                {`${isHectares
                    ? hectares?.toFixed(1) + ' Hectares'
                    : hectares?.toFixed(0) + ' M²'
                  }`}
              </Text>
            )}
          </Flex>
        </GoogleMap>
      </>
    ) : (
      <></>
    )
  },
)
