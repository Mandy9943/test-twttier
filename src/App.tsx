import { Button } from "antd";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [urlLink, setUrlLink] = useState();
  async function func() {
    var config = {
      method: "get",
      url: "http://localhost:4000/api/v1/twitter/twitt",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IlYxVnZUbVJGY0ZKMkxXVjNTbGwxZERKTWNESkJjbmhLV0hOblNqRXplVmx3VEMxU00yZFpSbXhFV1dRdE9qRTJOelEyT1RBMU56Z3dOelE2TVRvd09tRjBPakUiLCJyZWZyZXNoVG9rZW4iOiJiR3AwWld4Rk9EaHhaWGRtT0c5TVFsaEVSVWxSVW1sSmVIWXRSR2syZGkxWk1VUTRkSFo0VGpJeVZXazRPakUyTnpRMk9UQTFOemd3TnpRNk1Ub3dPbkowT2pFIiwiaWF0IjoxNjc0NjkwNTc3LCJleHAiOjE2NzQ2OTIzNzd9.lWbTL79qcf9jFMU5vmW4KsgNsYS6n5E-pTiSMNRah40",
      },
      withCredentials: true,
      credentials: "include",
    };

    axios(config)
      .then(function (response) {
        console.log("response", response.data);

        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function callback() {
    var config = {
      method: "get",
      url: "http://localhost:4000/api/v1/twitter/callback?state=kABjissBNJEqzmQ6bwVJph-4Y-6iwrX~&code=MWNYdVlqcDBibEZHN2ZZV3RnVTdPY21QM2o2RWwwOERMWmwxd0JuTVNlaElzOjE2NzQ5Nzg3NjQ4Nzc6MTowOmFjOjE",
    };

    axios(config)
      .then(function (response) {
        console.log("response", response.data);
        console.log(JSON.stringify(response.data));
        setUrlLink(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function login() {
    var config = {
      method: "get",
      url: "http://127.0.0.1:4000/api/v1/twitter/auth",
      withCredentials: true,
      credentials: "include",
    };

    axios(config)
      .then(function (response) {
        console.log("response", response.data);
        console.log(JSON.stringify(response.data));
        setUrlLink(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <Button onClick={login}>Login</Button>
      <a href={urlLink}>
        <Button>Login twitter</Button>
      </a>
      <Button onClick={callback}>callback</Button>
      <Button onClick={func}>fetch</Button>
    </div>
  );
};

export default App;
