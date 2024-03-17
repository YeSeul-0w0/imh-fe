/*global kakao */
import React, {useEffect, useRef, useState} from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Fade,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Spacer,
    useToast
} from "@chakra-ui/react";
import {mergeEventStores, triggerDateSelect} from "@fullcalendar/core/internal";
import PropTypes from "prop-types";

function Cafe({backStep, nextStep}) {
    const [cafeName, setCafeName] = useState("")
    const handleCafeName = (event) => {
        setCafeName(event.target.value)
    }

    const [address, setAddress] = useState("")
    const handleAddress = (event) => {
        setAddress(event.target.value)
    }

    const [checkAddress, setCheckAddress] = useState(false)

    const toast = useToast();
    const toastIdRef = React.useRef();
    const setWarning = (text) => {
        toastIdRef.current = toast({
            description: text,
            status: "error",
        });
    };

    useEffect(()=>{
        const container = document.getElementById("map")
        const options = {
            center: new kakao.maps.LatLng(33.4507, 126.5706),
            level: 3
        };
        const map = new kakao.maps.Map(container, options)
    }, [])

    const handleValid = () => {
        const geocoder = new kakao.maps.services.Geocoder()
        if (address) {
            geocoder.addressSearch(address, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    const container = document.getElementById("map")
                    const options = {
                        center: new kakao.maps.LatLng(coords.La, coords.Ma),
                        level: 3
                    };
                    const map = new kakao.maps.Map(container, options)
                    map.setCenter(coords);
                }
            })
            setCheckAddress(true)
        }
        else{
            setWarning("올바른 주소값을 입력하세요")
            setCheckAddress(false)
        }
    }

    return(
        <Flex alignItems="center">
            <Container width="100%">
                <Box p="4" margin="10" textAlign="center">
                    생일 카페가 이루어지는 장소 정보를 입력하는 페이지 입니다 <br/>
                    카페 이름과 위치를 작성해주세요.
                </Box>
                <Box p="3" marginBottom="3">
                    <FormControl fontWeight="bold">
                        <FormLabel>카페 이름</FormLabel>
                        <Input
                            type="text"
                            placeholder="이름을 입력해주세요."
                            value={cafeName}
                            onChange={handleCafeName}
                        />
                        <FormLabel marginTop="5">카페 주소</FormLabel>
                        <Input
                            type="text"
                            placeholder="주소를 입력해주세요."
                            value={address}
                            onChange={handleAddress}
                        />
                    </FormControl>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Button onClick={handleValid}> 주소 확인 </Button>
                </Box>
                <Box id="map" style={{
                    width:"100%",
                    height:"50vh"
                }} margin="4">
                </Box>
                <Flex marginBottom="3">
                      <Button onClick={backStep}>
                        Back
                      </Button>
                      <Spacer />
                      <Button onClick={nextStep}>
                        Next
                      </Button>
                </Flex>
            </Container>
        </Flex>
    )
}

Cafe.prototype = {
    backStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
}
export default Cafe;