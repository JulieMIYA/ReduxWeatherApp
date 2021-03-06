import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length)
}
export default ({data, color, unit})=>{
    return(
        <div>
            <Sparklines data={data} height={120} width={180} >
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                { `Avg: ${average(data)} ${unit}` }
            </div>
        </div>
       
    )
}
