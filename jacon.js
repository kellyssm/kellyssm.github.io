var newsnum=document.getElementsByClassName('news_num');

var information = [
    {
        num:"31112",
        content:"[르세라핌컴퍼니] EP 1. 진짜 컴퍼니 맞냐구요? 그게 그러니까..🙄 #귀여우면_컨펌완료😇",
        agency:"LE SSERAFIM",
        day:"2022. 7. 19.",
        site:"https://www.youtube.com/watch?v=IME5k8DOO6Y"
    },
    {
        num:"31111",
        content:"여기 동아리는 내가 접수하겠네 😎💥 | 모여봐요 DREAM SQUAD",
        agency:"NCT DREAM",
        day:" 2022. 6. 10.",
        site:"https://www.youtube.com/watch?v=wsGEblQ4PJE"
    },
    {
        num:"31110",
        content:"[GOING SEVENTEEN] EP.31 순응특집 단짝 #1 (Best Friends #1)",
        agency:"SEVENTEEN",
        day:"2021. 11. 17.",
        site:"https://www.youtube.com/watch?v=T5etCb0-pO0&t=5s"
    },
    {
        num:"31109",
        content:"Run BTS! 2022 Special Episode - 'RUN BTS TV' On-air Part 1",
        agency:"BTS",
        day:"2022. 11. 22.",
        site:"https://www.youtube.com/watch?v=7ddN2icSFRA"
    },
    {
        num:"31108",
        content:"백현이 플레이리스트 공개!｜추석 귀성길 플레이리스트",
        agency:"EXO",
        day:"2022. 9. 9.",
        site:"https://www.youtube.com/watch?v=8RT9DwyCfq0"
    },
    {
        num:"31107",
        content:"백현이의 브이로그 (큥쿠아리움홍보대사/나른나른/내려와밤비밤비/밤비지압)”",
        agency:"백현 Beakhyen",
        day:"2021. 4. 9.",
        site:"https://www.youtube.com/watch?v=XNlRQGkJ1y0&t=297s"
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