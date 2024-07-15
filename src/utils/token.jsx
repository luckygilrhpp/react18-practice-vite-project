//封装 token 的获取与存储 删除 相关方法

const TOKENKEY = 'token_key'
function setToken(){
localStorage.setItem(TOKENKEY,token)

}
function getToken(){
  return localStorage.getItem(TOKENKEY)
}
function removeToken(){
localStorage.removeItem(TOKENKEY)
}

export {setToken,getToken,removeToken}
