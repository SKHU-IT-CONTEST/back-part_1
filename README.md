# back-part_1 202214043 윤준석 junseok0304
LMS notice crawl API by nodejs
---
## server : Oracle Free Tier server , ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-1018-oracle x86_64) 춘천서버
### nodejs, express, superagent, cheer-io, pm2
### crawl resource : https://lms.skhu.ac.kr/ilos/community/notice_list_form.acl
### API Address(!!Do not use for any other purpose!!): https://api3.skhuweather.kro.kr/schoolNotice
---
# API info
## Request
``` GET /api/schoolNotice HTTP/1.1
Auth : Not require.
Host: https://api3.skhuweather.kro.kr/api/schoolNotice
Remote Address : 146.56.106.124:443 (oracle server)
```
## Response 304 OK
``` HTTP/1.1 304 OK
Content-Type: application/json; charset=utf-8
Content-Length: 825(can changed)

{
    "0": {
        "num": 660127,
        "title": "[도서관] 9/19~10/3. 2022 북적북적 시즌2 참여 안내"
    },
    "1": {
        "num": 659369,
        "title": "컴퓨터공학/소프트웨어공학/정보통신공학/인공지능전공 LMS 어울림 Class 안내"
    ... 내용 생략 ...
    },
    "7": {
        "num": 660142,
        "title": "휴학/자퇴 신청 시, 소속학부 학부장님과 면담 진행해 주세요."
    }
} 
```
---
< 실제 API 서버에서 반환해주는 모습 >
![스크린샷 2022-10-10 오후 1 22 03](https://user-images.githubusercontent.com/83647215/194798951-0a7115c2-4e17-4ac0-9c56-e68e2ad100a4.png)
---
< 오라클 프리티어 서버 인스턴스 구동 모습 >
<img width="1429" alt="스크린샷 2022-10-10 오후 1 50 23" src="https://user-images.githubusercontent.com/83647215/194800795-dfc7f5cc-67ed-4f6f-8290-97a0d37df34d.png">
---
< 구동중인 서버 파일 구조 /var/skhu >
---
![스크린샷 2022-10-10 오후 1 52 19](https://user-images.githubusercontent.com/83647215/194800925-c86eacd1-ab9a-42c2-88f7-ef5bddfa2bb0.png)
---
< pm2로 구동중인 프로세스 >
![스크린샷 2022-10-10 오후 1 51 43](https://user-images.githubusercontent.com/83647215/194800894-f921071b-aaaf-490f-8ca3-c21704890a4b.png)
---
< API 도메인 구성, api3.skhuweather.kro.kr 서브 도메인 kro.kr 이용 >
![스크린샷 2022-10-10 오후 2 31 30](https://user-images.githubusercontent.com/83647215/194803747-8a91bebc-7e19-49dd-8482-17df8078d99a.png)

---
