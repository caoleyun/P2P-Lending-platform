import React from 'react';
import {render} from 'react-dom';

import BECanlendar from './component/BECanlendar/BECanlendar.js';
import Range from './component/Range/Range.js';


import 'bootstrap/dist/css/bootstrap.css';





let props={
	"width" :300,
	"min": 100,
	"max":7800
}


render(
	<div>
		<BECanlendar onpick={ (by,bm,bd,ey,em,ed)=>{} }
			earliest={{year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate()}}
			 latest={{year:2019,month:5,day:6}}
		 />
		 <Range {...props} />
	</div>
,document.getElementById("root"));
