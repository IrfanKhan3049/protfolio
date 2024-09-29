
class SessionHlper{

  setToken(token){
    localStorage.setItem('token', token);
    localStorage.setItem('loggedIn', "true");
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeToken(){
     localStorage.removeItem('token');
     localStorage.removeItem('loggedIn');
  }

}

export const {setToken, getToken,removeToken} = new SessionHlper();