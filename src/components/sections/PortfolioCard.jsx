import { Card, CardBody, Flex, Image, Heading } from '@chakra-ui/react'
    
  function PortfolioCard({ title, imageURL, tags }) {
    return (
      <Flex  alignItems="center" justifyContent="center">

        <Card>
          <Image
            src={imageURL}
            alt={`Screenshot of ${title}`}
            roundedTop="lg"
          />
          <CardBody>

            <Heading size='md'>{title}</Heading>

          </CardBody>

          </Card>
        
      </Flex>
    );
  }
  
  export default PortfolioCard;