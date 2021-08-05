import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

export const InputComponent = ({ className, children, name, type, value, onChange }) => {
  return (
    <FormGroup className={className}>
      <Label for={name}>{children}</Label>
      <Input type={type} value={value} name={name} onChange={onChange} />
    </FormGroup>
  )
}
