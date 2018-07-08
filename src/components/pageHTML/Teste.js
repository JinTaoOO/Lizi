import React,{Component} from 'react'
import {connect} from 'react-redux'

class Teste extends Component {
	constructor(props){
		super(props)
		this.state={
			boo:1
		}
	}
	render(){
		return(
		<div>
		<div style={{width:"100%",height:"50px",backgroundColor:"red"}}>
		{this.props.str}{this.state.boo}
		</div>
		<button onClick={this.props.fnn.bind(this) }>{(function(thiss){console.log(thiss.porps)})(this)}</button>
		</div>
		)
	}
	
}

export default connect((state)=>{  //将index.js里的state数据注入到  这个组件里
	return state	
},(dispatch)=>{
	return {
		fnn:()=>{
			dispatch({
				type:'fnn',
				oo:'组件'
			})
		}
	}
})(Teste);  //组件名......暴露这个组件同时是传送数据

// export default Teste;