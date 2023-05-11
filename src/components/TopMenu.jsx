import React from 'react';
import { Menu, IconButton, Link, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from 'react-icons/go'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import cv from '../../src/assets/David_Lee_CV.docx'

export const TopMenu = ({ name }) => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuGroup title={name}>
                    <MenuItem>

                        <Link href="/">
                            Homepage
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="my-work">
                            My Profile
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="my-projects">
                            Projects
                        </Link>
                    </MenuItem>
                    </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Downloads'>
                    <MenuItem>
                        <Link href={cv} target="_blank">My CV</Link>
                    </MenuItem>
                </MenuGroup>
            </MenuList>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Link href='https://github.com/mrdavelee' target='_blank'>
                <IconButton 
                    icon={<GoMarkGithub />}
                    size="md"
                    fontSize="xl"
                    aria-label='Visit my Github page'
                    variant="ghost"
                    color="current"
                    marginLeft="2"
                />
            </Link>
        </Menu>
    )
}