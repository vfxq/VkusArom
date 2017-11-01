import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loader from '../Loader'
import renderHTML from 'react-render-html'

class AromItemInfo extends Component{
	
	render(){
		const {aromGroup, aromItem, match} = this.props
		
		if(!match.params.struct && (aromGroup.length == 0)) return (<section className="info"><Loader /></section>)
		
		const selectedItem = (match.params.struct && (aromGroup.length > 0)) ? aromGroup.filter(item => item.acf.struct == match.params.struct)[0] : aromGroup[0]
		
		const color = selectedItem.acf.color ? renderHTML(`<b>Цвет: </b>${selectedItem.acf.color}<br />`) : null
		const sctructure = selectedItem.acf.sctructure ? renderHTML(`<b>Структура: </b>${selectedItem.acf.sctructure}<br />`) : null
		const smell = selectedItem.acf.smell ? renderHTML(`<b>Запах: </b>${selectedItem.acf.smell}<br />`) : null
		const composition = selectedItem.acf.composition ? renderHTML(`<b>Состав: </b>${selectedItem.acf.composition}<br />`) : null
		const bearer = selectedItem.acf.bearer ? renderHTML(`<b>Носитель: </b>${selectedItem.acf.bearer}<br />`) : null
		const shelfLife = selectedItem.acf.shelfLife ? renderHTML(`<b>Срок хранения: </b>${selectedItem.acf.shelfLife}<br />`) : null
		const term = selectedItem.acf.term ? renderHTML(`<b>Условия хранения: </b>${selectedItem.acf.term}<br />`) : null
		const wrapper = selectedItem.acf.wrapper ? renderHTML(`<b>Упаковка: </b>${selectedItem.acf.wrapper}<br />`) : null
		const addInfo = selectedItem.acf.addInfo ? renderHTML(`<p>${selectedItem.acf.addInfo}</p>`) : null
		
		return(
			<div>
				<div className={`logoVendor dark ${selectedItem.acf.vendor}`}> пищевые {selectedItem.title.rendered} {selectedItem.acf.vendor}	</div>
				{renderHTML(selectedItem.content.rendered)}
				<div className="addingInfo">
					<p className='uppercase'>{`ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ АРОМАТИЗАТОРОВ "${selectedItem.acf.vendor}"`}:</p>
					{color}
					{sctructure}
					{smell}
					{composition}
					{bearer}
					{shelfLife}
					{term}
					{wrapper}
					{addInfo}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		aromGroup: state.aromGroup.entities.valueSeq().toArray()
	}
}

export default connect(mapStateToProps)(AromItemInfo)