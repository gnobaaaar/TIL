## MongoDB



공개키 획득 -> 리스트 파일생성 -> 몽고DB설치 -> 확인



### about

- **패키지 관리자를 통해 설치한 경우,** **/var/lib/mongodb**와 **/var/log/mongodb**를 생성되고 여기서 라이브러리와 로그를 확인할 수 있습니다.

- **다른 DB와 마찬가지로 MongoDB도 사용자 계정을 사용해 실행됩니다. 따라서 사용자가 바뀌면 데이터 디렉토리에 대한 권한도 수정하여** **엑세스 권한**을 부여해야합니다.

- **설정 파일은 DB가 시작될 때 적용됩니다. 따라서** **변경사항이 있다면 DB를** **재시작**해야합니다.





사용자의 init 시스템에 따라 DB를 실행하는 명령이 다르다

![init주의](images/init%EC%A3%BC%EC%9D%98-1612425054666.PNG)







**MongoDB 실행 및 상태 확인 명령어** **(systemd : systemctl)**













### 설치

설치 공식가이드

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

서비스 관련 오류 가이드

https://jipro.tistory.com/45





참조 : [우분투(Ubuntu)에 몽고디비(MongoDB) 설치하는 법과 오류 해결 방법 · Tonic (jwgo.kr)](https://devlog.jwgo.kr/2019/02/26/how-to-install-mongodb-on-ubuntu/)