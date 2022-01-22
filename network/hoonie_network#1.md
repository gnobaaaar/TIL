> 후니의 네트워크 읽은 것 천천히 정리(노트로 작성되어 뒤죽박죽)

<br/>

# Part 2 네트워크와 케이블

LAN : local Area Network

Ethernet(이더넷) : 네트워킹의 한 방식

<br/>

**토큰링** : 토큰을 가진 PC만이 네트워크에 데이터를 실어보낼 수 있다

<br/>

### 논리적인 망분리

<br/>

### MAC 주소

- ip주소 -> mac주소 (`ARP(Address Resolution Protocol)`)
- **같은 네트워크 안의 PC만이 브로드캐스트를 받을 수 있다**
- 요청이 오면 Router 자신의 mac주소를 알려준다!
- 48bit = 6옥텟
  - 앞의 24bit는 제조사, 뒤의 24bit는 고유번호 -> (일단은) 바꿀 수 없다

<br/><br/>

### TCP/IP

인터넷에서 사용하는 통신규약

**전송 계층의 TCP(Transmission Control Protocol)**

**네트워크 계층의 IP(Internet Protocol)**

<br/>

### LAN

- Local Area Network
- 종류
  - **Wireless LAN** -> 프로토콜(**이더넷 프로토콜**, IEEE 802.3)
  - **Wired LAN(무선랜)** = WLAN -> 프로토콜(**WIFI**, IEEE802.11)🤔

<br/>

### WAN, PAN

Wide Area Network

Personal Area Network -> 블루투스

<br/><br/>

### Ethernet

- CSMA/CD (Carrier,신호 Sense with Collison Detection)

<br/>

> 패킷은 비트들의 모임이다

<br/>

<br/>

<br/>

## OSI 7 계층

![img](image/995EFF355B74179035.jpeg)

<br/>

### Open Sysytem Interconnetcion 7 Layer Architecture

- L5 : 어플리케이션, 프레젠테이션, 세션 
- L4 : 트랜스포트(전송)
- L3 : 네트워크 - 라우터
- L2 : 데이터링크 - 스위치, 브릿지
- L1 : 피지컬 - 모뎀, 데이터케이블, 허브

<br/>

**L4 세그먼트 -> L3 세그먼트 + 헤더(IP) -> L2 패킷 + 헤더(MAC) -> L1**

L2에서 라우터A(게트웨이)의 MAC주소를 붙인다

MAC주소는 Physical Address

브로드캐스킹된 것을 라우터가 캐치

<br/>

<br/>

## TCP/IP



