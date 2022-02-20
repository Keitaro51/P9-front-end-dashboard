import propTypes from "prop-types"
import { RadialBarChart  as Chart, RadialBar , PolarAngleAxis,  ResponsiveContainer } from 'recharts';
  
/**
 * Chart component for main content, dynamicaly filled with user daily score, represented with radial chart
 * @component
 * 
 */
function RadialChart({ data }){
  
    return(
        <div className="radialChart">
          <h1>Score</h1>
          <Chart 
            width={258} 
            height={253} 
            innerRadius="100%" 
            data={data} 
            barSize={15}
            startAngle={90} 
            endAngle={470}>
            <RadialBar cornerRadius={40} fill="#FF0101" dataKey="score" >
            </RadialBar >
            <PolarAngleAxis
              type="number"
              domain={[0, 1]}
              tick={false}
            />
          </Chart>
        </div>
    )
}
/*TODO
<text x="50%" y="50%" dy={16} >
{`${100 * data[0].score}%\nde votre objectif`}
</text>
*/
RadialChart.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      score: propTypes.number,
    }),
  )
}

export default RadialChart