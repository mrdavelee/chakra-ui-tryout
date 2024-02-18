import { Card, CardBody, Flex, Image, Heading, useColorModeValue } from '@chakra-ui/react'


function PortfolioCard({ title, imageURL, tags }) {
  
  const color = useColorModeValue('myTheme.dark.light', 'myTheme.bg')

    return (
      <Flex  alignItems="center" justifyContent="center">

        <Card>
          <Image
            src={ imageURL }
            alt={`Screenshot of ${title}`}
            roundedTop="lg"
          />
          <CardBody>

            <Heading color={ color } size='md'>{title}</Heading>

          </CardBody>

          </Card>
        
      </Flex>
    );
  }
  
  export default PortfolioCard;