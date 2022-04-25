import {
  Box,
  Flex, Heading, Icon, Popover, PopoverArrow,
  PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, Text
} from "@chakra-ui/react";
import {PopoverTrigger} from '@chakra-ui/popover'

import { ContinentProps } from '../../pages/continent/[slug]'

import { RiInformationLine } from "react-icons/ri";

export default function Infos({ continent }: ContinentProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {continent.countries}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {continent.languages}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {continent.cities}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cidades +100

          <Popover>
            <PopoverTrigger>
              <Box cursor="pointer" ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]}>
                <Icon as={RiInformationLine} />
              </Box>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">{continent.cities_list}</PopoverBody>
            </PopoverContent>
          </Popover>

        </Text>
      </Flex>

    </Flex>
  )
}