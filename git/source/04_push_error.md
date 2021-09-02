## 04. Push Error

- Pull을 빠뜨린 경우
- e를 commit 하고 push 하게되면 아래와 같은 오류가 발생한다

```bash
$ git push origin main
To https://github.com/aaa/TIL-test.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/aaa/TIL-test.git'
# push 실패
hint: Updates were rejected because the remote contains work that you do
# 업데이트가 실패했는데, remote가 너가 local에 가지고 있지 않은 작업들이 존재한다
hint: not have locally. This is usually caused by another repository pushing
# 지금 같은 경우 다른 Repo로 push 하려고 시도한 것이거나 
hint: to the same ref. You may want to first integrate the remote changes
# remote에서 발생한 변경 사항을 먼저 통합/반영해야 할 수 있다
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

```



- `git pull origin main`

  ```bash
  
  ```

  오류 메시지가 생성되고 `merge commit message`를 작성해주어야한다

  - vim 에디터 생성
    - esc -> : -> wq -> enter 
  - 순으로 빠져나오면 된다