import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as ClientActions } from '../../_store/_ducks/client'

class Home extends Component {

  

  componentDidMount() {
    this.props.getClientRequest()
    this.props.getClientSuccess()
  
  }

  render() {
    const { loading, client } = this.props

    console.log('dhsaudias:', client)
    return (
      <div>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <>
   
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  path: state.path,
  client: state.client
})

const  mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ClientActions
    },
    dispatch
  )
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)