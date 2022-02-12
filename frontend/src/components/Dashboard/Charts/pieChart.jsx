import { PieChart as Chart, Pie, Cell,  ResponsiveContainer } from 'recharts';
  
function PieChart({ data }){
   
    return(
        <div className="pieChart">
          <Chart width={263} height={271} >
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="score"
              startAngle={180}
              endAngle={-180}
            >
            <Cell fill="#FF0101" />
            <Cell fill="#FBFBFB" />
            </Pie>
            <text x="50%" y="50%" dy={16} >
              {`${100 * data[0].score}%\nde votre objectif`}
            </text>
          </Chart>
        </div>
    )
}

export default PieChart