import { useEffect, useState } from 'react';

function Effect() {
  // ** useEffect **
  // => 첫번째로 render 될 때만 실행하고 싶은 코드를 작성할 때
  // 1. 첫번째 argument : 한 번만 실행하고 싶은 코드
  // 2. 두번째 argument : 특정 state가 변화할 때만 특정 코드를 실행시키고 싶을 때, 이곳에 state 지정

  const [keyword, setKeyword] = useState('');
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((now) => now + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  
  // 
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
      console.log('I run when "counter" changes.');
  }, [counter]);
  useEffect(() => {
      console.log('I run when "keyword" changes.');
  }, [keyword]);
  useEffect(() => {
      console.log('I run when counter & keyword changes.');
  }, [counter, keyword]);


  return (
    <div>
      <input type="text" onChange={onChange} placeholder='Search here...' />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Effect;
