## 01. 파이썬 기초문법



`vscode` -> `extension`



- 변수, 함수명는 소문자 명사를 사용해서 스케이크케이스
- 클래스명은 대문자로 시작. 카멜케이스 사용
- 숫자로 시작할 수 없다
- 키워드는 식별자로 사용 못한다



- `format() 함수` : 숫자와 문자열을 다양한 형태로 출력
- `upper() 및 lower() 함수` : 문자열의 알파벳을 대문자 혹은 소문자로 변경
- `strip() 함수` : 문자열 양옆의 공백 제거
- `find() 함수` : 문자열 내부에 특정 문자가 어디에 위치하는지 찾을 때 사용
- `in 연산자` : 문자열 내부에 어떤 문자열이 있는지 확인할 때 사용
- `split() 함수` : 문자열을 특정한 문자로 자를 때 사용



github : python_workshop repository 01.todos.py 작성해보기

리팩토링 -> 기존의 기능과 같지만 재사용 가능한 형태로 작성

{"todoNum":todoNum, "title":title} 데이터 등록, 수정, 삭제, 일정목록, 전체삭제 기능



## 02. 딕셔너리 프로그램

```python
#todoList
#todos.py

print("====== 투두 리스트 프로그램 ======")

todos = {}
index=0
# print('{0}번 : {1}', key, value)

while True:
    print("1.등록\t 2.수정\t 3.삭제\t 4.일정목록\t 5.전체삭제\t 6.종료")
    num = int(input("메뉴를 선택하세요: \n"))
    if num==6:
        print("프로그램이 종료되었습니다\n")
        break
    elif num==1:
        index += 1
        todos_value = str(input("할 일 : ")) 
        todos[index] = todos_value
        print("추가되었습니다 \n")

    elif num==3:
        index_tmp = int(input("삭제할 일정 번호 입력 : "))
        delete = input('{0} -> 일정을 삭제하시겠습니까?[y/n]'.format(todos[index_tmp]))
        if delete == 'y' or delete == 'Y':
            del todos[index_tmp]
            print("삭제되었습니다\n")
        
    elif num==4:
        print("-----일정목록------")
        for key, value in todos.items():
            print('{0}번 : {1}\n'.format(key, value))
            
    elif num==2:
        index_tmp = int(input("수정할 일정 번호 입력 : "))
        todos_value = str(input("수정할 내용 입력 : "))
        todos[index_tmp] = todos_value
        print("수정되었습니다\n")

    elif num==5:
        index=0
        todos.clear()
        print('\n')
    else:
        print("잘못된 번호 입력입니다\n")

        
```





## 03. 파이썬 함수

```pytohn
def 함수명[(argumentlist)]:
	구현
	[return data]
```





### 매개변수

```python
def mul(*values):
    result=1
    for value in values:
        result *= value
    return result
```

- return을 명시하지 않았을 때 기본값(default)은 None이다.
- 함수는 인수(매개변수)는 선택적으로 받을 수 있고, 기본 값 설정이 가능하다.
- 함수의 매개변수(parameter)가 많다면 키워드 인수(keyword arguments)를 활용하면 된다.
- 리스트와 같은 자료형을 인수로 지정할 때는 기본값을 None으로 지정하는 것이 좋다.
- 함수의 return으로 여러 개의 값을 반환하면, 그 값들을 쉼표로 구분하여 변수에 저장할 수 있다.
- 함수가 입력 받을 매개변수의 개수가 정해져 있지 않을 때는 별표 1개(*)를 사용한다.
- 별표 2개(**)를 사용하여 “키워드 인수”를 받으면 딕셔너리 형태로 그 값을 사용할 수 있다.
- 다양한 종류의 매개변수를 입력 받기 위해서는 지정된 순서를 따른다.



### 튜플(tuple)

- 값을 변경하지 않는 리스트

- tuple = (value, value, ...)

- 리턴할때 많이 사용되는 형식이다 `return (10,20)`

  ```python
  list_data = [10,20,30,40]	
  tuple_data = (10,20,30,40,50) #리스트
  ```




**filter()함수와 map()함수**

- 함수를 매개변수로 전달하는 대표적인 표준함수



### 람다

- 매개변수로 함수를 전달하기 위해 함수 구문을 작성하는 것이 번거롭고 코드 낭비라 생각될 때 함수를 간단하고 쉽게 선언하는 방법

  ```python
  list_input = [1,2,3,4,5]
  output_list = map(lamda data:data*data, list_input)
  print(list_input)
  print(list(output_list))
  
  output_filter = filter(lamda data:data>3, list_input)
  print(list_input)
  print(output_filter)
  print(list(output_list))
  ```

  ```python
  >>> map(lambda x: x ** 2, range(5))             # 파이썬 2
  [0, 1, 4, 9, 16]  
  >>> list(map(lambda x: x ** 2, range(5)))     # 파이썬 2 및 파이썬 3
  [0, 1, 4, 9, 16]
  ```

  - `map함수` : 함수와 리스트를 인자로 받습니다. 그렇죠? 그리고, 리스트로부터 원소를 하나씩 꺼내서 함수를 적용시킨 다음, 그 결과를 새로운 리스트에 담아준답니다





### 파일처리

**open() 함수**

- `w` : 읽기 모드
- `r` : 쓰기모드
- `a` 

```python
# text data 출력
write_file = open("hello.txt", "w")
write_file.write("Hello Python... \n")
write_file.close() # 자원반납 -> 메모리 누수

# with open(파일명, 모드) as 파일객체
# 모드 : "w", "a"(appen write), "r"
# 자원반납 필요없이 사용이 가능하다
with open("hello.txt", "a") as file:
    file.write("File Write Test")
    

# file read => console 출력
with open("hello.txt", "r") as read_file:
    print(read_file.read())

# console 입력 => file 출력
read_data = input("파일에 저장할 데이터 입력: ")
with open("console input.txt", "w") as console_file:
    console_file.write(read_data)

# file 입력 => file 출력(copy)
file_read = open("hello.txt", "r")
file_copy = open("hello_copy.txt", "w")
file_copy.write(file_read.read())
file_read.close()
file_copy.close()
```





### 오류

구문오류 : 프로그램 실행 전에 발생

런타임오류/예외 : 프로그램 실행 중에 발생하는 오류

```python
try:
#예외발생가능 실행문

except:
    
finally:
```





### 모듈

datatime

math



최종정리(ing)

```python
import os.path

students = []

#수강생 등록 : list students에 정보를 저장하고 message를 리턴
def register(student):
    index = is_exist(student["id"])
    if index < 0:
        students.append(student)
        return "{0}(이)가 등록되었습니다".format(student["name"]) 
    else:
        return "이미 등록된 정보입니다"

#수강생 목록 : list students 목록 리턴
def getAllStudents():
    return students


#수강생 수정 : id를 검색해서 전공정보를 수정하고 message를 리턴
def update(id, major):
    index = is_exist(id)
    if index > -1:
        student[index]["major"] = major
        return "{0}의 전공 정보가 수정되었습니다".format(id)
    else :
        return "{0}의 전공 정보가 존재하지 않습니다".format(id)



#수강생 삭제 : id를 검색해서 수강생 정보 삭제 message 리턴
def remove(id):
    index = is_exist(id)
    if index >-1:
        student.pop(index)
        return "{0}의 정보가 삭제되었습니다".format(id)
    
    else :
        return "{0} 정보가 존재하지 않습니다".format(id)


#수강생 존재여부 : id를 검색해서 list student의 index 값 리턴
def is_exist(id):
    for index, student in enumerate(students):
        if student["id"] == id:
            return index
    return -1

#menu display
def menu_display():
    print("-----수강관리-----")
    print("1. 수강생 정보 등록")
    print("2. 수강생 목록 보기")
    print("3. 수강생 정보 수정")
    print("4. 수강생 정보 삭제")
    print("0. 종료")

#message display
def message_display(message):
    print(message)

#프로그램 종료시 list students "students.dat" 파일 저장
def save_list():
    save_file = open("students.dat", "w")   #초기화되기 때문
    for index, student in enumerate(students):
        save_file.write("{0}번째 | {1} ,{2}, {3}, {4}\n".format(index, student["id"], student["name"], student["age"], student["age"]))
    save_file.close()


#프로그램 시작시 "students.dat" 파일이 존재하고 정보가 있는 경우 list students 초기화
def init_data_load():
    fileExist = os.path.isfile("students.dat")
    if fileExist :
        read_file = open("students.dat", "r")
        while True:
            student = read_file.readline()
            if len(student.split("|") == 2):
                student = data.split("|")[1].strip("\n").split(",")
                students.append("id":student[0].strip(), "name":student[1].strip(), "age":int(student[2].strip()), "major":student[3].strip())
            if not data : break
        read_file.close()    


init_data_load()
while True:
    menu_display()
    menu = input("메뉴를 선택하세요 : ")

    if menu =="1":
        id = input("학번 : ")
        name = input("이름 : ")
        age = input("나이 : ")
        while not age.isdecimal():
            print("나이는 숫자로 입력하세요")
            age =input("나이 :")
        major = input("전공 : ")
        student = {"id":id, "name":name, "age":int(age), "major":major}
        message_display(register(student))

    elif menu == "2":
        print("수강생목록보기")
        print(students)

    elif menu == "3":
        id = input("수정할 수강생 번호 : ")
        major = input("수정할 전공 : ")
        message_display(update(id, major))
    
    elif menu =="4":
        id = input("삭제할 수강생 번호 : ")
        message_display(remove(id))
    elif menu =="0":
        message_display("수강관리 프로그램 종료")
        break
    else:
        print()
        message_display("1,2,3,4,0번 중 선택하세요")

```







## 04. 클래스



```python

```



- isinstance(인스턴스, 클래스) 함수 : 클래스에서 생성된 인스턴스가 맞는지 확인

  



- `__str()__` 





### 캡슐화

- 구현을 잘 모르더라도 사용법을 알고있다면 사용 가능하다

- 사용자 코드에 구현을 모르고 사용할 수 있도록 제공
- `self.__privateVariable`

- Private variable로 선언

- Getter/Setter method를 통해 구현 상관없이 variable 접근

  ```python
  c = Circle()
  c.radius =5	#error -> Private variable
  c.getRadius()
  c.setRadius(5)
  ```

  

[[python\] 모듈 만들기 / 엔트리 포인트 entry point :: 💡💡💡💡💡💡💡 (tistory.com)](https://jakestistory.tistory.com/122)

[파이썬 코딩 도장: 45.2 모듈과 시작점 알아보기 (dojang.io)](https://dojang.io/mod/page/view.php?id=2448)







`__pycache__`

- **컴파일되어 실행 준비가 된 Python 3 바이트 코드를** 포함하는 폴더



`__init__.py` : **생성자**

- 파이썬에서는 생성자의 첫 인자를 `self`로 써주는 것이 원칙이다

- 초기화 메서드

  ```python
  # bookstore.py
  
  class Book:
  
      def setData(self, title, price, author):
          self.title = title
          self.price = price
          self.author = author
  
      def printData(self):
          print '제목 : ', self.title
          print '가격 : ', self.price
          print '저자 : ', self.author
  
      def __init__(self):
          print '책 객체를 새로 만들었어요~'
  ```

  ```python
  import bookstore
  b = bookstore.Book()  
  # 책 객체를 새로 만들었어요~
  ```

- Book()해서 Book 객체를 만들자마자 초기화 메서드가 실행

  ```python
      def __init__(self, title, price, author):
          self.setData(title, price, author)
          print '책 객체를 새로 만들었어요~'
  ```

  ```python
  >>> reload(bookstore)
  >>> b2 = bookstore.Book('내가 먹었지롱', '200원', '미니')
  책 객체를 새로 만들었어요~
  ```

  위와 같이 던져주면 된다

  

**제너릭 기법**



### 인스턴스 변수와 클래스 변수

**클래스 변수**

- 모든 클래스의 인스턴스 간에 값을 공유하는 변수

**인스턴스 변수**

- 인스턴스마다 개별적으로 다른 값을 가지는 변수

- self.변수명으로 사용하면 인스턴스 변수가 됨

```python
class User:
    num_users = 0               # class 변수
    def __init__(self, name):
        self.name = name        # instance 변수
        User.num_users += 1
```



- 인스턴스변수는 객체가 생성될 때 마다 초기화된다
- 클래스 이름으로 참조 -> 클래스변수

```python
class ClassTest:
    class_v = 10
    
    def __init__(self, instacne_v):
        self.instance_v = instance_v
        
c1 = ClassTest(10)
c2 = ClassTest(10)

c1.instance_v += 1
c2.instance_v += 1
print("{0} : c1.instance_v, {1} : c2.instance_v".format(c1.instance_v, c2.instance_v))
#11 :  c1.instance_v, 11 : c2.instance_v

ClassTest.class_v +=1
ClassTest.class_v +=1
print("{0} : c1.class_v, {1} : c2.class_v".format(ClassTest.class_v, ClassTest.class_v))
#11 :  c1.class_v, 12 : c2.class_v
```



```
$ python manage.py runserver
```

![django serveron](images/django%20serveron.JPG)







### MVC 패턴

![MVC_pattern](images/MVC_pattern.JPG)

[MVC Pattern 이란? - 개념 및 자바 예제 | live and let live (hanee24.github.io)](https://hanee24.github.io/2018/02/14/what-is-mvc-pattern/)





질문: 구현하는 순서가 궁금합니다. 수업시간에entity -> view -> service -> exception -> dao -> controller 이렇게 했던거 같은데 항상 이런 순서로 구현하는 것인가요???

-> todo 리팩토링 모듈화 연습을 해봐야한다

생활코딩 WEB2 파이썬 -> 리팩토링

이러한 형태의 구현에 익숙해져야한다





### TCP/IP 계층

**아키텍처 패턴 공부**



### DAO란

파이썬 예외처리





### MSA 아키텍처

### 파이썬 객체지향 연습

