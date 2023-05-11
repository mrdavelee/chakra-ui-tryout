import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Overlay } from '../components/sections/Overlay'


export const Projects = () => {
    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing='40px'>
            <Overlay 
                title='Notes App' 
                mainImg={require ('../assets/portImgs/notes.png') } 
                url='https://master--thunderous-kashata-4cce4f.netlify.app/' 
                description='This is a React app built with TypeScript and Bootstrap.
                In the app you can create notes, including tags. From the homepage you can
                search notes by title or tags. Tags can also be updated in real-time
                or deleted altogether.'
            />
            <Overlay 
                title='Itchy Pet Awareness' 
                mainImg={require ('../assets/portImgs/itchy.png') } 
                url='https://www.itchypetawarenessmonth.com/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='Building' 
                mainImg={require ('../assets/portImgs/building.png') } 
                url='https://www.building.co.uk/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='Retail Week' 
                mainImg={require ('../assets/portImgs/rw.png') } 
                url='https://www.retail-week.com/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='Boat International' 
                mainImg={require ('../assets/portImgs/boat.png') } 
                url='https://www.boatinternational.com/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='High Street Journal' 
                mainImg={require ('../assets/portImgs/hsj.png') } 
                url='https://www.hsj.co.uk/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='International Broadcasting Convention' 
                mainImg={require ('../assets/portImgs/ibc.png') } 
                url='https://www.ibc.org/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='THe Law Gazette' 
                mainImg={require ('../assets/portImgs/law.png') } 
                url='https://www.lawgazette.co.uk/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='Education in Chemistry' 
                mainImg={require ('../assets/portImgs/eic.png') } 
                url='https://edu.rsc.org/eic' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='Chemistry World' 
                mainImg={require ('../assets/portImgs/cw.png') } 
                url='https://www.chemistryworld.com/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
        </SimpleGrid>
        
    )
}