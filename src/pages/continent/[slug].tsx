import { Flex } from "@chakra-ui/react";
import Cities from "../../components/Cities";
import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import  { RichText }  from 'prismic-dom';
import { getPrismicClient } from "../../service/prismic";
import Prismic from '@prismicio/client';

export interface ContinentProps {
    continent: {
      slug: string;
      title: string;
      description: string;
      banner_image: string;
      countries: number;
      languages: number;
      cities: number;
      cities_list: string;
      cities100: {
        city: string;
        country: string;
        thumbnail: string;
        flag: string;
      }[]
    }
  }

export default function Continent({continent}: ContinentProps) {
    return (
        <Flex direction="column">
            <Header />
            <ContinentBanner continent={continent} />

            <Flex
                direction="column"
                maxW='1160px'
                mx='auto'
                mb='10'
                px='1rem'
            >
                <Content continent={continent} />
                <Cities continent={continent} />
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient();
    const continents = await prismic.query([
      Prismic.Predicates.at('document.type', 'continent-id'),
    ]);
  
    const paths = continents.results.map(continent => {
      return {
        params: {
          slug: continent.uid,
        },
      };
    });
  
    return {
      paths,
      fallback: true,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({params}) => {
    const prismic = getPrismicClient();
    const { slug } = params;
    const response = await prismic.getByUID('continent-id', String(slug), {});
  
    const continent = {
      slug:response.uid,
      title: response.data.title,
      description: RichText.asText(response.data.description),
      banner_image: response.data.bannerImage.url,
      countries: response.data.countries,
      languages: response.data.languages,
      cities: response.data.cities,
      cities_list: response.data.citiesList,
      cities100: response.data.cities100.map(city => {
        return {
          city: city.city,
          country: city.country,
          thumbnail: city.thumbnail.url,
          flag:city.flag.url,
        }
      })
    };
  
    return {
      props: {
        continent
      }
    }
  }