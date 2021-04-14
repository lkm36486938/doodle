import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Select from "react-select";
import "./react.select.css";
import lee from "../assets/lee.jpg";
import angry from "../assets/angry.png";

// 참고링크 - 공식문서 사용법: https://react-select.com/home
// 참고링크 - 예제 : https://medium.com/codingtown/react-select-852e90d549df
const ReactSelectExample = () => {
  // 스타일
  const styles = {
    // 옵션들에 대한 스타일 정의
    option: (styles, { isFocused, isDisabled }) => {
      return {
        backgroundColor: isFocused ? "yellow" : isDisabled ? "gray" : "",
        color: isDisabled ? "white" : "",
        cursor: "pointer",
      };
    },

    // styles => ...styles 는 이 라이브러리가 쓰고있는 기본 스타일을 일단 복사한다는 의미.

    // control: 인풋창(select 태그라고 생각하면됨)
    control: (styles) => ({ ...styles, height: "60px", cursor: "pointer" }),

    // container: option, control 을 감싸고있는 부모요소 (React-select 컴포넌트 최상위부모컨테이너)
    // 여기서 width 값을정하면됨
    container: (styles) => ({ ...styles, width: "300px" }),
  };

  // 선택목록 (option 태그라고 생각하면됨.)
  // value 는 요소 선택했을 때 넘어오는 값
  // label 은 보여줄 컴포넌트
  const options = [
    {
      value: "1",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={lee}
            style={{ width: "16px", height: "16px", marginRight: "16px" }}
          />{" "}
          똔개
        </div>
      ),
    },
    {
      value: "2",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={angry}
            style={{ width: "64px", height: "64px", marginRight: "16px" }}
          />{" "}
          곤듀
        </div>
      ),
    },
    { value: "3", label: "3", isDisabled: true },
  ];

  // select option 요소를 선택했을 때 동작하는 함수
  const _onChange = (item) => {
    // item 을 찍으면 위에 선언한 value값과 label값이 들어있음.
    console.log("value", item, item.value);
  };

  return (
    <div className="react_select_exam_container">
      <div className="react_select_exam_main">
        
        {/* Here */}
        <Select
          styles={styles}
          options={options}
          onChange={_onChange}
          isSearchable={false}
        />
        
      </div>
    </div>
  );
};

export default withRouter(ReactSelectExample);
