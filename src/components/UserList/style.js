import styled from "styled-components";

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 600px;
  margin:20px auto;
  height: calc(100vh - 270px);
  margin-block-start: 30px;
  overflow-y: auto;

  @media (max-width: 768px) {
    width:450px;
    
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  @media (max-width: 600px) {
    padding:20px 0px 20px 50px;
  }
  &:hover {
    background-color: rgb(0,0,0,0.2);
    border-radius: 20px;
    transition: .2s ease-in;
    cursor: pointer;
    
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;

  @media (max-width: 600px) {
    padding-left:10px;
  }
`;

export const UserPicture = styled.img`
  border-radius: 45%;
  @media (max-width: 600px) {
    width:30%;
    height:13vh;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: start;
  margin:10px auto;
  border-top: 3px solid white;
  & > * {
    margin-inline-end: 1px;
  }
  @media (max-width: 768px) {
    /* margin:10px auto; */
    padding:5px;
    width: 320px;
    overflow-x: scroll;
  }
`;
