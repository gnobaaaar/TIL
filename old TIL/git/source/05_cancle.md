## 05. 취소하기



1. git add 취소하기

   - git add가 된 상황

     ```bash
     $ git status
     On branch main
     Changes to be committed:
       (use "git restore --staged <file>..." to unstage)
             new file:   f.txt
     
     ```

     ```bash
     git restore --staged f.txt
     ```

   - 구버전

     ```bash
     git reset HEAD f.txt
     ```

   ```bash
   $ git status
   On branch main
   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           f.txt
   
   nothing added to commit but untracked files present (use "git add" to track)
   ```

   

2. git commit 취소하기(되돌아가기)

   ```bash
   $ git reset (--mixed) [돌아갈 commit의 hash (d0fc2de같은)]
   ```

   ```bash
   $ git reset d0fc2de
   ```

   - 옵션

     ```bash
     $ git reset --mixed [hash]
     ```

     - staging 없임 + 작업한 것은 남아있음

     ```bash
     $ git reset --soft [hash]
     ```

     - staging 그대로 유지 + 작업한 것은 남아있음

     ```bash
     $ git reset --hard [hash]
     ```

     - **[주의]** 완전히 취소하는 것(작업한 것도 삭제)

   - hash

     ```bash
     $ git log
     commit c9a8984ba3f0796167b57d7a29c78f5c5870fa9d (HEAD -> main, origin/main)
     ```

     commit을 구분하는 용도로 사용된다

     

   ![HEAD](images/HEAD.JPG)

   

   - `HEAD`의 상대적 위치

     - `HEAD~(숫자)`
       - HEAD~1 = HEAD~
       - HEAD~2

     ``` bash
     $ git reset HEAD~
     ```

     - commit 되돌리기
       - HEAD~1 (1단계 전으로 되돌리고)
       - `--mixed` (staging은 취소, 작업 내용은 유지)

   

   - `git log`시 내용이 너무 많이 잘리는 경우

     - q로 종료

     - 방향키로 위아래 이동이 가능하다

       

3.  WD(Working Directory) 변경 내용 취소(삭제)하기, 원상복구

   - WD
     - 우리가 지금 작업 중인 공간
     - Git이 관리하고 있는 공간
     - 기록이 한 번이라도 된 파일이 있는 공간

   ```bash
   $ git restore [파일명]
   $ git restore a.txt
   ```

   - 구버전

   ```bash
   $ git checkout --[파일명]
   ```

   

