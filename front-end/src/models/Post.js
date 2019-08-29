import axios from 'axios'
import { API_URL } from '../constants';

class PostModel {

  static delete = (post, id) => {
    console.log(`deleting ${post.body}`)
    let request = axios.delete(`${API_URL}/posts/${id}`)
    return request
  }

}

export default PostModel