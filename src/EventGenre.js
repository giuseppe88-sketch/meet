import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const EventGenre = ({events})=> {
    const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

    const getData =()=>{
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];   
        const data = genres.map((genre)=>{
            const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;

               return { name: genre, value };
        })

        return data

      }


    return (

        <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({name, percent})=> `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
        </Pie>
      </PieChart>

    );
}

export default EventGenre;