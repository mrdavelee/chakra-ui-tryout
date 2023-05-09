import React from "react"
import { Flex, Tab, TabList, TabPanels, TabPanel, Tabs } from "@chakra-ui/react"
import { TextSection } from "./TextSection"


export const TabArea = ({...rest}) => {
    return (
        <Flex
            px={8}
            mb={16}
            {...rest}
            >
            <Tabs align="left" variant='soft-rounded' colorScheme='orange' >
                <TabList>
                    <Tab>My Profile</Tab>
                    <Tab>My projects</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <TextSection
                            title="About me"
                            textMain="I enjoy cycling, reading and woodworking."
                        />
                    </TabPanel>

                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}