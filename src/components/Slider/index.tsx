import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, A11y]);

interface SliderProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Slider() {
  return (
    <Flex w="100%" maxW="1240px" mx="auto" mb={["5","10"]} h={['250px', '450px']}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay:2000,
        }}
        style={{width: '100%', flex: '1'}}
      > 

        
          <SwiperSlide >
                <Flex
                  w="100%"
                  h="100%"
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage={`url('/europe.png')`}
                  bgPosition="100% 30%"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  textAlign="center"
                >
                  <Link href={`/continent`}>
                    <a>
                      <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                      <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>O Continente mais antigo</Text>
                    </a>
                  </Link>
                </Flex>
          </SwiperSlide>

      </Swiper>    
    </Flex>
  )
}