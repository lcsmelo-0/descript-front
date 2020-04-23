import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ImageActions } from '../../store/ducks/image'
import { Creators as WorkflowActions } from '../../store/ducks/workflow'

import Spinner from '../../components/icons/Spinner'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'


const ClientForm = () => {

  const [file, setFile] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const { images, loading } = useSelector((state) => state.image)

  useEffect(() => {
    dispatch(ImageActions.getImagesRequest())
  }, [])

  const handleSubmit = e =>  {
    e.preventDefault()
    console.log(e)
  }

  const handleChange = event => {
    const reader = new FileReader()
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files
      reader.readAsDataURL(file)
      reader.onload = () => {
        file = (reader.result)
      }
    }
  }
  return (
    <>
      {loading ? (
        <div className="container d-flex flex-column  md-12">
          <Spinner />
        </div>
      ) : (
          <Container>
            <Col md="12">
              <Row>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Row>
                    <FormGroup>
                       <Button>Upload<Input type="file" accept="image/*" name="file" id="exampleFile" onChange={ (e) => handleChange(e)} /></Button>
                    </FormGroup>
                  </Row>
                </Form>
              </Row>
            </Col>
          </Container>
        )}
    </>
  )
}

const mapStateToProps = state => ({
  image: state.image
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ImageActions,
      ...WorkflowActions,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm)