import { GitHubUser } from "./GitHubUser";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
    const {username} = useParams()
    return (
        <>
            <GitHubUser username={username} />
        </>
    )
}