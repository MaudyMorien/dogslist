import React, { Component } from 'react'
import request from 'superagent'
import DogBreedImages from './DogBreedImages'

export default class DogBreedImagesContainer extends Component {
    state = { images: null }

    componentDidMount() {
        const breed = this.props.match.params.breed
        request
            .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
            .then(response => this.updateImages(response.body.message))
            .catch(console.error)
    }

    updateImages(images) {
        this.setState({
            images: images
        })
    }

    render() {
        return <DogBreedImages images={ this.state.images } match={ this.props.match }
        />
    }
}