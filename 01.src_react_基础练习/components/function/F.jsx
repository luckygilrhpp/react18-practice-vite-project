import React, { useState } from 'react';  
import S from './S';  
  
function ParentComponent() {  
  // 父组件的状态  
  const [childMessage, setChildMessage] = useState('');  
  
  // 父组件提供的回调函数，供子组件调用以更新状态  
  const handleChildMessage = (message) => {  
    setChildMessage(message);  
  };  
  
  return (  
    <div>  
      <h1>Parent Component</h1>  
      <p>Message from Child: {childMessage}</p>  
      <S onMessageChange={handleChildMessage} />  
    </div>  
  );  
}  
  
export default ParentComponent;