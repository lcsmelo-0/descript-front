import React, { useState } from 'react'
import Card from 'react-credit-cards'
import { Form, FormGroup, Input, Label } from 'reactstrap'

import { FormButton } from '../../components'
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../../utils/creditCard'

import 'react-credit-cards/es/styles-compiled.css'

const Payment = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('Nome')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focused, setFocused] = useState('')

  const handleInputFocus = ({ target }) => {
    setFocused(target.name)
  }

  const handleInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value)
    }

    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
      setNumber(target.value)
    }

    if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    }

    if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
      setCvc(target.value)
    }
  }

  return (
    <div className="container">
      <div>
        <h1>Pagamento</h1>
      </div>
      <Card number={number} name={name} expiry={expiry} cvc={cvc} focused={focused} />
      <Form>
        <FormGroup>
          <Label for="number">Numero do cartão</Label>
          <Input
            type="tel"
            name="number"
            className="form-control"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input
            type="text"
            name="name"
            className="form-control"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </FormGroup>
        <FormGroup>
          <Label for="expiry">Validade</Label>
          <Input
            type="tel"
            name="expiry"
            className="form-control"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cvc">CVV</Label>
          <Input
            type="tel"
            name="cvc"
            className="form-control"
            pattern="\d{3,4}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </FormGroup>
        <FormButton>Finalizar Pagamento</FormButton>
      </Form>
    </div>
  )
}

export default Payment
