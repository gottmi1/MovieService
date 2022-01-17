import { useState, useEffect } from "react";
// useEffect는 2개의 argument를 갖는 함수이다. 어떤 코드를 처음 한 번만 실행하고 싶을 때 사용된다. 첫 번쨰는 처음 한 번만 실행하고 싶은 코드, 두 번째는 주시할 항목. 항목이 비어있으면 그냥 딱 한 번만 실행하고, 두 번째 argument인 배열으로 무언가를 주면 그 값이 변경됐을 때만 실행된다.
function Hello() {
  // function byeFn() {
  //   console.log("지워졌다");
  // }
  // function hiFn() {
  //   console.log("만들어졌다");
  //   return byeFn;
  //   // 이렇게 해주면 만들어질 때는 hiFn을, 제거 될 떄는 byeFn을 출력. 이렇게 사라질 때 뭔가를 남기고 싶으면 retrun 값에 다른 값을 더 주면 된다. cleanUp 펑션이라고 함.
  // }
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  // def가 비어있지만, 한 번만 실행 한다는건 나타날떄, 제거될떄 마다 한번 실행한다는 뜻이라서 이 경우 나타날 때는 hiFn을, 지워질 때는 byeFn을 매번 출력한다.
  // 자주 안 쓰는데 알아두면 어딘가 쓸 데가 있을지도
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
