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
    console.log(LOG)

//ログ確認する際によく見る内容だけ抽出表示
    document.getElementById("extract").innerHTML = `${LOG.date} ${LOG.time}<br>${LOG.severity}<br>${LOG.attack}<br>${LOG.action}<br>${LOG.srcip}(Port:${LOG.srcport}) → ${LOG.dstip}(Port:${LOG.dstport}) `;
   
//ログの内容を全て表示
    var tbody = document.getElementById('tbodyID');
    for(var i=0;i<LOG.length;i++){
        var tr = document.createElement('tr'); 
        for (var j = 0; j < 2; j++) {
          var td = document.createElement('td');
          td.innerHTML = 'こんにちは' + j;
          tbody.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}