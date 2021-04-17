import qs from 'querystring'

export function httpGet(url) {
  const result = fetch(`http://localhost:3200${url}`).then((response) => {
    console.log(response);
    // 加一些处理
    return response;
  });
  return result;
}

export function httpPost(url, data) {
  const result = fetch(`http://localhost:3200${url}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.stringify(data)
  })

  return result;
}