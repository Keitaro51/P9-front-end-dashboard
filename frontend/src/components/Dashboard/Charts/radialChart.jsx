import propTypes from "prop-types"
import styled from 'styled-components'
import { RadialBarChart  as Chart, RadialBar , PolarAngleAxis,  ResponsiveContainer } from 'recharts';
  
const Container =  styled.div`
  position: relative;
  background: #FBFBFB;
  border-radius: 5px;
  width: 258px;
  height: 263px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  position: absolute;
  top: 25px;
  left: 30px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`

const Label = styled.div`
  position: absolute;
  text-align: center;
  width: 95px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: #282D30;
  & span{
    font-size: 26px;
    font-weight: 700;
  };
`

/**
 * Chart component for main content, dynamicaly filled with user daily score, represented with radial chart
 * @component
 * 
 */
function RadialChart({ data }){
    
    return(
        <Container className="radialChart" >
          <Title>Score</Title>
          <Label><span>{ `${data[0].score * 100} %`}</span> <br/>{`de votre objectif`}</Label>
          <Chart 
            width={258} 
            height={263} 
            innerRadius="70%" 
            outerRadius="100%"
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
        </Container>
    )
}

RadialChart.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      score: propTypes.number,
    }),
  )
}

export default RadialChart