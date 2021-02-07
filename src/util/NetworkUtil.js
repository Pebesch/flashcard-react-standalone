const doFetch = ({ url, requestObject, dataFn, errorFn, messageFn }) => {
  const request = new Request(url, requestObject)
  fetch(request)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${'Application encountered a problem'}: ${response.status}`)
      }
    })
    .then(json => {
      dataFn(json)
      errorFn(false)
      messageFn('')
    })
    .catch(error => {
      errorFn(true)
      messageFn(error.message)
      console.error(error)
    })
}

export default doFetch
