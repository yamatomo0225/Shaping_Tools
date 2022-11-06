'use strict';
function SEIKEI_FORTIGATE(){
    var RAW_LOG = document.getElementById('FORM_FORTIGATE').value;
    RAW_LOG = RAW_LOG.replace(/\"/g,'');
    var RAW_LOG_array = RAW_LOG.split(/(?<!:) /g);
    RAW_LOG_array[0] = RAW_LOG_array[0].replace(/-/g,'/');

    var LOG_FORTIGATE = {};
    for(var i=0;i<RAW_LOG_array.length;i++){
        LOG_FORTIGATE[RAW_LOG_array[i].match(/.*?(?=\=)/s)]= RAW_LOG_array[i].match(/(?<=\=).*/s);
    }
}