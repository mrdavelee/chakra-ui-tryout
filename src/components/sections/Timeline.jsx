import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react"

import "../../styles/style.css"

export const Timeline = () => {

    const steps = [
        { title: 'Proagrica', dates: 'June 2018 - April 2023', description: 'I meet with Project Managers regularly to discuss requirements for the products being developed, to provide time estimates and technology suggestions. I provide continuous communication to meet tight deadlines. I am responsible for ensuring that new site designs are converted to pixel-perfect websites for our clients. I am also an advocate for using new technologies to speed up the development process, such as task runners, ES6 and SASS/SCSS and I have more recently started using React for personal projects.' },
        { title: 'Abacus e-Media', dates: 'November 2015 - June 2018', description: 'As a Frontend Web Developer, I took responsibility for new clients on their Cloud platform, using detailed style guides in Adobe applications and creating or adapting complex, responsive HTML layouts. I worked with backend developers to ensure that new features or modifications are well build and if necessary. I was also responsible for providing support for any frontend issues and give advice regarding the implementation of features for existing clients. I built email templates for clients who wish to use email marketing software and integrate the templates into the software.' },
        { title: 'Brilens', dates: 'August 2013 - November 2015', description: 'I was responsible for the maintenance of a Magento e-commerce system utilising several storefronts. Using my skills as web developer I ensured that all content is up-to-date and correct. My role also included building new websites for clients alongside a team of graphic designers to produce striking sites which draw customers in, while maintaining the brand identity of both the client and the company.' },
      ]

    return (
        <div class="timeline">
            <div class="outer">
                
                {steps.map((step) => (
                    <div className='card'>
                        <Box className='info' flexShrink='0'>
                            <Heading as='h3' mb='5' size='lg' className='title'>{ step.title }</Heading>
                            <Text>{ step.dates }</Text>
                            <Text>{ step.description }</Text>
                        </Box>
                    </div>
                ))}
            </div>
        </div>

    )

}
