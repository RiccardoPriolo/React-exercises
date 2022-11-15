import React, { useEffect, useState } from "react";
import axios from "axios";

function useGitHubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [username]);

  return {
    data: data,
  };
}

export function GitHubUser({ username }) {
  const { data } = useGitHubUser(username);

  return (
    <div>
      <img src={data.avatar_url} alt="user" className="avatar" />
      <h2>{data.name}</h2>
      <p>{data.html_url}</p>
    </div>
  );
}
