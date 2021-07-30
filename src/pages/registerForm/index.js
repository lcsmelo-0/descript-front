import React from 'react'
import { Wizard, Steps, Step, Navigation } from 'react-hooks-multi-step-wizard'
import { Input, Label } from 'reactstrap'

import UseForms from '../../utils/useForms'

const RegisterForm = () => {
  const { inputs, change } = UseForms()
  return (
    <div className="container">
      <Wizard>
        <Steps>
          <Step>
            <div>
              <Label for="name">Nome completo</Label>
              <Input type="text" value={inputs.name} name="name" onChange={change} />
            </div>
            <div>
              <Label for="email">Email</Label>
              <Input type="text" value={inputs.email} name="email" onChange={change} />
            </div>
            <div>
              <Label>Telefone</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Profissão</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Departamento</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Possui alguma deficiência?</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Se sim, quais?</Label>
              <Input type="text" />
            </div>
          </Step>
          <Step>
            <div>
              <Label>Nome da empresa</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>CPNJ</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Endereço</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Site</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Número de Colaboradores</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Número de Clientes</Label>
              <Input type="text" />
            </div>
          </Step>
        </Steps>
        <Navigation />
      </Wizard>
    </div>
  )
}

export default RegisterForm
