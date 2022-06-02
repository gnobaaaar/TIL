# Nomad Web Scrapper
#TIL/python

1. 모듈설치
2. 가져올 페이지의 url요청 (get .text)
3. 원하는 html 파트 가져오기 (Beautiful Soup)
4. pagination 찾기
5. pagination 안의 모든 앵커 찾기
loop를 이용해 각 페이지의 “span” 모두 찾기
6. 불러올 페이지 넘버 지정해주기

#1. Import Packages (모듈설치)
	* 영상에서 쓰인 모듈 :
	ㄴRequest (사이트 정보 가져오기 (text))
	ㄴBeautiful Soup (html 내 필요한 부분 추출하기 (html))
#2. 가져올 페이지의 url요청 (request.get)
	* 페이지.text 가져왕
#3. 원하는 html 파트 가져오기 (Beautiful Soup)
	* 위 .text에서 HTML 불러왕 (html.parser)
#4. HTML 내에서 내가 원하는 정보의 pagination(페이지 네비게이터)을 찾기(indeed_soup.find)
	ㄴ”div” 를 찾아서 “pagination” 클래스 불러와줭
#5-1. pagination 안의 모든 앵커(‘a href’ 형태로 되어있는 링크들) 찾아주기
	ㄴpagination.find_all(‘a’))
#5-2. 페이지 링크마다 있는 태그를 각각 모두 불러와줘야 하므로 loop(for-in) 사용
	ㄴfor link in links: pages.append(link.find(“span”))
#6. 어디서부터 어디까지 불러올건지 페이지 넘버 지정해주기
	ㄴpages = pages[0:-1]

<br />

<br />

## 

## BeautifulSoup
[Beautiful Soup Documentation — Beautiful Soup 4.9.0 documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/#quick-start)

![E752C819-5E31-4B38-8A83-2A1096098FFA](image/E752C819-5E31-4B38-8A83-2A1096098FFA.png)

```python
import requests
from bs4 import BeautifulSoup 

indeed_result = requests.get(
  "https://www.indeed.com/jobs?q=python&limit=50")

indeed_soup = BeautifulSoup(indeed_result.text, "html.parser")

pagination = indeed_soup.find("ul", {"class":"pagination-list"})

pages = pagination.find_all('a')
spans = []

for page in pages:
  spans.append(page.find("span"))

spans = spans[:-1]
```

결과화면

![D2C97610-1A0C-448E-A8CD-5062F697C240](image/D2C97610-1A0C-448E-A8CD-5062F697C240.png)

<br />

<br />

## 

## 함수로 분류하기

![ED5790EC-756D-4F2D-A656-4D90DBB9A6C8](image/ED5790EC-756D-4F2D-A656-4D90DBB9A6C8.png)

indeed.py

```python
import requests
from bs4 import BeautifulSoup 

LIMIT = 50
URL = f"https://www.indeed.com/jobs?q=python&limit={LIMIT}"

def extract_indeed_pages():
  result = requests.get(URL)

  soup = BeautifulSoup(result.text, "html.parser")

  pagination = soup.find("ul", {"class":"pagination-list"})

  links = pagination.find_all('a')
  pages = []

  for link in links[:-1]:
    pages.append(int(link.string))

  pages = pages[:-1]
  max_page = pages[-1]
  # 5는 인식하지 못한다 -> why?
  return max_page


def extract_indeed_jobs(last_pages):
  for page in range(last_pages):
    result = requests.get(f"{URL}&start={page*LIMIT}")
    
    print(result.status_code)
```


main.py
```python
from indeed import extract_indeed_pages, extract_indeed_jobs

last_indeed_page = extract_indeed_pages()
extract_indeed_jobs(last_indeed_page)
```

<br />

<br />

## day5 챌린지

국가코드 스크래핑

![Aug-14-2021 02-52-11](image/Aug-14-2021 02-52-11.gif)

```python
import os
import requests
from bs4 import BeautifulSoup

os.system("clear")
URL = "https://www.iban.com/currency-codes"
  
def country_list():
  result = requests.get(URL)
  soup = BeautifulSoup(result.text, "html.parser")

  links = soup.find_all('tr')
  list=[]

  for i in links[1:]:
    tmp = i.find_all('td')
    tmp_list = []
    if tmp[3]:
      tmp_list.append((tmp[0].string).capitalize())
      tmp_list.append(tmp[2].string)
    list.append(tmp_list)
  
  return list

def user_input(list):
  print("Hello! Please choose select a country by number:")
  for fin_nation in enumerate(list):
    print(f"# {fin_nation[0]} {fin_nation[1][0]}")

  # 사용자 입력폼
  while(1):
    try:
      number = int(input())
      print(f"You chose {list[number][0]}.")
      print(f"The currency code is {list[number][1]}.")
      print("DONE!😄")
      break
    except IndexError:
      print("Choose a number from the list.")
      continue
    except ValueError:
      print("That wasn't a number.")
      continue
```





## 챌린지 day

알바천국 슈퍼브랜드 사이트 웹 스크래핑하기

![Aug-17-2021 03-20-46](image/Aug-17-2021 03-20-46.gif)

![image-20210817032152870](image/image-20210817032152870.png)

```python
import os
import csv
import requests
from bs4 import BeautifulSoup

os.system("clear")
alba_url = "http://www.alba.co.kr"

# 슈퍼브랜드 urls
def company_list():
  result = requests.get(alba_url)
  soup = BeautifulSoup(result.text, "html.parser")
  list = soup.find('div', {'id':'MainSuperBrand'})
  list2 = list.find("ul", {"class": "goodsBox"})
  list3 = list2.find_all("li")[:-3]

  company_name = []
  company_url =[]

  for i in list3:
    company_name.append(i.find("span", {"class":"company"}).text)
    company_url.append(i.find("a", {"class":"goodsBox-info"})["href"])

  result = []

  for i in range(len(company_name)):
    mini = []
    mini.append(company_name[i])
    mini.append(company_url[i])
    result.append(mini)

  return result


# 각 회사 항목 detail
def collect_company(url_list):
  com_url = url_list[1]
  result = requests.get(com_url)
  soup = BeautifulSoup(result.text, "html.parser")
  list = soup.find('tbody')

  place_list = list.find_all('td', {'class':'local'})
  title_list = list.find_all('span', {'class':'company'})
  time_list = list.find_all('td', {'class':'data'})
  pay_list = list.find_all('td', {'class':'pay'})
  date_list = list.find_all('td', {'class':'regDate'})

  # 지역
  place = []
  for i in place_list:
    i = i.text
    i = i.replace('\xa0', ' ')
    place.append(i)
  
  # 매장명
  title = []
  for i in title_list:
    i = i.text
    title.append(i)

  # time
  time = []
  for i in time_list:
    i = i.text
    time.append(i)
  
  # pay
  pay = []
  for i in pay_list:
    i = i.text
    pay.append(i)

  # date
  date = []
  for i in date_list:
    i = i.text
    date.append(i)

  result = []
  for i in range(len(place)):
    mini_result = []
    mini_result.append(place[i])
    mini_result.append(title[i])
    mini_result.append(time[i])
    mini_result.append(pay[i])
    mini_result.append(date[i])
    result.append(mini_result)

  return result


def save_to_file(lists, name):
  file_name = name[0]
  file_name = file_name.replace('/', '_') 
  file = open(f"{file_name}.csv",mode="w")
  writer = csv.writer(file)
  writer.writerow(["place", "title", "time", "pay", "date"])
  for company in lists:
    writer.writerow(list(company))
  return



url_list = company_list()

for url in url_list:
  company = collect_company(url)
  save_to_file(company, url)
```

