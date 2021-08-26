## 125. Valid Palindrome

주어진 문자열이 팰린드롬인지 확인. 단 영문자와 숫자 대상. 대소문자 구별X



```python
# list를 사용한 풀이
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        str =[]
        for i in s:
            if i.isalnum():
              str.append(i.lower())
        
        while len(str) > 1:
            if str.pop(0) != str.pop():
                return False
            
        return True
```

<br /><br />



## 344. Reverse String

문자열을 뒤집는 함수. 입력값은 문자 배열, 리턴없이 리스트 내부 직접 조작

```python
# 투 포인터를 사용한 스왑
class Solution(object):
    def reverseString(self, s):
      left, right = 0, len(s) -1
      
      while left < right:
        s[left], s[right] = s[right] = s[left]
        left += 1
        right -= 1
     	
      # s.reverse() 로 해결 가능
      # s[:] = s[::-1]
```

