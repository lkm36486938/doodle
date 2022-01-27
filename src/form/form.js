import React, { useState } from "react";
import "./form.css";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

/*
    설문폼
    answer_type: 'one', 'multiple', 'string'
 */
const Form = () => {
  // 폼 배열
  const [surveyForm, setSurveyForm] = useState([]);

  // 폼의 초기값
  const initialForm = {
    _id: 0, // primary key 값이라고 가정
    answer_type: "one",
    answer: undefined
  };

  // 입력폼을 하나 더 추가.
  const addForm = () => {
    // 처음 누를 떄는 추가
    if (!surveyForm || surveyForm.length <= 0) {
      setSurveyForm([...surveyForm, initialForm]);
      return;
    }

    // 이전 폼을 완벽히 입력하지 않았다면 다음폼 입력 안함.
    if (
      surveyForm[surveyForm.length - 1]._id === undefined ||
      surveyForm[surveyForm.length - 1].answer_type === undefined ||
      surveyForm[surveyForm.length - 1].answer === undefined
    ) {
      return alert("이전 폼을 다 작성해주세요.");
    }

    // 객체의 불변성 때문에 객체복사가 필요
    const obj = { ...initialForm };
    obj._id = surveyForm.length;
    setSurveyForm([...surveyForm, obj]);
  };

  const popForm = () => {
      // 폼이 비엇다면 동작하지 않음
      if(!surveyForm || surveyForm.length <= 0){
        return;
      }

      let arr = [...surveyForm]
      arr.pop()
      setSurveyForm(arr)
  }

  // 답변 형태 선택
  const setAnswerType = idx => e => {
    // 객체의 불변성 때문에 객체복사가 필요
    let copy_form = [...surveyForm];
    let obj = { ...copy_form[idx] };

    obj.answer_type = e.target.value;
    copy_form[idx] = obj;
    setSurveyForm(copy_form);
  };

  // 답변의 답변형태에 따라서 답변 입력란을 렌더링
  const renderAnswerInputType = (survey, idx) => {
    let result = <></>;

    switch (survey.answer_type) {
      case "one":
        result = (
          <select onChange={handleOneAnswer(idx)} defaultValue={undefined}>
            <option selected disabled value={undefined}>
              단답형선택
            </option>
            <option value="1">1번단답</option>
            <option value="2">2번단답</option>
            <option value="3">3번단답</option>
          </select>
        );
        break;
      case "multiple":
        result = (
          <div>
            <input type="checkbox" onChange={handleMultipleAnswer(idx, 1)} />
            <input type="checkbox" onChange={handleMultipleAnswer(idx, 2)} />
            <input type="checkbox" onChange={handleMultipleAnswer(idx, 3)} />
          </div>
        );
        break;
      case "string":
        result = <input type="text" onChange={handleStringAnswer(idx)} />;
        break;
    }

    return result;
  };

  // one
  const handleOneAnswer = idx => e => {
    let copy_form = [...surveyForm];
    let obj = { ...copy_form[idx] };

    obj.answer = e.target.value;
    copy_form[idx] = obj;
    setSurveyForm(copy_form);
  };

  // multiple
  const handleMultipleAnswer = (idx, num) => e => {
    let copy_form = [...surveyForm];
    let obj = { ...copy_form[idx] };

    // 없다면 객체형태의 answer를 만들어줌
    if (obj.answer === undefined) obj.answer = {};
    else obj.answer = { ...obj.answer };

    obj.answer[num] = e.target.checked;
    copy_form[idx] = obj;
    setSurveyForm(copy_form);
  };

  // string
  const handleStringAnswer = idx => e => {
    let copy_form = [...surveyForm];
    let obj = { ...copy_form[idx] };

    obj.answer = e.target.value;
    copy_form[idx] = obj;
    setSurveyForm(copy_form);
  };

  // 최종값 확인
  const onFormSubmit = () => {
    console.log("최종 값: ", surveyForm);
  };

  return (
    <div className="form_container">
      <div className="form_add_button" onClick={addForm}>
        +
      </div>
      <div className="form_add_button pop" onClick={popForm}>
        -
      </div>
      <br/>

      {surveyForm.map((item, idx) => {
        return (
          <div className="form_add_form" key={idx}>
            {/* 폼의 아이디값 */}
            <p>form _id: {item._id}</p>

            {/* 답변형태 선택란 */}
            <select onChange={setAnswerType(idx)}>
              <option value="one">단답형</option>
              <option value="multiple">복수형</option>
              <option value="string">서술형</option>
            </select>

            {/* 답변형태에 따른 답변 입력란 */}
            <div>{renderAnswerInputType(item, idx)}</div>
          </div>
        );
      })}

      <button className="form_submit" onClick={onFormSubmit}>
        최종 값 확인 (console)
      </button>
    </div>
  );
};

export default withRouter(Form);
