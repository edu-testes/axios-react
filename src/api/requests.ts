import axios from "axios";

export const getPostsController = new AbortController();

const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';
const SECOND_API_URL = 'https://catfact.ninja';

const firstApiAxios = axios.create({
  baseURL: FIRST_API_URL,
  headers: {
    Authorizarion: `Bearer ${localStorage.getItem('token')}`,
  },
  withCredentials: true,
});


const secondApiAxios = axios.create({
  //baseURL: FIRST_API_URL,
  baseURL: SECOND_API_URL,
  headers: {
    Authorizarion: `Bearer ${localStorage.getItem('token')}`,
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  },
  //withCredentials: true,
  withCredentials: false,
});


export const getPosts = async () => {
  const res = await firstApiAxios.get(`/posts/10`, {
    params: { ofset: 0, limit: 10 },
    signal: getPostsController.signal,
    //timeout: 1,
    // Use with GET requests
    onDownloadProgress: function (progressEvent) {
      //console.log(progressEvent, 'first');
    },
    // Use with POST, PUT requests
    /*onUploadProgress: function(progressEvent) {
      console.log('first');
    }*/
  });
  return res;
}

export const createPosts = async () => {
  const res = await firstApiAxios.post(`/posts`,
    {
      body: 'gsdfg',
      title: 'sdkjfhksdhfksdfhkshdfkh',
    }, {
    params: { offset: 0 },
  }
  )
}

export const deletePosts = async () => {
  const res = await firstApiAxios.delete(`/posts/1`)
}

export const getCats = async () => {
  const res = await secondApiAxios.get('/breeds');
  return res;
}

firstApiAxios.interceptors.response.use(
  (res) => { console.log(res.status, 'int res'); return res; },
  (error) => {
    if (axios.isAxiosError(error)) {
      // Refresh token
      /*
      if (error.status === 401 && token) {
        const { data } = axios.post('/url/auth', { refreshToken: token })
        localStorage.set(data, 'token');
      }*/
      console.log(error, 'err');
      console.log(error.response?.data.errText, 'error');
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
)

firstApiAxios.interceptors.request.use(
  (config) => { return config; },
  (error) => {
    if (axios.isAxiosError(error)) {
      console.log(error, 'err');
      console.log(error.response?.data.errText, 'error');
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
)


secondApiAxios.interceptors.response.use(
  (res) => { console.log(res.status, 'int res'); return res; },
  (error) => {
    if (axios.isAxiosError(error)) {
      console.log(error, 'err');
      console.log(error.response?.data.errText, 'error');
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
)