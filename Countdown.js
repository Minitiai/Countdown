function OfflineCountdown() {
  let getTime=Math.round(new Date().getTime()/1000);          //当前时间戳(秒)
  //lasttime                                                  //上次时间戳(秒)
  //console.log("时间差"+Math.floor((getTime-lasttime)/300));  //n个五分钟向下取整
  OnlineCountdown (4,59);                                     //以五分钟为例
}

function OnlineCountdown (m,s) {
  let Ms=window.setInterval(function () {
    console.log(m+"——"+s)
    s--;
    if (s < 0) {                              //重置秒
      window.clearInterval(Ms);
      m--;s=59;
      if (m < 0) {                            //初始化
        OnlineCountdown (4,59);
      } else {                                //重置分
        OnlineCountdown (m,s);
      }
    }
  }, 1000);
}
