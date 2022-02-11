import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
export default class Lightbox extends Component {
  static propTypes = {
    carImages: PropTypes.array.isRequired,
  }
  render() {
    const { carImages } = this.props
    return (
      <div>
        {carImages.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </div>
    )
  }
}