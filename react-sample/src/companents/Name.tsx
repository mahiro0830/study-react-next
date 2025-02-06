import React from 'react';

// 名前を入力するためのテキストボックスを返す
const Name = () => {
  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    console.log(e.target.value);
  };

  return (
    <div style={{padding: '16px', backgroundColor: 'gray'}}>
      <label htmlFor="name">名前</label>
      <input
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Name;
