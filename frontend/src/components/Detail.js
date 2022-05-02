import "./bootstrap.css"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { selectAll } from "../features/movie/movieSlice";
import {
  selectUserEmail,
  selectUserReservations
} from "../features/user/userSlice";
import { FormServiceClient } from "./proto/form_grpc_web_pb";
import { MovieServiceClient } from './proto/movie_grpc_web_pb';
import { UpdateMovieInfoRequest } from './proto/movie_pb'
import { UpdateUserReservationRequest } from './proto/form_pb'

import Select from 'react-select'
import React from "react";


const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const allMovies = useSelector(selectAll);
  const userReservations = useSelector(selectUserReservations);
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    allMovies.forEach(movie=>{
      if(movie.title == id) {
        setDetailData(movie);
        var backgroundField = document.getElementById("backgroundImg");
        var titleField = document.getElementById("titleImg");
        if(backgroundField != undefined && titleField != undefined){
          backgroundField.src = URL.createObjectURL(new Blob([movie.backgroundImg[0]], {type: 'image/png'}))
          titleField.src = URL.createObjectURL(new Blob([movie.titleImg[0]], {type: 'image/png'}))
        }
      }
    } )
  }, [id]);

  var screeningOptions = []
  var newMovieInfo
  var selectedTheatre;
  var selectedTime;

  const handleAvailableList = (e) => {
    console.log("Selected: ", e.value, e.label)
    var tmp = e.label.split("@")
    selectedTheatre = tmp[0].slice(0,-1)
    selectedTime = tmp[1].slice(1,)
  }

  const handleReserveMovie = () => {
    if (selectedTheatre === undefined) {
      alert("No schedule selected. Please select a theatre and a time.")
    } else {
      newMovieInfo.forEach(aTheatre => {
        if (aTheatre.name == selectedTheatre) {
          aTheatre.schedule.forEach(aSchedule => {
            if (aSchedule.time == selectedTime) {
              if (aSchedule.remainTicket < 1) {
                alert("All seats have been researved for this screening.\nPlease select another time.")
              } else {
                aSchedule.remainTicket--
                const movieService = new MovieServiceClient('http://localhost:8081', null, null)
                var request = new UpdateMovieInfoRequest()
                request.setMoviename(id)
                request.setNewscreeninginfo(JSON.stringify(newMovieInfo))

                var call = movieService.updateReservedMovieInfo(request, {}, function(err, response) {
                  if (err) {
                    console.log(err);
                    return null;
                  } else {
                    console.log("Update Movie Info Success? ", response)
                  }
                })

                var myReservations = []
                userReservations.forEach(aReservation => {
                  var oneUserReservationEntry = {}
                  oneUserReservationEntry["Title"] = aReservation["array"][0]
                  oneUserReservationEntry["Theatre"] = aReservation["array"][1]
                  oneUserReservationEntry["Time"] = aReservation["array"][2]
                  myReservations.push(oneUserReservationEntry)
                })
                
                var newUserReservationEntry = {}
                newUserReservationEntry["Title"] = id
                newUserReservationEntry["Theatre"] = selectedTheatre
                newUserReservationEntry["Time"] = selectedTime
                myReservations.push(newUserReservationEntry)

                const formService = new FormServiceClient('http://localhost:8080', null, null);
                var request = new UpdateUserReservationRequest()
                request.setUseremail(userEmail)
                request.setNewreservationlist(JSON.stringify(myReservations))

                var call = formService.updateUserReservation(request, {}, function(err, response) {
                  if (err) {
                    console.log(err);
                    return null;
                  } else {
                    console.log("Update User Info Success? ", response)
                  }
                })
                alert("Researve Success!")
              }
            }
          })
        }
      })
    }
  }

  const fillSelect = () => {
    allMovies.forEach(movie=>{
      if(movie.title == id) {
        var theatreStr = movie.theatre
        var theatreObj = JSON.parse(theatreStr)
        newMovieInfo = theatreObj
        
        var cnt = 0
        var totalScreeningNum = 0

        theatreObj.forEach(aTheatre => {
          totalScreeningNum += aTheatre.schedule.length
        })

        theatreObj.forEach(aTheatre => {
          aTheatre.schedule.forEach(aSchedule => {
            var oneEntry = {}
            oneEntry["value"] = cnt
            oneEntry["label"] = aTheatre.name + " @ " + aSchedule.time
            if (screeningOptions.length < totalScreeningNum) {
              screeningOptions.push(oneEntry)
              cnt += 1
            }
          })
        })
      }
    } )
  }
  
  return (
    <Container>
      <Background>
        <img alt={detailData.title} id="backgroundImg" />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} id="titleImg"/>
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList onClick={()=>handleReserveMovie()}>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <Select onMenuOpen={()=>fillSelect()} options={screeningOptions} onChange={e =>handleAvailableList(e)}></Select>
        <br></br>
        <br></br>
        <br></br>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
