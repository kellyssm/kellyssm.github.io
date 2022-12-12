var newsnum=document.getElementsByClassName('news_num');

var information = [
    {
        num:"31112",
        content:"뉴진스, 하반기 케이팝 아이돌 시장 휩쓸다",
        agency:"[쿠키뉴스]",
        day:"2022-11-27 20:47:30",
        site:"https://www.kukinews.com/newsView/kuk202211270050"
    },
    {
        num:"31111",
        content:"소녀리버스 공개연기, 버추얼 아이돌 데뷔 '삐걱'",
        agency:"[국제뉴스]",
        day:"2022-11-28 12:20",
        site:"https://www.gukjenews.com/news/articleView.html?idxno=2602138"
    },
    {
        num:"31110",
        content:"음악 시상식은 아이돌 잔치? 임영웅이 해냈다",
        agency:"[쿠키뉴스]",
        day:"2022-11-26 22:59:36",
        site:"https://www.kukinews.com/newsView/kuk202211260023"
    },
    {
        num:"31109",
        content:"LG유플러스, 아이돌플러스로 컨텐츠 사업 강화",
        agency:"[NPS통신뉴스]",
        day:"2022-11-28 08:50",
        site:"http://www.nspna.com/news/?mode=view&newsid=606508"
    },
    {
        num:"31108",
        content:"'아이돌 4세대로 간판교체'…엔터 대장주도 바뀔까",
        agency:"[한국경제]",
        day:"2022.11.16 16:20",
        site:"https://www.hankyung.com/finance/article/2022111506376"
    },
    {
        num:"31107",
        content:"아이돌 오메가엑스 “소속사 대표가 상습 폭언·성추행”",
        agency:"[한겨레]",
        day:"2022-11-17 12:11",
        site:"https://www.hani.co.kr/arti/society/society_general/1067655.html"
    }

]
for(var i=0; i<information.length; i++){
    var newsinfo=''
    var info=information[i];
    newsinfo="<td>"+info.num+"</td>"
    +"<td style='width:500px'><a href='"+info.site+"' style='text-decoration:none; color: black;'>"+info.content+"</a></td>"
    +"<td>"+info.agency+"</td>"
    +"<td>"+info.day+"</td>";
    newsnum[i].innerHTML=newsinfo;
}