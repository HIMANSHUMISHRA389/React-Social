const BASEURL = "http://localhost:8800/api/";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({
    type: "LOGIN_START",
  });
  try {
    console.log(userCredentials);
     const res = await fetch(BASEURL+ "auth/login", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         email: "hello",
         password:"123",
       }),
     });
    console.log(userCredentials);
    const res1 = await res.json();
    console.log(res1);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: error,
    });
  }
};
