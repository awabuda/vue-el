function gLocation ( ) {

};


gLocation.prototype = {
  constructor:gLocation,
  old:{

  },
  _ajax:null,
  success: function () {
    // 经纬度拿取到；并且cityInfo 接口调用成功
  },

  error:function ( obj ) {
    // 经纬度拿取不到
  },
  getCityInfo : function ( position ) {
    var _this = this;
    if ( !position.latitude || position.longitude ){
      _this.error({
        errorType:'定位功能不可用'
      })
      return false;
    }
    // 如果执行到下面说明 经纬度已经拿到
    if ( _this._ajax ) _this._ajax.abort();
    _this._ajax =  _this.$https.get('',{

    }).then(function () {
      console.log('请求成功')
    },function (res) {
      console.log("城市接口请求失败")
    })
  },
  getWxLocation: function (){
    var _this =  this;
    if ( window.wx ) {// 需要引入微信的jssdk；并进行微信的授权
        wx.run('getLocation',{
          type:"gcj02", // 默认为wgs84的gps坐标，火星坐标，可传入'gcj02'
          timeout:3000,
          seucess: function (position) {
            // 接口调用成功  此时应该已经拿到经纬度了
            _this.getCityInfo(position);
          },
          fail: function () {
            // 接口 调用失败
          },
          complete: function () {
            // 不管成功或者失败都会调用此处
          }
        })
    } else {
      _this.getH5Location();
    }
  },
  getQQLocation: function () {
    var _this = this;
    if (!window.qqmap_geolocation) { // qq定位
        if (window.qq) {
            window.qqmap_geolocation = new qq.maps.Geolocation("4BCBZ-OGQWX-3PE4P-ZNP3C-EU77E-QGF3Z", "ewhtml5");
        } else {
            this.getH5Location();
            return;
        }
    }
    window.qqmap_geolocation.getLocation(function(position) {
      _this.getCityInfo(position);
    },function (res) {
      // 获取经纬度信息错误
      _this.getH5Location();
    })

  },
  getH5Location : function (cb,old) {
    // 浏览器 h5 定位
    if ( window.navigator && window.navigator.geolocation ){
      window.navigator.geolocation.getCurrentPosition(function (position) {
         console.log(position.coords.latitude)
         //console.log(position.coords.longitude);请求
         //去拿经纬度进行位置
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
       //退化逻辑是啥
    }
  }
};


 export default new gLocation();
