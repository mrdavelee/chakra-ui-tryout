import React from "react"
import { Box, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Link, useDisclosure } from "@chakra-ui/react"
import PortfolioCard from './PortfolioCard'
import { ExternalLinkIcon } from '@chakra-ui/icons'


export const Overlay = ({ title, mainImg, url, description }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Link onClick={onOpen}>
                <PortfolioCard title={ title } imageURL={ mainImg } onClick={ onOpen }/>
            </Link>
            
            <Drawer
                isOpen={isOpen}
                placement='right'
                size='lg'
                onClose={onClose}
                finalFocusRef={btnRef}
                
                
            >
                <DrawerOverlay />
                <DrawerContent colorScheme="telegram">
                    <DrawerCloseButton />

                    <DrawerHeader>{ title }</DrawerHeader>

                    <DrawerBody >
                        <Box mb={10}>
                            <Image src={ mainImg } alt={ title + ' screenshot'} size="100%" rounded="1rem" shadow="2xl" />
                        </Box>
                        <Box>
                            { description }
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Link target='_blank' variant='outline' mr={3} href={ url }>
                        Open in a new tab <ExternalLinkIcon/>
                        </Link>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}