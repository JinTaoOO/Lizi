import React,{Component} from 'react'
import Ttop from '../DetailModule/Ttop/Ttop'
import Tbanner from '../DetailModule/Tbanner/Tbanner.js'
import '../../static/css/detail.css'
import '../../static/css/detail2.css'

class Detail extends Component {
	render(){
		return(
		<div>
		   <Ttop/>
			 <Tbanner/>
		</div>
		)
	}
}

export default Detail;