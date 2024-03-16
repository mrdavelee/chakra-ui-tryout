import { React, useEffect, useState } from 'react';
import { Flex } from "@chakra-ui/react"
import Projects from '../components/dashboard/Projects'
import WeightChart from '../components/dashboard/Weight'
import LineChart from '../charts/LineChart';
import { dashboardTableData } from '../variables/general'
import { supabase } from '../utils/sb'

export const Fat = () => {
    const [weights, setWeightData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from("fat_fighters").select('weight')
            const weightArray = data.map(w => w.weight)
            const weightData = [{ name: 'Weight this week', data: weightArray }]
            setWeightData(weightData)
        }
        getData();
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <>
            <Flex alignContent="center">
                <Projects
                    title={"Weekly roundup"}
                    amount={30}
                    captions={["Week", "Points", "Budget", "Completion"]}
                    data={dashboardTableData}
                />
            </Flex>

            <WeightChart
                title={"Weekly tonnage"}
                percentage={-5}
                chart={<LineChart data={weights} />}
            />
        </>
    )
}
