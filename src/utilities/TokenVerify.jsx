const TokenVerify = (user) => {
  fetch("https://greate-adventure-with-fahim-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("great-adventure-token", data.token);
    });
};

export default TokenVerify;
