import React from 'react';
import { Flex } from "@chakra-ui/react"
import Projects from '../components/dashboard/Projects'
import { dashboardTableData } from '../variables/general'


export const Fat = () => {
          
        return (
            <Flex alignContent="center">
               <Projects
                title={"Projects"}
                amount={30}
                captions={["Companies", "Members", "Budget", "Completion"]}
                data={dashboardTableData}
                />
            </Flex>
        )
      
    }