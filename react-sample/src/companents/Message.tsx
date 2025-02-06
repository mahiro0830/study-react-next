import React from 'react';

// Textコンポーネント
const Text = (props: {content: string}) => {
  // propsからcontentを受け取る
  const { content } = props;
  // contentを表示する
  return <p className="text">{content}</p>
};

const Message = () => {
  const content1 = 'This is a parent component.';
  const content2 = 'Message uses Text component.';

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  );
};

export default Message;
