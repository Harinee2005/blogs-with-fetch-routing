import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {details} = this.props
    const {title, imageUrl, avatarUrl, topic, author, id} = details
    return (
      <Link to={`/blogs/${id}`} className="link-container">
        <li className="li-item">
          <img className="title-image" src={imageUrl} alt="title-image" />
          <div>
            <p className="topic-author-text">{topic}</p>
            <h1 className="title-text">{title}</h1>
            <div className="author-container">
              <img className="avatar-img" src={avatarUrl} alt="avatar" />
              <p className="topic-author-text">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
