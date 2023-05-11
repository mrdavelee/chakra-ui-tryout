import React from "react"
import { Button, Box, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Link, useDisclosure } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const Overlay = ({ title, mainImg, url, description }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='orange' onClick={onOpen}>
                { title }
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                size='lg'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent opacity='0.8'>
                    <DrawerCloseButton />

                    <DrawerHeader>{ title }</DrawerHeader>

                    <DrawerBody>
                        <Box mb={{ base: 12, md: 0 }}>
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