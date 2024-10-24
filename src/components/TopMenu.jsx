import React from 'react';
import { Menu, IconButton, Link, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from 'react-icons/go'
import { ImLinkedin } from 'react-icons/im'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import cv from '../../src/assets/David_Lee_CV_2024.pdf'

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

                        <Link href={"/"}>
                            Homepage
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={"/my-work"}>
                            My work
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={"/my-projects"}>
                            My Projects
                        </Link>
                    </MenuItem>
                    {/* <MenuItem>
                        <Link href={"/fat-fighters"}>
                            Fat Fighters
                        </Link>
                    </MenuItem> */}
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
            <Link href='https://www.linkedin.com/in/davidleedev/' target='_blank'>
                <IconButton 
                    icon={<ImLinkedin />}
                    size="md"
                    fontSize="xl"
                    aria-label='Visit my Linkedin page'
                    variant="ghost"
                    color="current"
                    marginLeft="2"
                />
            </Link>
        </Menu>
    )
}