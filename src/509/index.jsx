import { Radio, Space ,message} from 'antd';
import React from 'react'
import './a.css';


export default class App extends React.Component {
  questions = [{
    id: 1,
    quest: '下面关于微处理器的叙述中，不正确的是_______。',
    options: [
      '微处理器通常以单片集成电路制成',
      '它具有运算和控制功能，但不具备数据存储功能',
      'Intel/AMD公司是国际上研制、生产微处理器最有名的公司',
      'Pentium4是目前PC机中使用最广泛的一种微处理器',
    ],
    // 请无视此答案是否合理
    answer: 1,
  },
  {
    id: 2,
    quest: '任何两个并发进程之间_______。',
    options: [
      '一定存在互斥关系',
      '一定存在同步关系',
      '资源静态分配策略',
      '可能存在同步或互斥关系',
    ],
    // 请无视此答案是否合理
    answer: 4,
  }];

  state = {
    value: 1,
  };

  onChange = e => {
    console.log(e.target.value,e.target.id);
    this.setState({
      value: e.target.value,
    });
    {this.questions.map(x => {
      if(e.target.id == x.id){
        if(e.target.value == x.answer){
          message.success('正确')
        }else{
          message.error('错误')
        }
      }
    })}
  }
  
  a(){
    return(
      this.questions.map(x => 
        <>
          <h1 key={x.id}>{x.id}.{x.quest}</h1>
          <Radio.Group onChange={this.onChange} id={x.id}>
            <Space direction="vertical">
              {x.options.map((y,num) => <Radio value={num+1} id={x.id}>{y}</Radio>)}
            </Space>
          </Radio.Group>
        </>
      )
    )
  }

  render() {
    return (
      this.a()
    );
  }
}
