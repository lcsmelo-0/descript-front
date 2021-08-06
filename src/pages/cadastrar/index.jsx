import { FormButton, InputComponent } from '../../components'
import { Form, FormGroup, Input, Label } from 'reactstrap'

import UseForms from '../../utils/useForms'

const RegisterForm = () => {
  const { inputs, change } = UseForms()

  return (
    <div className="container registerForm">
      <div>
        <h1>Cadastro</h1>
      </div>
      <Form>
        <InputComponent
          className="registerForm__inputContainer"
          name="name"
          type="text"
          value={inputs.name}
          onChange={change}
        >
          Nome completo
        </InputComponent>
        <InputComponent
          className="registerForm__inputContainer"
          name="email"
          type="email"
          value={inputs.email}
          onChange={change}
        >
          Email
        </InputComponent>
        <InputComponent className="registerForm__inputContainer" name="phone" type="text">
          Telefone
        </InputComponent>
        <FormGroup className="registerForm__inputContainer">
          <Label>Profissão</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>Departamento</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup tag="fieldset" className="registerForm__inputContainer">
          <Label>Possui alguma deficiência?</Label>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Sim
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Não
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>Se sim, quais?</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>Nome da empresa</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>CNPJ</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>Endereço</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>Site</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>Número de Colaboradores</Label>
          <Input type="number" />
        </FormGroup>
        <FormGroup className="registerForm__inputContainer">
          <Label>Número de Clientes</Label>
          <Input type="number" />
        </FormGroup>

        <FormButton to="/checkout" className="button">
          Continuar
        </FormButton>
      </Form>
    </div>
  )
}

export default RegisterForm
