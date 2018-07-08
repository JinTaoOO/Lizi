import React,{Component} from 'react'

class Ttop extends Component{
	render(){
		return (
		<header id="header">
		    <div className="bd">
		        <a href="javascript:history.go(-1);" className="back" id="back_prev">
		            <i className="iconfont"></i>
		        </a>
		        <h2>商品详情</h2>
		        <a href="https://m.lizi.com" className="right" id="back_index">
		            <i className="iconfont"></i>
		        </a>
		    </div>
		</header>
		
		)
	}
}

export default Ttop;