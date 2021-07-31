import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase.js";
const Detail = (props) => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetail(doc.data());
        } else {
          console.log("no such document");
        }
      })
      .catch((error) => console.log(error.message));
  }, [id]);
  return (
    <Container>
      <BackGround>
        <img src={detail.backgroundImg} alt="" />
      </BackGround>
      <ImageTitle>
        <img src={detail.titleImg} alt="images-title" />
      </ImageTitle>
      <ContentMeta>
        <Control>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="imgages" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <img src="/images/watchlist-icon.svg" alt="" />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Control>
        <SubTitle>{detail.subTitle}</SubTitle>
        <Discription>{detail.description}</Discription>
      </ContentMeta>
    </Container>
  );
};
export default Detail;
const Container = styled.div`
  display: block;
  min-height: calc(100vh-250px);
  position: relative;
  padding: 0 calc(3.5vw +5px);
  top: 72px;
  overflow: hidden;
`;
const BackGround = styled.div`
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: inherit;
    }
  }
`;
const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  -webkit-box-pack: start;
  width: 100%;
  height: 40vh;
  margin: 50px auto 10px auto;
  padding-bottom: 24px;
  min-height: 180px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 30vw;
    margin-top: 10px:
    object-fit:contain;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  padding: 10px;
  min-height: 56px;
  flex-flow: row nowrap;
`;
const Player = styled.button`
  border: none;
  margin-right: 15px;
  font-size: 14px;
  height: 56px;
  padding: 0px 23px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  letter-spacing: 1.4;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 10px;
    padding: 0 15px;
    height: 42px;
    img {
      width: 28px;
    }
  }
`;
const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;
const AddList = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  height: 60px;
  width: 60px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  position: relative;
  margin-left: 40px;
  img {
    width: 100%;
    object-fit: contain;
    position: absolute;
    height: 30px;
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;
const GroupWatch = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  height: 60px;
  width: 60px;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  div {
    height: 60px;
    width: 60px;
    background: rgb(0, 0, 0);
    border: 1px solid white;
    border-radius: 50%;
    img {
      width: 60%;
      height: 100%;
      object-fit: contain;
    }
    @media (max-width: 768px) {
      height: 50px;
      width: 50px;
    }
  }
`;
const SubTitle = styled.div`
  line-height: 1.55;
  font-size: 20px;
  color: rgb(249, 249, 249);
  text-align: left;
  margin-left: 24px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Discription = styled.div`
  font-size: 25px;
  padding: 20px;
  line-height: 1.66;
  color: rgb(249, 249, 249);
  text-align: left;
  font-family: sans-serif;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
