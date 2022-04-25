import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import Separador from "../components/Separador";
import Slider from "../components/Slider";
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from "../service/prismic";

export interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home( {continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Separador />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg",
          "3xl",
          "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>
      <Slider continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent-id')]
  )

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.sliderImage.url,
    }
  })
  return {
    props: {
      continents
    }
  }
}
