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
                title='Notes Twat' 
                mainImg={require ('../assets/portImgs/notes.png') } 
                url='https://master--thunderous-kashata-4cce4f.netlify.app/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
            <Overlay 
                title='Notes Twat' 
                mainImg={require ('../assets/portImgs/notes.png') } 
                url='https://master--thunderous-kashata-4cce4f.netlify.app/' 
                description='Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat Twat 
                Twat Twat Twat Twat Twat Twat Twat Twat Twat '
            />
        </SimpleGrid>
        
    )
}