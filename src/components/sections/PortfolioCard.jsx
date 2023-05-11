import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react'
    
  function PortfolioCard({ title, imageURL, tags }) {
    return (
      <Flex  alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
  
          <Image
            src={imageURL}
            alt={`Screenshot of ${title}`}
            roundedTop="lg"
          />
  
          <Box p="6">
          {/* <Stack direction='row'>

          {tags.map((tag, index) => (
              <Badge variant='solid' colorScheme='green'>{ tag.index}</Badge>
          ))}

          </Stack> */}
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {title}
              </Box>
              
            </Flex>
  
            
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default PortfolioCard;