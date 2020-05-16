import React from 'react'

export const Repo = ({ repo }) => {

    return (
        <div class="col-auto m-0 p-0">
            <div class="card m-2" style={{ width: "22rem" }}>
                <div class="card-body p-3">
                    <h5 class="card-title"><i class="fab fa-github mr-2"></i>{repo.name}</h5>
                    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p class="card-text">{repo.description}</p>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" class="card-link">View on GitHub</a>
                </div>
            </div>
        </div>
    )
}

