import 'reset-css';
import  './style.css'

function makeRequest(method, url) {
  return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response)
        }
        else {
            reject({
                status: this.status,
                statusText: xhr.statusText
            })
        }
      }
      xhr.onerror = function () {
        reject({
            status: this.status,
            statusText: xhr.statusText
        })
      }
      xhr.send()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  makeRequest('GET', 'http://localhost:7080/login/api/')
    .then(res => console.log(res))
    .catch(err => new Error(err))
})