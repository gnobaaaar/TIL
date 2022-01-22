## VPC

![image-20210215102750026](C:\Users\eumde\AppData\Roaming\Typora\typora-user-images\image-20210215102750026.png)

**Monitoring network traffic** is a critical component of security best practices to **meet compliance requirements**, **investigate security incidents**, **track key metrics**, and **configure automated notifications**. **AWS VPC Flow Logs** captures information about the **IP traffic going to and from network interfaces in your VPC**. In this hands-on lab, we will set up and use VPC Flow Logs published to **Amazon CloudWatch**, create custom metrics and alerts based on the CloudWatch logs to **understand trends and receive notifications for potential security issues**, and use **Amazon Athena** to **query and analyze VPC Flow Logs stored in** **S3**.



### VPC Flow Log

VPC의 네트워크 인터페이스에서 전송되고 수신되는 IP 트래픽에 대한 정보를 수집할 수 있는 기능 (REJECT, ACCEPT)

VPC 또는 서브넷의 각 네트워크 인터페이스 모니터링

●[집계 간격](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/flow-logs.html)

●[기본 형식](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/flow-logs.html)

●[사용자 지정 형식](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/flow-logs.html)

●[사용 가능한 필드](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/flow-logs.html)



![image-20210215102829902](C:\Users\eumde\AppData\Roaming\Typora\typora-user-images\image-20210215102829902.png)



### Cloud Watch

![image-20210215102933503](C:\Users\eumde\AppData\Roaming\Typora\typora-user-images\image-20210215102933503.png)



![image-20210215102950679](C:\Users\eumde\AppData\Roaming\Typora\typora-user-images\image-20210215102950679.png)



### Athena

SQL과 유사한 쿼리문을 바탕으로 한 analytics 서비스

interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL

![image-20210215103025036](C:\Users\eumde\AppData\Roaming\Typora\typora-user-images\image-20210215103025036.png)

![image-20210215103028449](C:\Users\eumde\AppData\Roaming\Typora\typora-user-images\image-20210215103028449.png)

![image-20210215103031572](C:\Users\eumde\AppData\Roaming\Typora\typora-user-images\image-20210215103031572.png)





