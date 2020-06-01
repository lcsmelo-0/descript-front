import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as ImageActions } from "../../store/ducks/image";

import { useFormFields } from "../../utils/hooks";

import Spinner from "../../components/icons/Spinner";

import {
  Container,

} from "reactstrap";

const ClientForm = props => {
  const [fields, handleFieldsChange] = useFormFields({
    name: "",
    file: "",
    description: ""
  });
  const dispatch = useDispatch();



  const [image, setImage] = useState({ preview: '' })
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
        })
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
                    <form class="md-form d-flex justify-content-center">
                      <div class="file-field">
                        <div class="z-depth-1-half mb-4">
                          {image.preview ? (
                            <img src={image.preview} alt="dummy" height="400" />
                          ) : (
                              <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class="img-fluid" alt="example placeholder" />
                            )}
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="btn btn-mdb-color btn-rounded float-left">
                            <span>Choose file</span>
                            <input type="file" onChange={handleImage} />
                          </div>

                        </div>
                        <div className="form-group">
                          <label for="exampleFormControlTextarea1">Example textarea</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                      </div>
                    </form>
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
