import { postData } from "./utils/httpReq.js";
import { setCookie, getCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputBox[0].value;
  const password = inputBox[1].value;
  const data = { username, password };
  const response = await postData("auth/login", data);
  setCookie("token", response.token);

  location.assign("index.html");
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
