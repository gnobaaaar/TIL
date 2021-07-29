# AWS Builders Online 2020

* #TIL/aws

## 최적화 된 AWS 비용 구조 만들기

비용최적화는 반드시 필요하다 -> 클라우드의 경제적인 장점이 곧 클라우드 사용의 이유

![952C292F-BB24-4753-B9B3-AA9B73253F74](/var/folders/mg/cf4xh05s30q1pq7rlxcsgwwh0000gn/T/net.shinyfrog.bear/BearTemp.dYnIOL/952C292F-BB24-4753-B9B3-AA9B73253F74.png)


1. 비용에 대한 가시성, 이해도 높이기

![FC765A52-7F0D-4632-944B-48A4391898B5](/var/folders/mg/cf4xh05s30q1pq7rlxcsgwwh0000gn/T/net.shinyfrog.bear/BearTemp.jKmj9j/FC765A52-7F0D-4632-944B-48A4391898B5.png)

Cost Explorer : 직접 필터링을 통해 확인이 가능하다(가장 추천)

AWS Budge
설정한 금액이나 양이 넘어서면 알람이 날아오게 된다

Cost Allocation Tags
태그를 사용하여 분류를 기준하여 리소스를 필터링 할 수 있다


2. 비용 최적화 방법

![7B378735-EBF8-4D99-AA60-3A3DE381F126](/var/folders/mg/cf4xh05s30q1pq7rlxcsgwwh0000gn/T/net.shinyfrog.bear/BearTemp.wZIxo3/7B378735-EBF8-4D99-AA60-3A3DE381F126.png)

Scheduling : CloudFormation
RIs and SPs : aws의 가격정책

*리소스에 알맞는 사이즈의 인스턴스 사용*
Right Sizing : 가장 저렴한 인스턴스의 선택
CloudWatch 지표확인
Cost explorer 추천 받기
Compute optimizer 활용

*탄력적인 리소스 운영*
인스턴스를 탄력적으로 운영(시간 조정)하여 비용 최적화
AWS Instance Scheduler를 사용하여 인스턴스의 중지 및 시간을 쉽게 지정 가능
서드파티 툴의 사용도 가능하다

*AWS 가격정책 사용 - 단위비용감소*
단위당 비용을 점진적으로 줄여가는 것을 추천

![54636F4B-5DF3-4F01-92EC-72F8A79D9ACF](/var/folders/mg/cf4xh05s30q1pq7rlxcsgwwh0000gn/T/net.shinyfrog.bear/BearTemp.oECWPD/54636F4B-5DF3-4F01-92EC-72F8A79D9ACF.png)


3. 알맞은 Storage Class 사용

![AA46EF87-8073-493D-8AAA-437B770D82DC](/var/folders/mg/cf4xh05s30q1pq7rlxcsgwwh0000gn/T/net.shinyfrog.bear/BearTemp.Bqwpz5/AA46EF87-8073-493D-8AAA-437B770D82DC.png)

수명주기정책과 intelligent tiering의 사용

4. 비용관리 메커니즘 만들기

![1F691EF2-1D04-4087-ADD9-1FC78D76692F](/var/folders/mg/cf4xh05s30q1pq7rlxcsgwwh0000gn/T/net.shinyfrog.bear/BearTemp.OINw9o/1F691EF2-1D04-4087-ADD9-1FC78D76692F.png)

비용에 대한 이해 -> 기술과 재정부문의 파트너쉽 -> 비용관리 방법들의 적용 -> 
최적화부문들의 지표 설정 및 추적 -> 리더쉽 레벨의 관리

