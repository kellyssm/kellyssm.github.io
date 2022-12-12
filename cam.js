var newsnum=document.getElementsByClassName('news_num');

var information = [
    {
        num:"31112",
        content:"[얼빡직캠 4K] 뉴진스 민지 'Hype Boy' (NewJeans MINJI Facecam)",
        agency:"뮤직뱅크",
        day:"2022. 8. 13.",
        site:"https://www.youtube.com/watch?v=p1cE9T0CFCQ"
    },
    {
        num:"31111",
        content:"[안방1열 직캠4K] 르세라핌 허윤진 'ANTIFRAGILE",
        agency:"인기가요",
        day:" 2022. 10. 23.",
        site:"https://www.youtube.com/watch?v=-aZfQorKgZg"
    },
    {
        num:"31110",
        content:"[안방1열 직캠4K] 에스파 카리나 'Black Mamba'",
        agency:"인기가요",
        day:"2020. 12. 14.",
        site:"https://www.youtube.com/watch?v=ZrlXHnUmGZM&list=PL-d0VDm1bctrZ-enj8DyUPaVJFdODh5rc&index=8"
    },
    {
        num:"31109",
        content:"[입덕직캠] 태연 직캠 4K 'INVU' (TAEYEON FanCam)",
        agency:"엠카운트다운",
        day:"2022. 2. 19.",
        site:"https://www.youtube.com/watch?v=f18v8CxaUfw"
    },
    {
        num:"31108",
        content:"[얼빡직캠 4K] 카라 박규리 'WHEN I MOVE'(KARA PARK GYURI Facecam)",
        agency:"뮤직뱅크",
        day:"2022. 12. 2.",
        site:"https://www.youtube.com/watch?v=JjT5ZsMW0Q4"
    },
    {
        num:"31107",
        content:"[얼빡직캠 4K] 레드벨벳 조이 'Birthday'(Red Velvet JOY Facecam)",
        agency:"뮤직뱅크",
        day:"2022. 12. 2.",
        site:"https://www.youtube.com/watch?v=3yCkb1Vo7Pk"
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