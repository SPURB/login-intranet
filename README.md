## Login da intranet São Paulo Urbanismo
Sistema para pegar dados dos funcionários da São Paulo Urbanismo.

## Para denvolver

### Pré-requisitos
 * Apache
 * Acesso à intranet às redes `emurbsp12410` e `spurbsp04`

### Setup:
```
# install
npm i

# dev
npm run dev

# build (prepara arquivos e api para http://host/login)
npm run build
```

## Como usar (em produção)
1. Acessar e incluir dados do usuário no localStorage
```
http://spurbsp163:7080/login/?redirect=http://spurbsp163:7080/participe-admin

```
> Os dados do usuário autenticado estarão disponíveis em `window.localStorage.getItem('user-spurb')`

2. Acessar, ir para determinada página com dados do usuário como url queries
```
http://spurbsp163:7080/login/?redirect=http://google.com&queries=true

```
> Os dados do usuário autenticado estarão disponíveis na url. Para acessá-los `window.location.search`

## Dados disponibilizados
```

```