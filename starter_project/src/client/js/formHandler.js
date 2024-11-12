// Replace checkForName with a function that checks the URL
import { checkForName } from "./nameChecker";

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = "https://localhost:8000/api";


function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = "Picard";
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };
