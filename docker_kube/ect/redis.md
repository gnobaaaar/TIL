## redis



### 개념

**NOSQL**의 한 종류**(key-value) 구조** 

데이터 관리 시스템모든 데이터를 메모리에 저장하고 조회하기에 빠르다

Read, Write 속도를 보장하는 **비 관계형 데이터베이스**

키-값 구조 데이터베이스 1위 

라이센스의 문제가 있는 오라클보다는 redis가 나을 수도..

(**[**Ranking**](https://db-engines.com/en/ranking/key-value+store)**)





### 설치

![설치1](images/%EC%84%A4%EC%B9%981.PNG)

![설치2](images/%EC%84%A4%EC%B9%982.PNG)



### 명령어

redis 포트 오픈 확인 : netstat -nlpt

- redis 포트 오픈 확인 : 실패 : net-tools를 update하여 netstat 얻기

설치된 redis에 접속 : redis-cli 

conf 위치 : /etc/redis/redis.conf데이터베이스 저장 위치 : /var/lib/redis/dump.rdb





***redis 특징 정리 velog

[Redis 란 무엇일까? (velog.io)](https://velog.io/@hyeondev/Redis-란-무엇일까)