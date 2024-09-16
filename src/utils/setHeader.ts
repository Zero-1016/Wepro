import axiosInstance from '@/apis/instance';

function setHeader(key: string, value: string) {
  axiosInstance.defaults.headers.common[key] = value;
}

function removeHeader(key: string) {
  if (!axiosInstance.defaults.headers.common[key]) {
    return;
  }
  delete axiosInstance.defaults.headers.common[key];
}

export { removeHeader, setHeader };