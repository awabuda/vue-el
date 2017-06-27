function store () {

};

store.prototype = {
  constructor: store,
  setLocal : function ( a ,b ) {
    if ( window.localStorage ) {
      localStorage.setItem( a, JSON.stringify(b) || "" );
    } else {
      console.log("尚未找到存储方法");
    }

  },
  getLocal: function (a) {
    return localStorage.getItem(a);
  },
  removeLocal: function (a) {
    localStorage.removeItem(a);
  },
  setSess: function (a , b) {
      if ( window.sessionStorage ) {
        sessionStorage.setItem( a, JSON.stringify(b)|| "" )
      }
  },
  getSessin: function  (a) {
    return sessionStorage.getItem(a);
  },
  removeSessin: function (a) {
    sessionStorage.removeItem(a);
  },
  setCookie: function  (name,value,ms){
    var expires = "";
      if (ms) {
          var date = new Date();
          date.setTime(date.getTime() + ms);
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/;";
  },
  getCookie: function ( name ) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return decodeURIComponent(arr[2]);
    } else {
        return '';
    }
  }
}

export default new store();
