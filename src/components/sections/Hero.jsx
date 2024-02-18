import React from "react"
import PropTypes from "prop-types"
import { AspectRatio, useColorModeValue, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react"


export function Hero({ title, subtitle, image, ctaLink, ctaText, ...rest }) {

  const color = useColorModeValue('myTheme.dark.light', 'myTheme.bg')


  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={4}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "50%" }}
        align={["top", "top", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color={ color }
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        
        <Text
          fontSize="xl"
          mt={2}
          textAlign="left"
          color={ color }
          opacity="0.6"
          >
          {subtitle}
        </Text>
      </Stack>
      <AspectRatio ratio={ 3 / 4 } w={{ base: "80%", sm: "60%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <Image src={require ('../../assets/unnamed.png')} size="100%" rounded="1rem" fit="cover" shadow="2xl" />
      </AspectRatio>
    </Flex>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

Hero.defaultProps = {
  title: "I'm David Lee.",
  subtitle:
    "This is my portfolio. Feel free to look around, and download my CV if you like.",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
}