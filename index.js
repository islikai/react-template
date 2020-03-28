import { useState ,useEffect} from 'react';
import PropTypes from 'prop-types';

const {{template}} = (props) => {
  /**
   * 调用 useState Hook 声明了一个新的 state 变量。它返回一对值给到我们命名的变量上。我们把变量命名为 count，因为它存储的是点击次数。我们通过传 0 作为 useState 唯一的参数来将其初始化为 0。第二个返回的值本身就是一个函数。它让我们可以更新 count 的值，所以我们叫它 setCount
   */
  const [count, setCount] = useState(0);

  /**
   * 1. 传递一个空数组（[]）作为useEffect第二个参数。这就告诉React你的effect不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
   */
  useEffect(() => {
    /**
     * 1. 组件需要在渲染后执行某些操作
     */
    document.title = `You clicked ${count} times`;
    /**
     * 2. 每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分
     */
    return function example() {
      console.log('example');
    }
  }, []);

  return (
    <div>{{ count }}</div>
  )
}

// 指定 props 的默认值
{{template}}.defaultProps = {
};

// props类型检查
{{template}}.propTypes = {
};

export default {{template}};