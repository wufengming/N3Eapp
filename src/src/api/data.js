export const ERR_OK = 200;

export function getSearchresult(me) {
  const url = '/search/results'
  return me.getAxios(url,{})
}

export function getCategory(me) {
  const url = '/category'
  return me.getAxios(url,{})
}

export function getIndexbanner(me) {
  const url = '/indexbanner'
  return me.getAxios(url,{})
}

export function getIconlist(me) {
  const url = '/iconlist'
  return me.getAxios(url,{})
}

export function getTypelist(me) {
  const url = '/typelist'
  return me.getAxios(url,{})
}

export function getSmBanner(me) {
  const url = '/smallbanner'
  return me.getAxios(url,{})
}

export function getIndexNav(me) {
  const url = '/indexnav'
  return me.getAxios(url,{})
}

export function getBanner(me) {
  const url = '/banner'
  return me.getAxios(url,{})
}

export function getInterests(me) {
  const url = '/interests'
  return me.getAxios(url,{})
}
export function getQuestions(me) {
  const url = '/questions'
  return me.getAxios(url,{})
}

export function getTuhao(me) {
  const url = '/tuhao'
  return me.getAxios(url,{})
}

export function getChina(me) {
  const url = '/china'
  return me.getAxios(url,{})
}

export function getLists(me) {
  const url = '/lists'
  return me.getAxios(url,{})
}