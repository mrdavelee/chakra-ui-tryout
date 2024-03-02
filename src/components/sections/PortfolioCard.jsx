import { Badge, Card, CardBody, CardFooter, Divider, Image, Heading, useColorModeValue, Stack } from '@chakra-ui/react'


function PortfolioCard({ title, imageURL, tags }) {
  
  const color = useColorModeValue('myTheme.dark.light', 'myTheme.bg')

  let tagList = []

  tags.forEach((tag, i) => {
    tagList.push(<Badge mr={2} fontSize='0.8em' py={0.5} px={1} variant='solid' key={i} colorScheme={ tagColor(tag) } >{ tag }</Badge>)
  })

    return (

        <Card >
          <Image
            src={ imageURL }
            alt={`Screenshot of ${title}`}
            roundedTop="lg"

          />
          <CardBody pt={2}>
            
            <Stack>
              <Heading as='h3' pt={2} color={ color } size='md'>{title}</Heading>

            </Stack>

          </CardBody>

          <Divider />
          <CardFooter>
              { tagList }
          </CardFooter>

          </Card>
        
    );
  }

  function tagColor(tag) {

    switch (tag.toLowerCase()) {
      case 'css':
        return 'blue'
      case 'html':
        return 'yellow'
      case 'react':
        return 'green'
      case 'javascript':
        return 'purple'        
      case 'jquery':
        return 'blue'
      default:
        break;
    }
  }
  
  export default PortfolioCard;