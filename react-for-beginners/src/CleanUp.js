import { useEffect, useState } from 'react';


// cleanUp code :: component가 destroyed 될 때 어떤 코드를 실행하는 것
function Hello() {
  // useEffect(()=>{
  //   console.log("created :)")
  //   return () => console.log("destroyed :)"); // this is cleanup code
  // });

  const byeFn = () => {
    console.log("destroyed :)");
  };
  const hiFn = () => {
    console.log("created :)");
    return byeFn;
  };
  useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((now) => !now)

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
