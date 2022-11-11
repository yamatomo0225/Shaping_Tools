'use strict';
function SEIKEI_FORTIGATE(){
//連想配列に格納する
    var RAW_LOG = document.getElementById('FORM_FORTIGATE').value;
    RAW_LOG = RAW_LOG.replace(/\"/g,'');
    var RAW_LOG_array = RAW_LOG.split(/(?<!:) /g);
    RAW_LOG_array[0] = RAW_LOG_array[0].replace(/-/g,'/');


    var LOG = {};
    for(var i=0;i<RAW_LOG_array.length;i++){
        LOG[RAW_LOG_array[i].match(/.*?(?=\=)/s)]= RAW_LOG_array[i].match(/(?<=\=).*/s);
    }
    console.log(RAW_LOG_array)

//ログ確認する際によく見る内容だけ抽出表示　見づらいので後で調整予定？
    document.getElementById("extract").innerHTML = `日時:${LOG.date} ${LOG.time}<br>severity:${LOG.severity}<br>attack:${LOG.attack}<br>action:${LOG.action}<br>通信経路${LOG.srcip}(Port:${LOG.srcport}) → ${LOG.dstip}(Port:${LOG.dstport}) `;
       
//ログの内容を全て表示
    var ALL_LOG = '';
    RAW_LOG_array.forEach(value=> ALL_LOG +=`<li>${value}</li>`)
    document.getElementById("ALL_LOG").innerHTML = ALL_LOG;
}