import React, { useEffect, useCallback } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
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


const Reviser = props => {
  const dispatch = useDispatch()

  const { images, loading } = useSelector(state => state.image)
  const stableDispatch = useCallback(dispatch, [])
  
  useEffect(() => {
    dispatch(ImageActions.getImagesRequest())
  }, [stableDispatch])

  return (
    <>
        <div className='container'>
        <div>
          <h1>Revisor</h1>
        </div>
          <Row md="12" className="d-flex flex-row justify-content-start">
            {images.map(img => {
              return (
                <>
                  {img.workflow && img.workflow.step !== 2 ? (
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
                  )}
                </>
              )
            })}
          </Row>
        </div>
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...ImageActions }, dispatch)

export default connect(mapDispatchToProps)(Reviser)
