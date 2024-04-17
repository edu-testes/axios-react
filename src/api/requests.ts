import axios from "axios";

const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';
const SECOND_API_URL = 'https://fakerapi.it/api/v1';

axios.defaults.baseURL = FIRST_API_URL;
axios.defaults.headers.common = {
  Authorizarion: `Bearer ${localStorage.getItem('token')}`,
}
axios.defaults.withCredentials = true;

export const getPosts = async () => {
  try {
    const res = await axios.get(`/posts/10`, { 
      params: { ofset: 0, limit: 10 },
      //timeout: 1,
      // Use with GET requests
      onDownloadProgress: function(progressEvent) {
        console.log(progressEvent, 'first');
      },
      // Use with POST, PUT requests
      /*onUploadProgress: function(progressEvent) {
        console.log('first');
      }*/
    });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error, 'err');
      console.log(error.response?.data.errText, 'error');
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export const createPosts = async () => {
  const res = await axios.post(`/posts`, 
    {
      body: 'gsdfg',
      title: 'sdkjfhksdhfksdfhkshdfkh',
    }, {
      params: {offset: 0},
    }
  )
}

export const deletePosts = async () => {
  const res = await axios.delete(`/posts/1`, { }
  )
}
