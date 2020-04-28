import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ImageActions } from "../../store/ducks/image";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  Row,
  Col,
  Container,
  Badge,
  CardFooter
} from "reactstrap";

import Spinner from "../../components/icons/Spinner";
import Header from "../../components/Header";

const Editor = () => {
  const dispatch = useDispatch();

  const { images, loading } = useSelector(state => state.image);

  useEffect(() => {
    dispatch(ImageActions.getImagesRequest());
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <div className="container d-flex flex-column  md-12">
          <Spinner />
        </div>
      ) : (
        <Container>
          <Row md="12" className="d-flex flex-row justify-content-start">
            {images.map(img => {
              return (
                <>
                  {img.workflow && img.workflow.step != 1 ? (
                    <>
                      <div>Nenhum trabalho no momento</div>
                    </>
                  ) : (
                    <Col xs={4}>
                      <Card>
                        <CardHeader>
                          {img.workflow ? (
                            <Badge color="primary" pill>
                              {img.workflow.status}
                            </Badge>
                          ) : (
                            <></>
                          )}
                        </CardHeader>
                        <CardBody>
                          <CardImg
                            src={img.file}
                            top
                            width="100%"
                            alt={img.name}
                          />
                          <CardTitle>{img.name}</CardTitle>
                          {img.texts ? (
                            <>
                              <CardText>
                                {img.texts[img.texts.length - 1].text}
                              </CardText>
                            </>
                          ) : (
                            <></>
                          )}
                        </CardBody>
                        <CardFooter>
                          <a
                            href={`/detail/${img.id}`}
                            className="btn btn-primary"
                          >
                            Editar
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                  )}
                </>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  image: state.image
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ImageActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
