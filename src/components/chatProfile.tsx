import styled from 'styled-components';
import userInfo from '../assets/userInfo.json';

const ChatProfile = ({img, name, message}) => {
  return (
    <Container>
      <ProfileImg src={`img/${img}.jpeg`}/>
      <ColumnContainer>
        <Name> {name} </Name>
        <Message> {message} </Message>
      </ColumnContainer>
    </Container>
  );
};

export default ChatProfile;

const Container = styled.div`
  display: flex;
  width: 25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const ProfileImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
`;

const Message = styled.div`
  font-size: 0.9rem;
`;
