import Vue from 'vue'

Vue.filter('hhmmss', function (time) {
    let hh = Math.floor(time / 3600);
    let mm = Math.floor((time - (hh * 3600)) / 60);
    let ss = time - (hh * 3600) - (mm * 60);
  
    hh = hh < 10 ? `0${hh}`: hh;
    mm = mm < 10 ? `0${mm}`: mm;
    ss = ss < 10 ? `0${ss}`: ss;
    
    return `${hh}:${mm}:${ss}`;
  });