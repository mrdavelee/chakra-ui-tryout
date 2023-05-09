import React from "react"
import { Heading, Stack, Text } from "@chakra-ui/react"

export const TextSection = ({ title, textMain }) => {
    return (
        <Stack spacing={6}>
            <Heading as='h1' size='2xl' noOfLines={1}>
                { title }
            </Heading>
            <Text fontSize='md'>{ textMain }</Text>
        </Stack>
    )
}