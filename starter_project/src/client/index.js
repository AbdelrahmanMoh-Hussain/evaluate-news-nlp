// js files
import { handleSubmit } from "./js/formHandler";
import { checkForName } from "./js/nameChecker";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

// alert("I EXIST")
// console.log("CHANGE!!");

// sass files

document
  .getElementById("submitButton")
  .addEventListener("click", preformAction);

function preformAction() {
  console.log("CLICKED");
  const textareaContent = document.getElementById("name").value;
  console.log(document.getElementById("name"));
  console.log(textareaContent);

  postDate("/add", { text: textareaContent }).then(function (flag) {
    console.log(flag);
    getData().then(function(data){
      console.log(data);
      analysisData(data).then(function(res) {
        console.log(res)
      })
    })
  });
}

const getData = async () => {
  console.log("HERE");
  const response = await fetch("/get");
  try {
    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const postDate = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const analysisData = async (data) => {
  console.log("ANAALYSIS");
  const requestOptions = {
    method: "POST",
    body: data,
    redirect: "follow",
  };
  const response = await fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  );

  try {
    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then(response => ({
//     status: response.status,
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));
