<h1>임상정보 검색 서비스 </h1>

---

임상정보를 검색할 수 있는 웹 어플리케이션입니다.



<h1> 구현방법 소개 </h1>

- <h2>질환명 검색시 API 호출 통해서 검색어 추천 기능 구현</h2>

useSearch라는 api 훅을 만들어 사용하였습니다.  
사용자가 입력한 값은 디바운스 처리되어 argument로 들어오게 됩니다.
만약 들어온 값이 cache에 있다면 입력된 값에 대한 결과를 sicks라는 state에 업데이트 하게 되고 새로운 배열을 랜더링하게 됩니다. 
만약 들어온 값이 cache에 없다면 서버에 요청하여 sicks 배열을 업데이트하게 됩니다. 

---
<h3> 신경쓴 부분 </h3>
1. useSearch 훅을 사용할때 reactQuery에서 제공하는것처럼 cacheTime과 staleTime을 옵션으로 줄수 있도록 구현하였습니다.
cacheTime옵션을 주었다면 입력된 시간에 따라 cache는 초기화됩니다. 
마찬가지로 stailTime 옵션을 주었다면 sicks는 초기화 됩니다.

![스크린샷 2023-01-12 오전 9 50 27](https://user-images.githubusercontent.com/102455275/211949651-885b0db8-4b2f-47f2-80da-dfbce1e8e13a.png)

<h3>문제해결</h3> 
hook안에서 setInterval이 정상적으로 작동하지 않는 문제로 인해 useInterval이라는 훅을 사용하여 문제를 해결하였습니다.

---


2. input focus에 따라서 화면에 render 분기처리 
따로 editMode 같은 state를 만들어 사용하지 않고 기본 css 형제 선택자등을 사용하여 input이 focus일 경우 x버튼이라던지 아이템 리스트라던지 화면에 보여지도록 처리하였습니다. 

![스크린샷 2023-01-12 오전 10 12 26](https://user-images.githubusercontent.com/102455275/211952201-20add414-9077-4dcb-9ffa-8a0ecc517bba.png)


---

![스크린샷 2023-01-12 오전 9 41 29](https://user-images.githubusercontent.com/102455275/211948699-f327b30d-d8e9-4cff-9b15-0ca2a42147ec.png)


![화면 기록 2023-01-12 오전 10 01 47](https://user-images.githubusercontent.com/102455275/211951040-b4f9ead6-755c-48b5-ba22-c4a48e020a20.gif)




- <h2>사용자가 입력한 텍스트와 일치하는 부분 볼드처리<h2/>
 sicks 배열을 순회하며 아이템마다 객체를 만들어 사용자가 입력된 값이 들어있는지 체크하고 boolean값을 객체의 key와 value로 주었습니다. 
그런다음 searchItem 컴포넌트에서 boolean값에 따라서 bold 스타일링 하였습니다.

![스크린샷 2023-01-12 오전 9 58 50](https://user-images.githubusercontent.com/102455275/211950615-9c894486-266d-4236-9185-9107cc281f77.png)

![스크린샷 2023-01-12 오전 9 55 41](https://user-images.githubusercontent.com/102455275/211950635-42de1f47-59fc-474a-b922-925f4aa7c35c.png)

![화면 기록 2023-01-12 오전 9 59 30](https://user-images.githubusercontent.com/102455275/211950781-678ad89b-ed89-42e5-9534-ef4da233ec80.gif)

  


- <h2>API 호출 최적화</h2>
    - API 호출별로 로컬 캐싱 구현
    입력된 값에 따라서 차례대로 cache에 저장하고 오래된 입력값이 자동으로 삭제되는 형태로 만들려했는데 시간이 부족해서 구현하지 못했습니다. (오늘 구현해볼 예정)
     
    - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
    (위에서 설명)

  
- <h2>키보드만으로 추천 검색어들로 이동 가능하도록 구현</h2>
onKeyDown 이벤트 핸들러에서 입력된 key에 따라 로직을 작성하고 focusIndex state를 업데이트 하는 방식으로 구현하였습니다.
sick 아이템에서는 focusIndex가 자신의 index와 같으면 background color를 주도록 구현하였습니다.
![스크린샷 2023-01-12 오전 10 05 55](https://user-images.githubusercontent.com/102455275/211951699-9cf16792-d34f-48d9-b228-f3f5bc836c2d.png)


![화면 기록 2023-01-12 오전 10 08 32](https://user-images.githubusercontent.com/102455275/211952393-ecba871c-c395-4714-93d2-4ee1fc1df597.gif)




