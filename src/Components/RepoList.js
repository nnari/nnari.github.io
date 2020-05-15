import React, { useState, useEffect } from 'react';
import { Repo } from './Repo';

export const RepoList = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const data = await (await fetch("https://api.github.com/users/nnari/repos")).json();
            console.log(data);
            setState(data);
        }
        fetchRepos();
    }, [])

    const renderRepoList = (repos) => {
        return repos.map(repo => {
            if (!repo.fork && repo.description !== null) {
                return <Repo key={repo.id} repo={repo} />
            }
        })
    }

    return (
        <section class="about-section">
            <h1 class="text-white text-center">Some of my GitHub projects</h1>
            <div class="container-fluid mt-4 pb-3">
                <div class="row justify-content-center m-0">
                    {renderRepoList(state)}
                </div>
            </div>
        </section>
    )
}