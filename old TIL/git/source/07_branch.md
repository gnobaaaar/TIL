## 07. Branch

- branch : 가지(치기)

- `git branch` : 브랜치 목록 확인
- `git branch login` : `login` 브랜치를 생성

- `git switch login` : `login` 브랜치로 이동

  ```bash
  $ git switch login
  Switched to branch 'login'
  ```

- `git log --oneline --graph --all`
  - 한줄로, 그래프포함, 브랜치 모두

- `git switch -c login` : 브랜치를 만들면서 바로 이동

  - `git branch login` + `git switch login`

  - 구버전
    - 이동 : `git checkout login`
    - 생성하면서 이동 : `git checkout -b login`