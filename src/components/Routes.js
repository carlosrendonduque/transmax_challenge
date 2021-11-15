const zones = [
	{
		zone: ['Monash Fwy Out', 13],
		subzone: ['Kings Way | EastLink', 45],
		alert: '🔴'
	},
	{
		zone: ['Monash Fwy Out', 15],
		subzone: ['Kings Way | EastLink', 28],
		alert: '🔴'
	},
	{
		zone: ['Wester Ring Rd', 5],
		subzone: ['West Fate Fwy | Western Fwy', 5],
		alert: '🟡'
	},
	{
		zone: ['Eastern Fwy', 15],
		subzone: ['Hoddle St | Springvale Rd', 25],
		alert: '🟡'
	},
]

const Routes = () => (
	<section className=" p2">
            
      <details className="details"> 
        <summary className="p2 "> 
          <h4 className="font-n" > DELAYED ROUTES </h4>
        </summary>
        {
        	 zones.map(z => (
						<article className="border-tgrey pr2" key={z.subzone[1]}>
			          <header className="flx flx-j_sb p2 flx-hc">
			            <p className="font-n">{ z.alert + ' ' + z.zone[0]}</p> <sub> {z.zone[1]} km </sub> 
			          </header>
		          <div className="flx flx-j_sb flx-hc">

		            <aside className="p2 flx flx-hc"> 
		              <i className="mr2 px1 big"> ↓ </i>
		              <p>  {z.subzone[0].split(" | ")[0]} <br />  {z.subzone[0].split(" | ")[1]} </p>
		            </aside>
		            <p> <b className="big" data-testid="digit"> {z.subzone[1]}</b> min </p>
		          </div>
		        </article>
        	))
        }
      </details>
  </section>)

export default Routes