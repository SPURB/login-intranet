const makeRequest = (method, url) => {
  return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            resolve(JSON.parse(xhr.response))
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

const toggleClassById = (idName, className) => document.getElementById(idName).classList.toggle(className)

const displayError = (err, message) => {
  const element = document.getElementById('message')
  element.innerText = `${message} \n${err.statusText}`
  document.body.classList.add('error')
  toggleClassById('user', 'hidden')
  toggleClassById('reload', 'hidden')

  const reloader = document.getElementById('reload')

  reloader.addEventListener('click', event => {
    toggleClassById('reload', 'rotate')
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  })
}

const redirect = (location, user) => {
  const getParameterByName = query => {
    const match = RegExp('[?&]' + query + '=([^&]*)').exec(location)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
  }

  let queries = []

  if (getParameterByName('redirect')) {
    const redirectBasePath = getParameterByName('redirect')
    queries.push(redirectBasePath)

    for (const key in user) {
      const data = user[key]
      if (data) {
        queries.push(`${key}=${data}`)
      }
    }
    const outputQueries = queries
      .map(query => {
        query.trim()
        return query + '/?'
      })
      .join('')

    window.location = outputQueries
  }
}

const setAndDisplayUser = user => {
  user.createdAt = new Date()
  user.picture = `http://emurbsp12410/sp_urbanismo/rh/pessoal/${user.NR_PRONTUARIO.replace(/\s/g, '')}.jpg`
  localStorage.setItem('user-spurb', JSON.stringify(user))

  toggleClassById('user', 'hidden')

  const profile = document.getElementById('profile__image')
  profile.setAttribute('src', user.picture)

  toggleClassById('profile', 'hidden')

  const message = document.getElementById('message')
  message.innerText = `Olá ${user.NM_NOME}`

  redirect(window.location.search, user) // see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
}

document.addEventListener('DOMContentLoaded', () => {
  makeRequest('GET', 'http://spurbcp13343/login-intranet/api/')
  .then(ntlmUser => {
    makeRequest('GET', `http://spurbsp04/usuario/ws/localizacao?NM_PRODAM=${ntlmUser.nprodam}`)
        .then(users => {
          users.length ?
          setAndDisplayUser(users[0]) :
          displayError({ status: 0, statusText: 'Tente novamente'}, 'Erro!\nUsuário inválido')
        })
        .catch(err => displayError(err, 'Erro!\nTente novamente'))
    })
    .catch(err => displayError(err, 'Erro!\nTente novamente'))
})