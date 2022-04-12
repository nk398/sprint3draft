import React, { Component } from 'react'
import '../App.css';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl, author, date } = this.props
    return (
      <div className="my-3">
        <div className="card text-white bg-dark shadow-me">
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-light">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
