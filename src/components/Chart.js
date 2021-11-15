import {useState, useEffect} from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const dataMock = [
    { title: '15', value: 15, color: '#ffffff' },
    { title: '5', value: 5, color: '#93e2dc' },
    { title: '30', value: 30, color: '#70d8d1' },
    { title: '23', value: 23, color: '#21b7ac' },
    { title: '18', value: 18, color: '#70d8d1' },
    { title: '9', value: 9, color: '#93e2dc' },
  ]


const Chart = ({ramp}) => {

	const [data, setData] = useState([]) 

	useEffect(() => {
		console.log(ramp)
		if(ramp )
			setData(Object.values(ramp).map((r,i) => {
				return {title: r * 2 , value: r * 2, color: dataMock[i].color }}))

	}, [ramp])
	
	return (
		<section className=" p2 chart">
	      <details className="details"> 
	        <summary className="p2 "> 
	          <h4 className="font-n" > RAMP CHART </h4>
	        </summary>
	        <article className="border-tgrey">
	         {data.length ? <PieChart
	         		animate
		          data-testid="chart"
	            data={data }
	            lineWidth={25} 
	             label={({ dataEntry }) => dataEntry.value + '%'}
	             labelPosition={108}
	              labelStyle={(index) => ({
		              fill: data[index].color ,
		              fontSize: '7px',
		              fontFamily: 'sans-serif',
	            })}
	              radius={33}
	          /> : <h3 className="p2"> loading... </h3>}
	        </article>
	      </details>
	  </section>
	)
}

export default Chart