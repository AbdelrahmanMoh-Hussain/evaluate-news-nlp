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
// handleSubmit()
// checkForName()

document
  .getElementById("submitButton")
  .addEventListener("click", preformAction);

function preformAction() {
  console.log("CLICKED");
  const textareaContent = document.querySelector("textarea").value;
  console.log(document.getElementById("textarea"));
  console.log(textareaContent);

  // postDate("/add", { text: textareaContent }).then(function (flag) {
  //   console.log(flag);
  //   getData().then(function (data) {
  //     console.log(data);
  //     analysisData(data).then(function (res) {
  //       console.log(res);
  //     });
  //   });
  // });
  postDate("/add", { text: textareaContent })
    .then(function (flag) {
      console.log(flag);
      return getData();
    })
    .then(function (data) {
      console.log(data);
      return analysisData(data);
    })
    .then(function (res) {
      console.log(res);
      const resElement = document.getElementById('results');

      let polarity;
      if(res.body.score_tag === "P+" || res.body.score_tag === "P"){
        polarity = "Postive";
      }
      else if(res.body.score_tag == "N" || res.body.score_tag === "N+"){
        polarity = "Negitive";
      }
      else {
        polarity = "Natrual"
      }

      if(textareaContent !== ""){
        resElement.innerHTML = `<p>polarity: ${polarity}</p>
        <p>subjectivity: ${res.body.subjectivity}</p>
        <p>text: ${textareaContent}</p>`
      }

    })
    .catch(function (error) {
      console.error("Error in promise chain:", error);
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
  console.log("analysisData");
  console.log(data);
  try {
    const formdata = new FormData();
    formdata.append("key", data.key);
    formdata.append("txt", data.txt);
    formdata.append("lang", data.lang); // 2-letter code, like en es fr ...
    console.log(formdata);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    console.log(requestOptions.body);
    const response = await fetch(
      "https://api.meaningcloud.com/sentiment-2.1",
      requestOptions
    );
    const body = await response.json();
    console.log({ status: response.status, body });
    return { status: response.status, body };
  } catch (error) {
    console.error("error", error);
    return { status: "error", error };
  }
};

// const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then(response => ({
//     status: response.status,
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));
