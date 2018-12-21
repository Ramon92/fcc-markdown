import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
flex: 1;
width: 100%;
padding-right: 4px;
`;

const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border: none;
  padding: 45px 45px 0;
  padding-right: 0;
  margin-right: 45px;
  font-size: 1em;
  
  &:focus {
    outline: none;
  }
`;

export default class Editor extends PureComponent<any> {
    render() {
      const {onChange, markdown} = this.props;
      return (
        <StyledWrapper>
          <h1>Editor</h1>
            <StyledTextArea value={markdown} onChange={onChange} name="editor" id="editor"></StyledTextArea>
        </StyledWrapper>
      );
    }
}