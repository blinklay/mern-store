
export function handleAxiosError(error, fallbackMessage = "Произошла ошибка запроса") {
  if (error.response?.data?.message) {
    return error.response.data.message;
  } else if (error.request) {
    return "Нет ответа от сервера. Проверьте подключение.";
  } else {
    return fallbackMessage;
  }
}
