import React from 'react'
import '../style/home.css'
import { FaLocationArrow, FaTimes, FaBars} from 'react-icons/fa'
import {
useJsApiLoader,
GoogleMap,
Autocomplete,
DirectionsRenderer,
MarkerF,
  } from '@react-google-maps/api'
import { useRef, useState , useEffect } from 'react'
import homeIcon  from '../images/home.png'
import { useSelector, useDispatch } from 'react-redux'
import { open } from '../rtk/slice/sidebarSlice'
  

const Home = () => {
     
     const active = useSelector((state) => state.sidebar.active)
     const dispatch = useDispatch()
     const [ libraries ] = useState(['places']);


    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAC5A-3Jg49AUAmZl1zwUYEy-g5-XQQ9tY',
        libraries
        //libraries: ['places'],
      })

      const [map, setMap] = useState(/** @type google.maps.Map */ (null))
      const [directionsResponse, setDirectionsResponse] = useState(null)
      const [distance, setDistance] = useState('0')
      const [duration, setDuration] = useState('0') 
      const [center, setCenter] = useState({
        lat: 41.311081,
        lng: 69.240562   
      }) 
    
      /** @type React.MutableRefObject<HTMLInputElement> */
      const originRef = useRef()
      /** @type React.MutableRefObject<HTMLInputElement> */
      const destiantionRef = useRef()

      useEffect(()=>{
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(function(position) {
            setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          });
        } else {
          setCenter({
            lat: 41.311081,
            lng: 69.240562   
          })
        }
       },[center])
    
      if (!isLoaded) {
        return <div>Loading...</div>
      }

     

      async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination:destiantionRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results) 
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
        
         console.log(originRef.current.value);
        //start_location
      }
      
       //Toshkent politexnika kasb-hunar kolleji, Amir Temur Avenue, Tashkent, Uzbekistan
      
    
      function clearRoute() {
        setDirectionsResponse(null)
        setDistance('0')
        setDuration('0')
        originRef.current.value = ''
        destiantionRef.current.value = '' 
      }


  return (
   <>
    <div className="home-container">
        <div className="home-google-box">
        <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: '100%', height: '100%' }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={map => setMap(map)}
            >
              <MarkerF 
                position={center}
                icon={homeIcon}
                
               />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
        </GoogleMap>
        </div>
        <div className="home-top-box">
            <div className="top-inputs">
                <div  onClick={() => dispatch(open())} className="bars"> <FaBars/> </div>
                <Autocomplete className='input'>
                 <input type="text" placeholder='Manzilingizni kiriting' ref={originRef} />
                </Autocomplete> 
                 <input className='hidden-input' type="text" placeholder='Manzilingizni kiriting' value={'Toshkent politexnika kasb-hunar kolleji, Amir Temur Avenue, Tashkent, Uzbekistan'} ref={destiantionRef} /> 
                <div onClick={clearRoute} className="top-clear">
                    <FaTimes/>
                </div>
            </div>
        </div>
        <div onClick={() => {
                  //window.location.reload()
                  map.panTo(center)
                  map.setZoom(15)
                }} className="home-center-arrow">
            <FaLocationArrow/>
        </div>
        <div className="home-bottom-box">
            <div className="order-data">
              <p>Masofa: {distance} </p>
              <p>Yetib kelish: {duration} </p>
            </div>
            <div onClick={calculateRoute} className="order-btn">
                Chaqiruv
            </div>
        </div>
    </div>
    
    
        {/* <Flex
          position='relative'
          flexDirection='column'
          alignItems='center'
          h='100vh'
          w='100%'
        >
          
          <Box
            p={4}
            borderRadius='lg'
            m={4}
            bgColor='white'
            shadow='base'
            w={'100% - 20px'}
            position="relative"
            marginTop={'80vh'}
            zIndex='1'
          >
            <HStack spacing={2} justifyContent='space-between'>
              <Box flexGrow={1}>
                <Autocomplete>
                  <Input type='text' placeholder='Origin' ref={originRef} />
                </Autocomplete>
              </Box>
              <Box flexGrow={1}>
                <Autocomplete>
                  <Input
                    type='text'
                    placeholder='Destination'
                    ref={destiantionRef}
                  />
                </Autocomplete>
              </Box>
    
              <ButtonGroup>
                <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                  Calculate Route
                </Button>
                <IconButton
                  aria-label='center back'
                  icon={<FaTimes />}
                  onClick={clearRoute}
                />
              </ButtonGroup>
            </HStack>
            <HStack spacing={4} mt={4} justifyContent='space-between'>
              <Text>Distance: {distance} </Text>
              <Text>Duration: {duration} </Text>
              <IconButton
                aria-label='center back'
                icon={<FaLocationArrow />}
                isRound
                onClick={() => {
                  map.panTo(center)
                  map.setZoom(15)
                }}
              />
            </HStack>
          </Box>
        </Flex> */}
   </>
  )
}

export default Home


