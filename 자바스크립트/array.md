# 배열(Array)
- ### 다양한 함수를 중첩해서 연달아 사용할 수 있다. 
    - ex) map으로 학생의 성적 프로퍼티들만 다 뽑고 reduce로 평균계산...!! arr.map.reduce요런식으로! 
## 다양한 배열함수

- `###map`
    - 배열의 모든 원소에 대해 어떤 행위를 하고싶을 때 사용.
    - 기존 배열이 `변경되는게 아닌` `새로운 배열이 또 만들어지는 것`
    - return값으로 원소가 설정된다. 
    - map은 원소 `하나하나가 아닌` 모든 원소에게 `한 번에` 뭘 지시하는 것!!

- `###reduce`
    - 배열.reduce((`누적값`, `현재값`, 인덱스, 요소) => {}, `초기값`)
    - 원소 하나하나에 대해서 