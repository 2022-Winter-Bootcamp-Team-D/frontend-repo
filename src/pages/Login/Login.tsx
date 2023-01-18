import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../components/CustomerRegister/Logo";
import {
    Link
  } from "react-router-dom"; 
import axios from "axios";

function Login() {
    document.body.style.backgroundColor = "#FFFBD9";
    
    const [store_name, setStore_name] = useState('')
    const [password, setPassword] = useState('')
    
    function Con() {
        console.log(store_name, password)
    }

// URL확인 필요!
    const storeLogin =()=>{
        //axios.post(url : post가 연결되어야 할 api주소, data : 백엔드에서 정의한 request body).then(앞 코드가 정상작동하면 실행되는 다음 행위)
        axios.post('http://localhost:8000/api/v1/stores/login/',{
          store_id: localStorage.getItem('store_id'),
          token: '민아'})
          .then((res) => console.log(res)) //(setItem) 로컬스토리지에 res.data.store_id를 "id"로 저장하는 코드,
                                           // res는 사용자 마음대로 정의, res.data.store_id는 백엔드에서 받아온 response body
    }

    return(
        <div>
            <Box className="InputStyle"
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <Logo/>
                    <TextField onChange={(e)=>{setStore_name(e.target.value)}} id="standard-basic" label="가게명 / 업소명" variant="standard" />
                    <TextField onChange={(e)=>{setPassword(e.target.value)}}id="standard-basic" label="비밀번호(4자리)" variant="standard" />
            </Box>
        <div className="InputStyle">
            <Link to="/WaitingList">
            <button className="ButtonStyle" onClick={()=>{ Con()
                //로그인 성공하면 스토어 아이디 받기 -> 받은거 subbtton 여기에 넘겨줘야함.. 그러면 어떻게 넘겨주나? 라우터 훅중에 uselocation() 이거 한번 찾아보쟈!
            }}>로그인</button>
            </Link>
            <Link to="/storeRegister">
                <button onClick={storeLogin} className="ButtonStyle2" >가게 등록</button>
            </Link>
        </div>
      </div>
      );
  }

  export default Login;