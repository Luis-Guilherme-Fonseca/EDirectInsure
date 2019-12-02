import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  height: 5vh;
  background-color: #DEDEDE;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span, a {
    margin: .8em;
  }
`;

export const ProjectsContainer = styled.div`
  padding: 1em;
  width: 25%;
  margin: 2em;
  border-radius: 20px;
  background-color: #DEDEDE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;