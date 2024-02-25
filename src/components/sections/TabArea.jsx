import React from "react"
import { Overlay } from './Overlay'

import { SimpleGrid, Tab, TabList, TabPanels, TabPanel, Tabs } from "@chakra-ui/react"


export const TabArea = ({...rest}) => {
    return (
        
            <Tabs align="center" colorScheme='pink' >
                <TabList py={{sm: 4, md:8}}>
                    <Tab>Work</Tab>
                    <Tab>Personal</Tab>
                    <Tab>Me</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing='20px' pt="20px">
                
                            <Overlay 
                                colorScheme='telegram'
                                title='Itchy Pet Awareness' 
                                mainImg={require ('../../assets/portImgs/itchy.png') } 
                                url='https://www.itchypetawarenessmonth.com/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='This site was built to advertise Itchy Pet Awareness Month 
                                to the US veterinarian clinics. It is intended to provide clinics with
                                both online and offline assets to raise awareness to the public about the 
                                various reasons their dogs may be itching. The client wanted various bespoke 
                                elements, all of which were built using HTML, CSS and JavaScript form the 
                                ground up. With so many elements in close proximity it was vital to maintain
                                a mobile-first approach.'
                            />
                            <Overlay 
                                title='Building' 
                                mainImg={require ('../../assets/portImgs/building.png') } 
                                url='https://www.building.co.uk/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='Building was one of the first sites to go live on the new
                                Webvision Cloud SAAS service. Having tested the service entirely with our own 
                                branding it was refreshing to note the difference a new brand could make, as 
                                well as the comparitive speed at which we could deploy a new site.'
                            />
                            <Overlay 
                                title='Retail Week' 
                                mainImg={require ('../../assets/portImgs/rw.png') } 
                                url='https://www.retail-week.com/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='Retail Week was the first Webvision Pro client, which involved
                                some changes to the underlying site structure. The site received high traffic 
                                after a BBC News article directed the public to an article.'
                            />
                            <Overlay 
                                title='Boat International' 
                                mainImg={require ('../../assets/portImgs/boat.png') } 
                                url='https://www.boatinternational.com/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='Boat International requested some changes to be made to the structure
                                of their site, without using the pro option. I used CSS to manipulate the header
                                to accomodate their request, which turned out very well.'
                            />
                            <Overlay 
                                title='Health Service Journal' 
                                mainImg={require ('../../assets/portImgs/hsj.png') } 
                                url='https://www.hsj.co.uk/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='HSJ is another high-profile client in their field.'
                            />
                            <Overlay 
                                title='International Broadcasting Convention' 
                                mainImg={require ('../../assets/portImgs/ibc.png') } 
                                url='https://www.ibc.org/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='IBC had dictated that the site must be finished before an event
                                they were hosting. We had the site finished well before the deadline, fully tested
                                and live. The front-end build inspired an update to the Webvision Cloud suite in the
                                form of new block elements to display, such as a video gallery.'
                            />
                            <Overlay 
                                title='The Law Gazette' 
                                mainImg={require ('../../assets/portImgs/law.png') } 
                                url='https://www.lawgazette.co.uk/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='The Law Gazette was another client who requested a pro upgrade. 
                                Thre was a lot of alteration to the header and footer, which required some CSS
                                wrangling.'
                            />
                            <Overlay 
                                title='Education in Chemistry' 
                                mainImg={require ('../../assets/portImgs/eic.png') } 
                                url='https://edu.rsc.org/eic' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='EIC, as part of the Royal Society of Chemistry, requested subtle 
                                changes to a number of elements where news articles overlapped, or were shared.
                                This was done using classes applied using JavaScript which could then be styled
                                accordingly.'
                            />
                            <Overlay 
                                title='Chemistry World' 
                                mainImg={require ('../../assets/portImgs/cw.png') } 
                                url='https://www.chemistryworld.com/' 
                                tags={['css', 'html', 'JavaScript', 'Jquery']}
                                description='Chemistry World was intended to be a more layperson-friendly news 
                                source for chemistry. with the design changes they requested a pro subscription 
                                was necessary. the header needed to be reconfigured heavily from the standard 
                                version and the footer area needed a rebuild as well as refactored carousels.'
                            />
                        </SimpleGrid>
                    </TabPanel>

                    <TabPanel>
                        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} sspacing='20px' pt="20px">
                            <Overlay 
                                title='Notes App' 
                                mainImg={require ('../../assets/portImgs/notes.png') } 
                                url='https://master--thunderous-kashata-4cce4f.netlify.app/' 
                                tags={['css', 'html', 'React', 'TypeScript', 'Jquery']}
                                description='This is a React app built with TypeScript and Bootstrap.
                                In the app you can create notes, including tags. From the homepage you can
                                search notes by title or tags. Tags can also be updated in real-time
                                or deleted altogether.'
                            />
                        </SimpleGrid>
                    </TabPanel>

                    <TabPanel>
                        
                                    <p>moi</p>
                                
                    </TabPanel>
                </TabPanels>
            </Tabs>
    )
}