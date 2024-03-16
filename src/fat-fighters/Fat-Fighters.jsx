import { React, useEffect, useState } from 'react';
import { Flex } from "@chakra-ui/react"
import Projects from './dashboard/Projects'
import WeightChart from './dashboard/Weight'
import LineChart from './charts/LineChart';
import { dashboardTableData } from './variables/general'
import { supabase } from '../utils/sb'

export const Fat = () => {
    const [weights, setWeightData] = useState([]);
    const [yAxis, setYAxisData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from("fat_fighters").select('weight')
            let high, low

            const weightArray = data.map(w => w.weight)
            const weightData = [{ name: 'Weight this week', data: weightArray }]

            high = (Math.max(...weightArray) + 5)
            low = (Math.min(...weightArray) - 5)

            const yAddition = {
                min: low,
                max: high
            }

            setYAxisData(yAddition)
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
                    data={ dashboardTableData }
                />
            </Flex>

            <WeightChart
                title={"Weekly tonnage"}
                percentage={-5}
                chart={<LineChart yAxisData={ yAxis } data={ weights } />}
            />
        </>
    )
}
