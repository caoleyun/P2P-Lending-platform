import React from 'react';
import {render} from 'react-dom';

import BECanlendar from './component/BECanlendar.js';


import 'bootstrap/dist/css/bootstrap.css';








render(
	<div>
		<BECanlendar onpick={ (by,bm,bd,ey,em,ed)=>{} }
			earliest={{year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate()}}
			 latest={{year:2019,month:5,day:6}}
		 />
	</div>
,document.getElementById("root"));
