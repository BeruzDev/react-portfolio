import React from 'react'

const ContactForm = () => {
	return (
		<form 
			className='contact-form'
			action={'https://formspree.io/f/xwpolepz'}
			method='POST'
		>
			<input required name="nombre" type="text" className="input top" placeholder="Nombre"/>
      <input required name="email" type="email" className="input" placeholder="Email"/>
      <input required name="empresa" type="text" className="input" placeholder="Empesa"/>
      <textarea required name="message" id="message" placeholder="Escribeme y te respondere lo antes posible!"></textarea>

      <button type="submit" className="submit">
        Enviar
      </button>
		</form>
	)
}

export default ContactForm
