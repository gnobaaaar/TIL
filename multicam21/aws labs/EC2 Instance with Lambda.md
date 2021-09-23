## Creating an EC2 Instance with Lambda in AWS



![000](images/000-1613546630244.PNG)





### Create EC2 Key Pair

Navigate to EC2.

In the navigation pane, under **NETWORK & SECURITY**, choose **Key Pairs**.

![1.choose_keypair](images/1.choose_keypair.PNG)



Choose **Create Key Pair**.



![2.create_keypair](images/2.create_keypair.PNG)



Enter a name for the new key pair (e.g., "LambdaEC2keypair") in the **Key pair name** field of the **Create Key Pair** dialog box, and then choose **Create**.

![2.create_keypair2](images/2.create_keypair2-1613546653069.PNG)



Save the private key file in a safe place. 

**Note**: Make sure you remember the name of your private key file and save it somewhere easily accessible.





### Create a Lambda Function

Navigate to Lambda.



![2.navigate_lamda](images/2.navigate_lamda-1613546661806.PNG)

Click **Create a function**.

![3.function_created2](images/3.function_created2-1613546697093.PNG)



Choose Author from scratch and use the following settings:

- *Name*: **CreateEC2**
- *Runtime*: **Python 3.7**
- *Role*: **Create a custom role**

Expand *Choose or create an execution role*.

Set *Execution role* to **Create a new role with basic Lambda permissions**.

![3.lamda_created](images/3.lamda_created-1613546702767.PNG)

CreateEC2-role-bv773fbr



Copy the execution role name that appears (it will be something like *CreateEC2-role-*). Paste it into a text file for use later in the lab.

Click **Create function**.

![3.lamda_created2](images/3.lamda_created2.PNG)



In a new browser tab, navigate to IAM.

![4.IAM](images/4.IAM-1613546714177.PNG)



Click **Roles** in the left-hand menu.

In the search box, type in the name of the role we just created.

![4.find_my_role](images/4.find_my_role.PNG)



Select the role.

Click the policy that's currently attached to the role.

![5.attach_policy](images/5.attach_policy.PNG)



Click **{} JSON**.



![5.attach_policy2](images/5.attach_policy2.PNG)

Click **Edit policy** > **JSON**.

![5.attach_policy3](images/5.attach_policy3.PNG)



Paste in the follwing policy:

```
{
  "Version": "2012-10-17",
  "Statement": [{
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Action": [
        "ec2:RunInstances"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```

![5.attach_policy4](images/5.attach_policy4.PNG)

Click **Review policy** and then **Save changes**.



![5.attach_policy5_review](images/5.attach_policy5_review.PNG)

![5.attach_policy5_review2](images/5.attach_policy5_review2.PNG)







Back in the Lambda console, refresh the page.

On the CreateEC2 function page, scroll down to the *Function code* section.

Paste in the Python source code from [this file](https://raw.githubusercontent.com/linuxacademy/content-lambda-boto3/master/Lab-Create-an-EC2-Instance-Using-Lambda/lambda_function.py) on GitHub.

```
import os
import boto3

AMI = os.environ['AMI']
INSTANCE_TYPE = os.environ['INSTANCE_TYPE']
KEY_NAME = os.environ['KEY_NAME']
SUBNET_ID = os.environ['SUBNET_ID']

ec2 = boto3.resource('ec2')


def lambda_handler(event, context):

    instance = ec2.create_instances(
        ImageId=AMI,
        InstanceType=INSTANCE_TYPE,
        KeyName=KEY_NAME,
        SubnetId=SUBNET_ID,
        MaxCount=1,
        MinCount=1
    )

    print("New instance created:", instance[0].id)
```

Click **Save**.



![6.source](images/6.source.PNG)







Scroll down to the **Environment variables** section.

![7.environment](images/7.environment.PNG)





Set the following environment variables:

- ```
  AMI
  ```

  - *Key*: **AMI**
  - *Value*: Open **EC2** in a new browser tab, click **Launch Instance**, and copy and paste the `ami` value listed after Amazon Linux 2.







- ```
  INSTANCE_TYPE
  ```

  - *Key*: **INSTANCE_TYPE**
  - *Value*: **t2.micro**

- ```
  KEY_NAME
  ```

  - *Key*: **KEY_NAME**
  - *Value*: The name of the EC2 key pair you created earlier.



![9-2](images/9-2.PNG)

- ```
  SUBNET_ID
  ```

  - *Key*: **SUBNET_ID**
  - *Value*: Navigate to **VPC** > **Subnets**, and copy and paste the ID of one of the public subnets in your VPC.



![9-3](images/9-3.PNG)

Save the Lambda function.



![7.environment2](images/7.environment2.PNG)

![9-4](images/9-4.PNG)



![9-5](images/9-5.PNG)

### Test Lambda Function

Click **Test**.

Define an empty test event. Its contents can simply be `{}`.

Give it any name you like.

Click **Create**.

![8.test1](images/8.test1.PNG)

![8.test2](images/8.test2.PNG)



Click **Test**.



![8.test3](images/8.test3.PNG)

Navigate to **EC2** > **Instances**, and observe that an EC2 instance is initializing.



