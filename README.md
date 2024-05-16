# ReactJS_Basic
노마드 코더 - ReactJS로 영화 웹 서비스 만들기

***

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
React.createElement(태그명, {...속성 및 이벤트}, 태그 안에 들어갈 내용);
