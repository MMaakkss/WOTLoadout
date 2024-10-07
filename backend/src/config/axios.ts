import axios from 'axios'

const WOT_APP_ID = process.env.WOT_APP_ID

export const axiosInstance = axios.create({
  headers: {
    'Accept': 'application/json',
  },
  params: {
    application_id: WOT_APP_ID
  }
})
