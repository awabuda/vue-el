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
    return JSON.parse( localStorage.getItem(a) || {} ) || {};
  },
  setSess: function (a , b) {
      if ( window.sessionStorage ) {
        sessionStorage.setItem( a, JSON.stringify(b)|| "" )
      }
  },
  getSessin: function  (a) {
    return sessionStorage.getItem(a) || {};
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
