const cheerio = require('cheerio');
const axios = require("axios");
const fs = require('fs');
axios({
    url: 'https://lms.skhu.ac.kr/ilos/community/notice_list.acl',
    method: 'POST',
    responseType: 'json',
    headers :{
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70",
        'Host': "lms.skhu.ac.kr",
        'Origin': "https://lms.skhu.ac.kr",
        'Referer': "https://lms.skhu.ac.kr/ilos/community/notice_list_form.acl"
    },
    data:{"SCH_KEY": "T",
    "SCH_TARGET":"",
    "SCH_VALUE" : "",
    "start": "1",
    "encoding": "utf-8" }
}).then((res)=>{
    const $ = cheerio.load(res.data);
    var data = {};
    var i;
    for(i = 0; i < 3; i++){
        var tmp={};
        tmp["num"] = Number($('body > table > tbody > tr:nth-child('+ (i+1).toString() +') > td.left > a.site-link').attr('href').split("ARTL_NUM=")[1].split("&")[0]);
        tmp["title"] = $('body > table > tbody > tr:nth-child('+ (i+1).toString() +') > td.left > a.site-link').text() ;
        data[i] = tmp;
    }
    i = 0;
    var tmp_i = 1;
    while(i < 5){
        var tmp={};
        if($("body > table > tbody > tr:nth-child("+ tmp_i +") > td:nth-child(1)").text().trim().length < 1){
            tmp_i++;
            continue;
        }
        
        tmp["num"] = Number($('body > table > tbody > tr:nth-child('+ (tmp_i).toString() +') > td.left > a.site-link').attr('href').split("ARTL_NUM=")[1].split("&")[0]);
        tmp["title"] = $('body > table > tbody > tr:nth-child('+ (tmp_i).toString() +') > td.left > a.site-link').text() ;
        data[i+3] = tmp;
        tmp_i++;
        i++;
        
    }
    fs.writeFileSync("test.json", JSON.stringify(data, null, 1));
}).catch(error=>{
    console.log(error);
    throw new Error(error);
});