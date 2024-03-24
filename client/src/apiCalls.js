const BASEURL = "https://react-social-7e9a.onrender.com/api/";

export const LoginCall = async (userCredentials, dispatch) => {
  dispatch({
    type: "LOGIN_START",
  });

  //auth/login

  try {
    console.log(userCredentials);
    // Define the URL to which you want to send the POST request
    const url = BASEURL + "auth/login";

    // Make the POST request using fetch
    const res = await fetch(url, {
      method: "POST", // Specify the request method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Convert data to JSON format
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });
    const res1 = await res.json();
    console.log(res1?.user?._id)
    localStorage.setItem("token", res1.token);
    localStorage.setItem("userId",res1?.user?._id)
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res1,
    });
  } catch (error) {
   
    dispatch({
      type: "LOGIN_FAILED",
      payload: error,
    });
  }
};
