// js files
import { CheckIfEmpty } from "./js/checkInputFiled";
import { CheckPolarity } from "./js/resultChecker";

import "./styles/base.scss";
import "./styles/foot.scss";
import "./styles/head.scss";

document
  .getElementById("sumbit-btn")
  .addEventListener("click", preformAction);

function preformAction() {
  console.log("CLICKED");
  const textareaContent = document.getElementById("text").value;
  console.log(document.getElementById("text"));
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
      const resElement = document.getElementById('result');

      const polarity = CheckPolarity(res.body.score_tag);
      console.log(polarity);

      if(!CheckIfEmpty(textareaContent)){
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
    formdata.append("lang", data.lang); 
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
