import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ImageActions } from '../../store/ducks/image'

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg 
} from 'reactstrap'

import Spinner from '../../components/icons/Spinner'

class Editor extends Component {

  componentWillMount() {
    this.props.getImagesRequest()
  }
  render() {
    const {
      image: {images, loading}
    } = this.props
    return (
      <>
        {loading ? (
          <div className="container d-flex flex-column  md-12">
            <Spinner />
          </div>
        ) : (
          <div>
            <h1>Dashboard</h1>
            <div className="container">
              <h5>Area logada do editor</h5>
                <div className="d-flex flex-row justify-content-between">
                {images.map(img => {
                  return (
                    <Card key={img.id}>
                      <CardImg src={img.file} top width="100%" alt={img.name} />
                      <CardBody>
                        <CardTitle>{img.name}</CardTitle>
                        <CardText>{img.description}</CardText>
                        <a href={`/detail/${img.id}`} className="btn btn-primary">Iniciar trabalho</a>
                      </CardBody>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>          
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  team: state.team,
  image: state.image
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ImageActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
