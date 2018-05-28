



import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'



class New extends Component {
	
	renderField( field ) {
		return (
			// Dots assign event handlers to input through field argument
			<div className="form-group">
				<label>{ field.label }</label>
				<input className="form-control" type="text" { ...field.input }/>
			</div>
		)
	}
	
	render( ) {
		return (
			<form>
				<Field label="Title" name="title" component={ this.renderField }/>
				<Field label="Tags" name="tags" component={ this.renderField }/>
				<Field label="Content" name="content" component={ this.renderField }/>
			</form>
		)
	}
	
}


// Form property should be unique to differentiate it from other forms
export default reduxForm( { form: 'PostsNewForm' } )( New )



