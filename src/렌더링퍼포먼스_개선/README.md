https://engineering.udacity.com/understanding-re-rendering-and-memoization-in-react-13e8c024c2b4
<br>
<br>

## 1. useRef 를 사용하라

React 개발자가 저지르는 일반적인 실수는, 렌더링 간에 유지해야하는 모든 변경 가능한 값에 대해 useState를 사용하는 것이다.<br><br>
useState는 렌더링 된 출력이 값에 따라 달라지는 경우 좋은 솔루션이고,
<br>
그렇지 않으면 useRef가 더 좋은 방법이 될 수 있다.
<br>

### 예시

input change event 같은 경우 굳이 rerendering 이 필요하지 않으므로 useRef 를 사용하는것이 더 효과적이다.
<br>
<br>
<a href='./기존.js'>기존에 쓰던 방식</a>
<br>
<a href='./개선.js'>개선</a>

<hr>

## 2. Memoization

React 최적화를 위해 이해해야 할 가장 중요한 개념 중 하나는 메모이제이션(memoization) 이다.
<br>
메모이제이션은 함수의 결과를 캐싱하고, 후속 요청에 대해 캐시를 반환하는 프로세스이다.
<br>
구성 요소를 다시 렌더링 한다는 것은 단순히 컴포넌트의 기능을 다시 호출하는것을 의미한다.
<br>
만약, 해당 컴포넌트에 자식 컴포넌트가 있는경우, 해당 구성 요소의 기능을 또 호출하여 트리구조 아래로 계속 이동하면서 호출한다.
<br>
그런다음 결과를 DOM과 비교하여 UI를 업데이트 해야하는지 여부를 결정한다.
<br>
이런 프로세스를 <a href='https://reactjs.org/docs/reconciliation.html'><b><u>조정</u></b></a> 이라고 한다.
<br>
<br>
컴포넌트는 함수일 뿐이므로 React.memo()를 사용하여 메모이제이션을 적용할 수 있다.
<br>
이것은 <b>종속성(props)이 변경되지 않는 한 컴포넌트가 다시 렌더링되는 것을 방지</b>한다.
<br>
특히 무거운(방대한?) 컴포넌트가 있는 경우 메모이제이션을 적용하는것이 가장 좋지만,
<br>
그렇다고 모든 컴포넌트에 적용하는 건 다른 문제를 불러올 수 있다.
<br>
메모이제이션은 메모리를 사용하므로 특정 경우, 오히려 성능이 저하될 수 있기 때문이다.
<br>
<br>
컴포넌트가 메모이제이션 되면 React는 컴포넌트를 다시 렌더링하는 대신 이전 props 와 컴포넌트의 새 props 를 비교한다.
<br>
여기서 고려해야 할 절충안은 props 와 함수 실행을 비교하는 것이 얼마나 집중적인가 이다.
<br>
큰 개체가 있을 경우 해당 요소를 메모하는 것은 성능이 저하될 수 있다.

<a href="https://dmitripavlutin.com/use-react-memo-wisely/">usememo 효과적으로 사용하기</a>

<br>

# 3. useCallback 사용

메모이제이션 된 컴포넌트가 불필요하게 다시 렌더링 되는 것을 방지하는 중요한 도구는 useCallback 이다.
<br>
메모 되어있는 컴포넌트에 함수를 전달할 때 useCallback 을 사용하여 해당함수를 메모하지 않음으로써 인지하고 있지 않은 메모이징 효과를 제거할 수 있다.
<br>
모든 re-rendering은 컴포넌트의 기능을 호출한다. 즉, 컴포넌트에서 함수를 선언하는 경우 re-rendering 마다 새 함수가 생성되는데,
<br>
이 것을 다른 컴포넌트에 props 로 전달하는 경우 해당함수의 내용이 실제로 변경되지 않더라도, <b><u>참조가 변경되어</u></b> 메모화되더라도 자식 구성요소가 다시 렌더링된다.
<br>
<a href="https://kentcdodds.com/blog/usememo-and-usecallback">useCallback 언제사용해야 하는가?</a>

<br>

# 4. useState 의 지연초기화 (lazy initialization)

```
const initialState = () => calculateSomethingExpensive(props);
const [count, setCount] = useState(initialState);
```

useState 의 덜 알려진 기능은 초기 상태를 느리게 설정하는 기능이다.
<br>
useState 에 함수를 전달하면 구성 요소가 처음 렌더링 될 때만 함수를 호출한다.
<br>
이렇게 하면 다시 렌더링 할 때마다 초기 값이 설정되는 것을 방지할 수 있다.
<br>
이는 초기 상태를 복잡한 계산 후 설정 할 경우 유용하다.
<br>
초기 상태 값이 무거운 계산을 동반하는게 아닐 경우 지연초기화는 불필요하다. (권장되지 않는다.)

# 결론

React 의 성능 개선은 "이게 꼭 필요한 최적화인가?" 를 명확히 따져보고 난 뒤 실행되어야 한다.
<br>
위의 상황들을 겪는다해도, React 는 이미 충분히 빠르기 때문이다.
<br>
