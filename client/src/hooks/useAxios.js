import { useState } from "react";
import { handleAxiosError } from "../utils/handleAxiosError";
import axiosInstance from "../axios";

export function useAxios(initialData) {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async (method, url, data = initialData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axiosInstance({ method, url, data })
      setData(res.data)
      return res.data
    } catch (err) {
      setError(handleAxiosError(err))
      throw err
    } finally {
      setLoading(false)
    }
  }

  const getData = (url) => request("get", url)
  const postData = (url, data) => request("post", url, data)
  const deleteData = (url) => request("delete", url)

  return { getData, postData, deleteData, loading, error, data }
}