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
```json
{
  "ID_EMPRESA":"001",
  "NR_PRONTUARIO":"5914",
  "NR_PRONT":5914,
  "NM_NOME":"THOMAS LEN YUBA",
  "ID_CC":241,
  "NM_SETOR":"GPU-GER PLANEJ PROJ URBANOS",
  "NM_CARGO":"ASSESSOR",
  "DT_AFASTAMENTO":null,
  "DT_RESCISAO":null,
  "NM_EIXO_ATIVIDADE":"",
  "NM_LOGIN":"tlyuba",
  "NM_EMAIL":"tlyuba@spurbanismo.sp.gov.br",
  "CD_RAMAL":"7533",
  "DT_ALTERACAO":"2014-10-06T16:07:00",
  "NM_ALTERACAO":"5065",
  "NM_SENHA":null,
  "NM_PRODAM":"e059145",
  "NM_DESTINO":"SP-URBANISMO",
  "NR_PRONT_NOVO":null,
  "DT_NASCIMENTO":null,
  "NM_SEXO":"",
  "NM_ORGAO":null,
  "NM_REGISTRO_ORGAO":null,
  "NM_FORMACAO":null,
  "createdAt":"2020-03-18T20:57:23.360Z",
  "picture":"http://emurbsp12410/sp_urbanismo/rh/pessoal/5914.jpg"
}
```
