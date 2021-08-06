import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as ImageActions } from '../../store/ducks/image'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  Row,
  Col,
  Badge,
  CardFooter,
} from 'reactstrap'

const Editor = () => {
  const dispatch = useDispatch()
  const { images } = useSelector(state => state.image)

  useEffect(() => {
    dispatch(ImageActions.getImagesRequest())
  }, [])

  return (
    <>
      <div className='container'>
        <div>
          <h1>Editor</h1>
        </div>
        <Row md="12" className="d-flex flex-row justify-content-start">
          {images.length > 0 ? (
            images.map(img => {
              return (
                <>
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
                        <CardImg src={img.file} top width="100%" alt={img.name} />
                        <CardTitle>{img.name}</CardTitle>
                        {img.texts ? (
                          <>
                            <CardText>{img.texts[img.texts.length - 1].text}</CardText>
                          </>
                        ) : (
                          <></>
                        )}
                      </CardBody>
                      <CardFooter>
                        <a href={`/detail/${img.id}`} className="btn btn-primary">
                          Editar
                        </a>
                      </CardFooter>
                    </Card>
                  </Col>
                  )
                </>
              )
            })
          ) : (
            <>
              <div>Nenhum trabalho no momento</div>
            </>
          )}
        </Row>
      </div>
    </>
  )
}

export default Editor
