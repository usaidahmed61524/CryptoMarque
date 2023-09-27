"use client";
import axios from "axios";
import swal from "sweetalert";

export const loginwithDomain = async (d, i) => {
  let useObj;

  try {
    const response = await axios.get(
      `http://localhost:3000//login?username=${d}&tokenid=${i}`
    );
    // console.log(response.data);
    useObj = response.data;
    swal("Login", "successfully Login With MMIT Domain:", "success");
  } catch (error) {
    swal("Opps!", "user is not exist", "error");
  }

  // console.log("user object", useObj);

  return { d, i, useObj };
};
