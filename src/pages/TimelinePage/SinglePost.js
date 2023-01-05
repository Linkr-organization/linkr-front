import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { ReactTagify } from "react-tagify";

export function SinglePost(post) {
  const { picture_user, username, description, likes } = post;
  const  tagStyle  =  { 
    color: 'white' , 
    fontWeight: 700 , 
    cursor: 'pointer',
    fontSize: 20
  };
  const  mentionStyle  =  { 
    color: 'gray' , 
    fontWeight: 400 , 
    fontSize: 20,
    cursor: 'pointer',
  }

  return (
    <PostContainer>
      <Column>
        <img src={picture_user} alt="img" />
        <FaHeart />
        <p>{likes} likes</p>
      </Column>
      <Content>
        <h1>{username}</h1>
        < ReactTagify 
            tagStyle = { tagStyle } 
            mentionStyle = { mentionStyle } 
            tagClicked = {(tag) =>  alert(tag)} >
            <p>{`${description}`}</p>
        </ReactTagify > 
      </Content>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 611px;
  height: 276px;
  padding: 25px;
  background-color: #171717;
  border-radius: 10px;
  margin-bottom: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  & > img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 1000px;
    margin-bottom: 20px;
    margin-left: 15px;
  }
  svg {
    font-size: 20px;
    color: white;
    margin-bottom: 8px;
  }
  p {
    color: white;
    font-size: 12px;
  }
`;
const Content = styled.div`
  margin-left: 20px;
  & > h1 {
    color: white;
    font-size: 23px;
    margin-bottom: 5px;
  }
  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #B7B7B7;
  }
`;
