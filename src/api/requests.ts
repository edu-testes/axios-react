import axios from "axios";

const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';
const SECOND_API_URL = 'https://fakerapi.it/api/v1';

export const getPosts = async () => {
  try {
    const res = await axios.get(`${FIRST_API_URL}/posts/101`, { 
      params: { ofset: 0, limit: 10 },
      headers: {
        Authorizarion: `Bearer ${localStorage.getItem('token')}`
      },
      //timeout: 1,
      withCredentials: true, // send cookies with "http only" parameters
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
  const res = await axios.post(`${FIRST_API_URL}/posts`, 
    /*headers: {
      Authorizarion: `Bearer ${localStorage.getItem('token')}`
    },*/
    {
      body: 'gsdfg',
      title: 'sdkjfhksdhfksdfhkshdfkh'
    }, {
      params: {offset: 0}
    }
  )
}
