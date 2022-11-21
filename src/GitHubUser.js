import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGitHubUser(username) {
  const { data, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function handleRefreshUsers() {
    mutate();
  }

  return {
    data,
    onRefresh: handleRefreshUsers,
  };
}

export function GitHubUser({ username }) {
  const { data, onRefresh } = useGitHubUser(username);

  return (
    <div>
      <button onClick={onRefresh}>Refresh users</button>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.avatar_url} alt="user" className="avatar" />
        </div>
      )}
    </div>
  );
}
