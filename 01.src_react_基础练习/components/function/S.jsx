import React from 'react';  
  
function ChildComponent({ onMessageChange }) {  
  // 假设这是子组件内部的一个状态或用户输入，但在这个简单案例中，我们直接用一个字符串模拟  
  const messageToSend = 'Hello from Child!';  
  
  // 当用户执行某个操作时（这里我们用一个按钮模拟），调用父组件提供的回调函数  
  const sendMessageToParent = () => {  
    onMessageChange(messageToSend);  
  };  
  
  return (  
    <div>  
      <h2>Child Component</h2>  
      <button onClick={sendMessageToParent}>Send Message to Parent</button>  
      {/* 注意：在这个简单案例中，我们没有在子组件内部维护messageToSend的状态，  
          但在实际应用中，它可能是基于用户输入的或某种内部逻辑计算的 */}  
    </div>  
  );  
}  
  
export default ChildComponent;