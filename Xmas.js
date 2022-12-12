var newsnum=document.getElementsByClassName('news_num');

var information = [
    {
        num:"1",
        content:"벌써 크리스마스",
        agency:"케이윌, 소유 (SOYOU), 보이프렌드, 몬스타엑스",
        day:"2018.12.05",
        site:"https://www.melon.com/album/detail.htm?albumId=10229386"
    },
    {
        num:"2",
        content:"크리스마스라서",
        agency:"비투비",
        day:" 2014.12.22",
        site:"https://www.melon.com/album/detail.htm?albumId=2293456"
    },
    {
        num:"3",
        content:"Christmas Day",
        agency:"EXO",
        day:"2013.12.09",
        site:"https://www.melon.com/album/detail.htm?albumId=2219671"
    },
    {
        num:"4",
        content:"크리스마스니까",
        agency:"성시경, 박효신, 이석훈, 서인국, VIXX (빅스)",
        day:"2012.12.06",
        site:"https://www.melon.com/album/detail.htm?albumId=2168409"
    },
    {
        num:"5",
        content:"Made In Christmas (feat. 이수현 of 악동뮤지션)",
        agency:"잔나비",
        day:"2018.12.21",
        site:"https://www.melon.com/album/detail.htm?albumId=10235861"
    },
    {
        num:"6",
        content:"Merry & Happy",
        agency:"TWICE (트와이스)",
        day:"2017.12.11",
        site:"https://www.melon.com/album/detail.htm?albumId=10118955"
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