import { useEffect, useState } from 'react';


// cleanUp code :: component가 destroyed 될 때 어떤 코드를 실행하는 것
function Hello() {
  // useEffect(()=>{
  //   console.log("created :)")
  //   return () => console.log("destroyed :)"); // this is cleanup code
  // });

  // const byeFn = () => {
  //   console.log("destroyed :)");
  // };
  // const hiFn = () => {
  //   console.log("created :)");
  //   return byeFn;
  // };
  // useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((now) => !now)

  useEffect(()=>{
    console.log("useEffect :)", showing)
    return () => console.log("useEffect update :)", showing); // showing이 update될 때 동작하는데 여기선 현재 값이 아닌 이전 showing 값을 바라보고 있음!
  }, [showing]);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
