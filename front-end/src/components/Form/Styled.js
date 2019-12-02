import Styled from 'styled-components';

export const Input = Styled.input`
  background-color: #fff !important;
  padding: .4em;
  margin: .4em;
  border: ${props => props.border ? props.border : 'none'};
  border-radius: .3em;
`;

export const Form = Styled.form`
  display: ${props => props.display ? props.display : 'flex'};
  flex-direction: column;
  justify-content: space-around;
  min-height: 10vh;
  margin: 1vh 0;
`;

export const Button = Styled.button`
  background-color: ${props => props.color ? props.color : '#00AF20'};
  border-radius: .3em;
  border: none;
  padding: .6em;
  margin: .1em;
  color: #fff;
  cursor: pointer;
`;