## 06. gitignore

- 우리가 git으로 관리하고 싶지 않은 파일들을 제외시키는 방법(**중요!**)

  - 우리가 원하지 않는 파일들을 제외
  - 외부에 공개되면 안되는 것들
  - **처음부터 관리가 들어가야한다**(기록되기 전에 이용해야한다)

- `.gitignore`

  - `.gitignore`에 작성된 파일들은 git으로 관리하지 않겠다..무시하자는 의미

  ```bash
  .DS_Store
  # Mac OS에서만 사용되는 파일
  ```

- 작성법

  ``` bash
  f.txt #특정파일
  secret/ #특정폴더, 하위 파일들도 제외된다
  *.png #특정 확장자를 제외 가능, 모든 png는 제외한다
  !profile.png #모든 png는 빼고, profile.png는 포함시킨다
  ```

- 처음부터 git으로 관리한 적이 없을 때부터 관리를 해줘야한다
- 그렇다면 이미 commit을 한 파일들은 어떻게 제외할 수 있을까?
  1. `.gitignore` 에다가 파일을 명시
  2. `git rm --cached [파일명]`
     - git에서 더 이상 관리하지 않겠다는 의미
     - WD에서 삭제해서 더 이상 쳐다보지 않는 것! 관리X

- `.DS_Store` : Mac OS
- `Thumbs.db` : Windows