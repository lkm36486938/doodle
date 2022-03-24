import { withRouter } from 'react-router-dom';
import { Form, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
const Antd = () => {
  const [form] = Form.useForm();

  function _setNum(e) {

    form.setFields([
      {
        name: 'phone-number-field',
        value: e.target.value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(\-{1,2})$/g, ''),
      },
    ]);
  }

  // 전화번호 확인
  const submit = () => {
      alert(`회원이 입력한 전화번호: ${form.getFieldValue('phone-number-field')}`)
      alert(`하이픈제거: ${form.getFieldValue('phone-number-field').replace(/-/g, '')}`)
  }

  return (
    <>
      antd input test
      <hr></hr>
      <Form autoComplete="off" form={form}>
        {/* Antd input 은 value를 매핑하더라도 입력이 잘 됨. */}
        <Form.Item label="전화번호" name="phone-number-field">
          <Input onChange={_setNum} />
        </Form.Item>

        {/* 아래의 기본 input 은 num 이 바뀌지 않는이상 입력이 안됨. onChange 시 setNum 호출해서 state 바꿔야 실행됨 */}
        {/* <input value={num} /> */}
        <button onClick={submit}>submit</button>
      </Form>
    </>
  );
};

export default withRouter(Antd);
