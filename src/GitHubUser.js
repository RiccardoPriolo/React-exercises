import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGitHubUser(username) {
  const { data } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  return {
    data,
  };
}

export function GitHubUser({ username }) {
  const { data } = useGitHubUser(username);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.avatar_url} alt="user" className="avatar" />
        </div>
      )}
    </div>
  );
}
