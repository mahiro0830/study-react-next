import React from 'react';

// Helloはクリックするとアラートを出すテキストを返します
const Hello = () => {
  // クリック時に呼ばれる関数
  const onClick = () => {
    // アラートを出す
    alert('Hello');
  }
  const text = 'Hello , React';

  // テキストを子に持つdiv要素を返す
  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
}

export default Hello;
