# ReactJS_Basic
노마드 코더 - ReactJS로 영화 웹 서비스 만들기

<br/>

***

<br/>

## * 목차 *
[1. Import React CDN & Use React](#-import-react-cdn--use-react)<br>
[2. JSX 적용](#-jsx-적용)

<br/>
***
<br/>

## 📍 Import React CDN & Use React

- Import CDN
```javascript
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 리액트 CDN -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <!-- 리액트 DOM CDN -->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  </head>
```

- Use React
  - **createElement**
  > `React.createElement(태그명, {...속성 및 이벤트}, 태그 안에 들어갈 내용);`
  ```javascript
    <body>
      <div id="root"></div>
    
      <script>
        const root = document.getElementById('root');
        const title = React.createElement(
          'h1',
          {
            id: 'h1-el',
            onMouseEnter: () => console.log('onMouseOver'),
          },
          'Hello I"m a title'
        );
        const btn = React.createElement('button', {
          onClick: () => console.log('im clicked')
        }, 'Click me');
        const container= React.createElement('div', null, [title, btn]);
    
        // react18 :: ReactDOM.createRoot(root).render(span);
        // react17 :: ReactDOM.render(span, root);
        ReactDOM.render(container, root);
      </script>
    </body>
  ```

## 📍 JSX 적용
> jsx 사용해서 컴포넌트 작성할 때엔 컴포넌트의 첫글자는 대문자로 ! React , jsx는 소문자로 작성하면 html태그로 인식
```javascript
  <head>
    ...
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
  
    <script type="text/babel">
      const root = document.getElementById('root');
      function Title () {
        return (<h3 id="title">Hello I'm a title</h3>);
      }
      const Button = () => (<button style={{backgroundColor: "tomato"}} onClick={() => console.log("im clicked")} >Click me</button>);
      
      const Container = () => (
          <div>
            <Title />
            <Button />
          </div>
        );
  
      ReactDOM.render(<Container />, root);
    </script>
  </body>
</html>
```

## 📍 React Hook
  ### 1. useState
  > React.useState()는 크기가 2인 배열을 반환헌다.<br>
    첫 번째 원소는 상태 값이고, 두 번째 원소는 상태를 설정하는 함수이다.

  ```
    <head>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
  
    <body>
      <div id="root"></div>
    
      <script type="text/babel">
        const root = document.getElementById('root');
    
        // const data = React.useState(); 가 아래 두 개의 역할을 전부한다.
        let counter = 0;
        function countUp() {
          // code
        }
    
        function App () {
          const data = React.useState();
          console.log(data);
          const count = data[0];
          const modifier = data[1];
    
          const [counter, setCounter] = React.useState(10);
          console.log(counter, setCounter);
          const onClick = () => {
            // setCounter 함수는 매개변수 값으로 값을 업데이트하고 리렌더링을 일으키는 함수
            setCounter(counter + 1)
          }
    
          return (
            <div>
              <h3>Total clicks : {counter}</h3>
              <button onClick={onClick}>Click me</button>
            </div>
          );
        }
    
        ReactDOM.render(<App />, root);
      </script>
    </body>
  ```
