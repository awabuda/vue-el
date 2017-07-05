 function gLocation ( ) {

 };


 gLocation.prototype = {
   constructor:gLocation,
   old:{

   },

   success: function () {

   },

   error:function () {

   },
   getH5Location : function (cb,old) {
     if ( window.navigator && window.navigator.geolocation ){
       window.navigator.geolocation.getCurrentPosition(function (res) {
         alert(res)
       },function (error) {
        alert(2+'---'+error)
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log('请授权')
            break;
          case error.POSITION_UNAVAILABLE:
              console.log('无法获取')
            break;
          case error.TIMEOUT:
            console.log('请求超时')
            break;
          case error.UNKNOWN_ERROR:
            console.log('不可预知')
            break;
           default:
            console.log('其他'+ error)

         }
       },{
        enableHighAccuracy: false,
        timeout: 3000
       })


     } else {
       console.log('暂不支持定位')
     }
   }
 };


 export default new gLocation();
