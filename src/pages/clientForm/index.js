import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as ImageActions } from "../../store/ducks/image";

import { useFormFields } from "../../utils/hooks";

import Spinner from "../../components/icons/Spinner";
import Header from "../../components/Header";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

const ClientForm = props => {
  const [fields, handleFieldsChange] = useFormFields({
    name: "",
    file: "",
    description: ""
  });
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.image);

  useEffect(() => {
    dispatch(ImageActions.getImagesRequest());
  }, []);

  const handleImage = event => {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        fields.file = reader.result;
      };
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(ImageActions.setImageRequest(fields));
    return props.history.goBack();
  };

  return (
    <>
      <Header />
      {loading ? (
        <div className="container d-flex flex-column  md-12">
          <Spinner />
        </div>
      ) : (
        <Container>
          <Row>
            <Form onSubmit={handleSubmit}>
              <Col md="12">
                <Row>
                  <FormGroup>
                    <Input
                      type="name"
                      name="name"
                      value={fields.name}
                      id="name"
                      onChange={handleFieldsChange}
                    />
                  </FormGroup>
                </Row>
              </Col>
              <Col md="12">
                <Row>
                  <FormGroup>
                    <Button>
                      Upload
                      <Input
                        type="file"
                        accept="image/*"
                        name="file"
                        onChange={e => handleImage(e)}
                      />
                    </Button>
                  </FormGroup>
                </Row>
              </Col>

              <Col md="12">
                <Row>
                  <FormGroup>
                    <label>Sugerir descrição</label>
                    <Input
                      type="textarea"
                      name="description"
                      value={fields.description}
                      id="description"
                      onChange={handleFieldsChange}
                    />
                  </FormGroup>
                </Row>
              </Col>
              <Button type="submit">Enviar</Button>
            </Form>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ClientForm;
