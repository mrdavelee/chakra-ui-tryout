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
                tags={['css', 'html', 'React', 'TypeScript', 'Jquery']}
                description='This is a React app built with TypeScript and Bootstrap.
                In the app you can create notes, including tags. From the homepage you can
                search notes by title or tags. Tags can also be updated in real-time
                or deleted altogether.'
            />
            <Overlay 
                title='Itchy Pet Awareness' 
                mainImg={require ('../assets/portImgs/itchy.png') } 
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
                mainImg={require ('../assets/portImgs/building.png') } 
                url='https://www.building.co.uk/' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
            <Overlay 
                title='Retail Week' 
                mainImg={require ('../assets/portImgs/rw.png') } 
                url='https://www.retail-week.com/' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
            <Overlay 
                title='Boat International' 
                mainImg={require ('../assets/portImgs/boat.png') } 
                url='https://www.boatinternational.com/' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
            <Overlay 
                title='High Street Journal' 
                mainImg={require ('../assets/portImgs/hsj.png') } 
                url='https://www.hsj.co.uk/' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
            <Overlay 
                title='International Broadcasting Convention' 
                mainImg={require ('../assets/portImgs/ibc.png') } 
                url='https://www.ibc.org/' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
            <Overlay 
                title='The Law Gazette' 
                mainImg={require ('../assets/portImgs/law.png') } 
                url='https://www.lawgazette.co.uk/' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
            <Overlay 
                title='Education in Chemistry' 
                mainImg={require ('../assets/portImgs/eic.png') } 
                url='https://edu.rsc.org/eic' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
            <Overlay 
                title='Chemistry World' 
                mainImg={require ('../assets/portImgs/cw.png') } 
                url='https://www.chemistryworld.com/' 
                tags={['css', 'html', 'JavaScript', 'Jquery']}
                description='To be completed'
            />
        </SimpleGrid>
        
    )
}