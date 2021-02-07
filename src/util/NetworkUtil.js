const doFetch = ({ url, requestObject, dataFn, errorFn, messageFn, loadingFn = null }) => {
  const request = new Request(url, requestObject)
  if (loadingFn !== null) { loadingFn(true) }
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
      if (loadingFn !== null) { loadingFn(false) }
    })
    .catch(error => {
      errorFn(true)
      messageFn(error.message)
      console.error(error)
    })
}

export default doFetch
