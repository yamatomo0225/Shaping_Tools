'use strict';

function SEIKEI_FORTIGATE(){
    const FORM_FORTIGATE = [];
    
    var RAW_LOG = document.getElementById('FORM_FORTIGATE').value;
    RAW_LOG.innerHTML = RAW_LOG
    var CONTENTS_OF_LOG_FORTIGATE = FORM_FORTIGATE.map(/(?<=\=\").+?(?=\" )|(?<=\=)[0-9].*?[0-9]?(?= )/g);

    FORM_FORTIGATE = FORM_FORTIGATE.replace(//g,`\"${/(?<=\=)[0-9].*?[0-9]?(?= )/,g}\"`);
    
    //FORM_FORTIGATE.map( );
    //""で囲まれた内容を抽出するために""を付与している。
    //var category_of_LOG_FORTIGATE = LOG_FORTIGATE.map();                                                 
    //document.getElementById('after').innerHTML = LOG_FORTIGATE.join('<br>') 
    //console.log(contents_of_LOG_FORTIGATE)
    }