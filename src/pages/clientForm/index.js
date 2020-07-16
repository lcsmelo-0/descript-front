import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as ImageActions } from "../../store/ducks/image";

import { useFormFields } from "../../utils/hooks";

import Spinner from "../../components/icons/Spinner";

import { Container, FormGroup, Label, Input, Form } from "reactstrap";

const ClientForm = props => {
  const [fields, handleFieldsChange] = useFormFields({
    name: "",
    file: "",
    description: ""
  });
  const dispatch = useDispatch();

  const [image, setImage] = useState({ preview: "" });
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
        setImage({
          preview: reader.result
        });
      };
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(ImageActions.setImageRequest(fields));
  };

  return (
    <>
      {loading ? (
        <div className="container d-flex flex-column  md-12">
          <Spinner />
        </div>
      ) : (
        <>
          {console.log(fields)}
          <Container>
            <section className="slice py-5 py-lg-7">
              <div className="container">
                <div className="row row-grid align-items-center">
                  <Form
                    class="md-form d-flex justify-content-center"
                    onSubmit={handleSubmit}
                  >
                    <div class="file-field">
                      <div class="z-depth-1-half mb-4">
                        {image.preview ? (
                          <img src={image.preview} alt="dummy" height="400" />
                        ) : (
                          <img
                            src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                            class="img-fluid"
                            alt="example placeholder"
                          />
                        )}
                      </div>
                      <div class="d-flex justify-content-center">
                        <div class="btn btn-mdb-color btn-rounded float-left">
                          <span>Choose file</span>
                          <input type="file" onChange={handleImage} />
                        </div>
                      </div>
                      <FormGroup>
                        <Label for="exampleFormControlTextarea1">
                          Nome da imagem
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          onChange={handleFieldsChange}
                          id="name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFormControlTextarea1">
                          Descrição da imagem
                        </Label>
                        <textarea
                          class="form-control"
                          name="description"
                          onChange={handleFieldsChange}
                          id="description"
                          rows="3"
                        ></textarea>
                      </FormGroup>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary"
                      >
                        Entrar
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </section>
          </Container>
        </>
      )}
    </>
  );
};

export default ClientForm;
