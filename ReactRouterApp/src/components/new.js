



import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'



class New extends Component {
	
	renderField( field ) {
		return (
			// Dots assign event handlers to input through field argument
			<div className="form-group">
				<label>{ field.label }</label>
				<input className="form-control" type="text" { ...field.input }/>
				{ field.meta.error }
			</div>
		)
	}
	
	render( ) {
		return (
			<form>
				<Field label="Title" name="title" component={ this.renderField }/>
				<Field label="Categories" name="categories" component={ this.renderField }/>
				<Field label="Content" name="content" component={ this.renderField }/>
			</form>
		)
	}
	
}


// Data submitted from the form is passed into validate as an object
function validate( values ) {
	const errors = {  }
	// Validate any form inputs passed in through the values argument
	if ( !values.title ) {
		errors.title = 'Enter a title!'
	}
	if ( !values.categories ) {
		errors.categories = 'Enter some categories!'
	}
	if ( !values.content ) {
		errors.content = 'Enter post content!'
	}
	// If errors object is empty, it is assumed to be fine for submission
	// Any properties in errors mean that the form submitted is invalid
	return errors
}


// Form property should be unique to differentiate it from other forms
export default reduxForm( { form: 'PostsNewForm', validate } )( New )



