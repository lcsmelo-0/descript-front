import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Creators as ImageActions } from '../../store/ducks/image'

import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, CardText, CardHeader, Badge } from 'reactstrap'

const Client = () => {
  const dispatch = useDispatch()

  const { images } = useSelector(state => state.image)

  useEffect(() => {
    dispatch(ImageActions.getImagesRequest())
  }, [])

  return (
    <>
      <>
        <div className="container">
          <div>
            <h1>Cliente</h1>
          </div>
          <Container>
            <Row md="12" style={{ marginBottom: '32px' }}>
              <a href="/client/image" className="btn btn-primary">
                Enviar nova imagem
              </a>
            </Row>
          </Container>
          <Row md="12" className="d-flex flex-row justify-content-start" style={{ minHeight: '50vh' }}>
            {images.map(img => {
              return (
                <>
                  <Col xs={4} key={img.id}>
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
                        <CardImg src={img.file} top width="100%" alt={img.name} className="pt-4 pb-5" />
                        <CardTitle className="h4 lh-130 mb-3">{img.name}</CardTitle>
                        {img.texts ? (
                          <>
                            <CardText className="text-muted mb-0">{img.texts[img.texts.length - 1].text}</CardText>
                          </>
                        ) : (
                          <></>
                        )}
                      </CardBody>
                    </Card>
                  </Col>
                </>
              )
            })}
          </Row>
        </div>
      </>
    </>
  )
}

export default Client
