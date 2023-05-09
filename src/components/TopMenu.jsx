import React from 'react';
import { Flex, Menu, IconButton, Link,MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import cv from '../../src/assets/David_Lee_CV.docx'

export const TopMenu = ({name, ...rest}) => {
    return (
        <Flex
            px={8}
            mb={16}
            {...rest}
            >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuGroup title={name}>
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem> Projects</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Downloads'>
                        <MenuItem>
                            <Link href={cv} target="_blank">My CV</Link>
                        </MenuItem>
                    </MenuGroup>
                </MenuList>
            <ColorModeSwitcher justifySelf="flex-end" />

            </Menu>
        </Flex>
    )
}