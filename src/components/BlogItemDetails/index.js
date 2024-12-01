import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount = () => {
    this.getDataDetails()
  }

  getDataDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {content, title, imageUrl, avatarUrl, author} = blogDetails
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="details-container">
            <h1 className="details-title">{title}</h1>
            <div className="author-container">
              <img className="avatar-img" src={avatarUrl} alt="avatar" />
              <p className="topic-author-text">{author}</p>
            </div>
            <img className="title-img" src={imageUrl} alt={title} />
            <p className="details-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
