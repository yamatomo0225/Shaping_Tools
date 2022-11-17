'use strict';
function SEIKEI_FORTIGATE(){
//連想配列に格納する
    var RAW_LOG = [...document.getElementById('FORM_FORTIGATE').value.matchAll(/\b\w+=(".*?"|[^" ]+)/g)].map(m => m[0]);
    for(var i=0; i<RAW_LOG.length; i++){
        RAW_LOG[i] = RAW_LOG[i].replace(/"/g,'');
      }

    console.log(RAW_LOG)
    var LOG = {};
    for(var i=0;i<RAW_LOG.length;i++){
        LOG[RAW_LOG[i].match(/.*(?==)/s)]= RAW_LOG[i].match(/(?<==).*/s);
    }
//console.log(LOG)

//ログ確認する際によく見る内容だけ抽出表示　見づらいので後で調整予定？
    const exLOG = `日時:${LOG.date} ${LOG.time}<br>severity:${LOG.severity}<br>attack:${LOG.attack}<br>action:${LOG.action}<br>通信経路${LOG.srcip}(Port:${LOG.srcport}) → ${LOG.dstip}(Port:${LOG.dstport}) <br>${LOG.log_id}`
    document.getElementById("extract").innerHTML = exLOG;
       
//ログの内容を全て表示
    var ALL_LOG = '';
    RAW_LOG.forEach(value=> ALL_LOG +=`<li>${value}</li>`)
    document.getElementById("ALL_LOG").innerHTML = ALL_LOG;
}


function Call_Template () {
    // プルダウン１で顧客名
    // プルダウン２でテンプレート選択
    // プルダウン１と２を読み込む
    // 読み込んだ結果からテンプレートを選択
    // メール本文テキストエリアにテンプレートを出力
}


function made_mail () {
    // テキストエリアから抽出
    // 連想配列から抽出した文字列を置換
    // メール本文テキストエリアに置換後を出力
}