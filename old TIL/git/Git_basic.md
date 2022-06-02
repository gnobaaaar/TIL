멀티캠퍼스 클라우드 과정의 대략적인 정리 및 TIL

<br/>

## GitHub

개발자들의 페이스북


###설치한 것들<br/>

`Git`
`Typora`


---
<br/>

## 00. Basic CLI

1. `ls` : 목록조회

```bash
00_basic.cli.md  a.txt  b/  c.txt  d.txt  e.txt  images/  markdown.md
```
1-1. `ls -al` : 상세 목록조회


2. `cd` : 폴더 변경
   1. `cd` : ~폴더(home 폴더)로 이동
   2. `cd 폴더명` : `폴더명`으로 이동
   3. `cd ..` : 상위 폴더로 이동

3. `mkdir` : 폴더 생성
   1. `mkdir A` : A 라는 이름의 폴더를 생성

4. `touch` : 파일 생성
   1. `touch a.txt` : `a.txt` 파일을 생성(빈 파일)
5. `cp` : 파일/폴더 복사
6. `mv` : 파일/폴더 이동
   1. `mv a.txt B/a.txt` : `a.txt` 파일을 `B` 폴더 안으로 이동
   2. `mv a.txt c.txt` : `a.txt` 파일의 이름을 `c.txt` 로 뵨굥

7. Tab : 자동완성
8. 방향키 위, 아래 : 명령어 이동


---

<br/>


## 01. Git

- `git status` : git으로 관리되고 있는 폴더(=Repository, (깃) 저장소)의 상태를 보여준다

- `git init` : 현재 폴더를 git으로 관리하겠다 선언! (초기화)

- `git add` : git으로 관리할 파일들을 추가

  - `git add a.txt` : `a.txt` 파일을 INDEX(Starting 영역)에 등록(폴더도 가능)
  - `git add .` : `.` (현재폴더)를 INDEX에 등록

- `git commit` : INDEX에 있는 파일들을 가지고 commit(history, 역사)를 남긴다!

  - `git commit -m "메세지"` : 기록을 남기면서 `메세지`를 남김 (**필수**)

- `git log` : 남겨온 commit들을 확인

  - `git log --oneline --graph` : 그래프 + 한줄로 기록을 조회

- `git config` : git 프로그램의 설정을 담당

  ```bash
  git config --global user.email '이메일'
  git config --global user.name '이름'
  ```

  - `git config --global --list` : 현재 git 프로그램에 설정된 값들을 확인
  
  
---

<br/>

## 02. markdown

### 1. header


# heading 1 입니다

## heading 2 입니다

### heading 3 입니다
<br/>


### 2. List


순서가 없는 목록 형식 작성을 위해서는  - , * , +  중 아무거나 사용이 가능

숫자를 입력하면 숫자가 있는 리스트가 생긴다

- ymca

<br/>

### 3. Code Block


코드를 담기 위한 코드 블록은  **```( ` 3번 입력)**을 입력 -> 엔터키를 누르면 자동으로 생성

**```뒤에 언어명을 입력

```bash
git add a.txt
git add b.txt
```

<br/>

### 인라인 코드 블록


`` 사이에 문장을 넣으면 강조 효과가 생긴다

`print(mark down language)`

---
<br/>

## 03.Git_Remote

- `git remote` : Remote Repository 주소 등록(여기서는 GitHub Repo)

  - `git remote add origin (주소)` : Remote Repo의 `주소`를 origin 이라는 별칭으로 등록

  - `git remote -v` 를 통해서 등록된 Remote 주소 확인

    ```bash
    origin  https://github.com/eumdengs/TIL.git (fetch)
    origin  https://github.com/eumdengs/TIL.git (push)
    ```

    

  - `git push (별칭) (브랜치 이름)` : `별칭` 으로 **push(전송)** 

    - `git push origin main` : origin으로 main 브랜치를 전송

      

- `git clone (주소)` : 주소로부터 Repo 가져오기

- `git pull (별칭)(브랜치이름)` : `별칭` 으로부터 `브랜치` 를 **pull(내려받기)**
---


<br/>


## 99.그외

### **동기화를 통해** 

```bash
git remote add origin https://github.com/eumdengs/my-first-repo.git
//원격 저장소를 설정
git remote -v
//저장소 확인, origin은 별칭으로 여기면 된다

git push origin main
//push 어디로 무엇을 origin으로 main이라는 가지를
```
<br/>

### **git clone의 사용**

![](https://images.velog.io/images/gnobaaaar/post/7eef1ca5-784e-472b-9db6-2e3d16d1e193/03clone.jpg)


마크다운 링크를 이용해서 [README.md](http://readme.md) 파일을 재밌게 수정가능하다

<br/>

### 상대경로설정

```bash
[git](git)
-> 상대경로
[git](/git)
-> 절대경로
```

예를 들어보자 pyenv라는 파이썬 관리 프로그램을 사용자들이 설치를 하려고 할때
제대로된 설명이 필요하다 → 대부분 README.md를 통해서 설명한다

---

Git -> GitHub -> Typora -> GitHub 블로그 까지 대략적으로 훝어보았다
앞으로는 TIL을 꾸준히 해보는 것이 목표..다..

<br/>



![](https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif)