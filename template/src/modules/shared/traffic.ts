import axios from 'axios'
import { API } from '../../config/const';
export const addTraffic = (form: {
  url: string,
  type: number
}) => {
  axios.post(API+'thong-ke', {
    traffic_type: form.type,
    traffic_url: form.url
  })
}