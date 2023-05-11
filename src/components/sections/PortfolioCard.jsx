import { Flex, Box, Image, useColorModeValue } from '@chakra-ui/react'
    
  function PortfolioCard({ title, imageURL }) {
    return (
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
  
          <Image
            src={imageURL}
            alt={`Picture of ${title}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            
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