import styled from "styled-components";
import Musical from "../../img/musical.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(248 249 250 / 91%);

  @media (min-width: 767px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Musical});
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  background-color: white;
  position: relative;
  text-align: center;
  img {
    width: 100vw;
    height: 40vh;
  }
  p {
    margin-top: -40px;
    bottom: 10px;
  }
  @media (min-width: 767px) {
    width: 30vw;
    height: 100vh;
    justify-content: space-between;
  }
  img {
    width: 32vw;
    height: 42vh;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-width: 300px;
  margin: auto;
  color: white;
  padding: 0px 16.2426px;
  gap: 10.15px;
  span {
    color: red;
    font-size: 10px;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }
  input {
    padding: 0px 16.2426px;
    gap: 10.15px;
    margin-top: 20px;
    width: 90%;
    height: 35px;
    color: #868e96;
    background: white;

    border: 1.2182px solid #343b41;
    border-radius: 16px;
  }
  select {
    padding: 0px 16.2426px;
    gap: 10.15px;
    color: #868e96;
    /* width: 90%; */
    height: 35px;

    background: #343b41;

    border: 1.2182px solid #343b41;
    border-radius: 4px;
    width: 275px;
  }
  button {
    background-color: #fffe57;
    color: black;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    height: 40px;
    width: 240px;
    margin-top: 20px;
    border-radius: 16px;
  }

  .p-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    color: black;
    font-weight: bold;
  }
  .span-register {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: black;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 26px;
  }
  .div-register {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: yellow;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 26px;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  }
  @media (min-width: 767px) {
    justify-content: center;
    align-items: center;
    width: 29vw;
    height: 100vh;
    margin: 0;
    margin-left: 40px;
    input {
      margin-top: 40px;

      height: 35px;
      color: #868e96;
      background: white;

      border: 1.2182px solid #343b41;
      border-radius: 16px;
    }
    button {
      margin-top: 40px;
      width: 180px;
    }
    .p-login {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      margin-right: 28px;
      color: black;
      font-size: 30px;
      font-weight: bold;
      text-shadow: 1px 0 0 #fffe57, 0 -1px 0 #fffe57, 0 1px 0 #fffe57,
        -1px 0 0 #fffe57;
    }
  }
`;
