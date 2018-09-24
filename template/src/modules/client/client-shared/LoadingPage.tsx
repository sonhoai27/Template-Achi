import * as React from 'react'
export const LoadingPage = () => {
    return (
        <div className="loading-page">
            <div className="loading-wrap">
                <div className="loading-card">
                    <div className="ball" />
                    <div className="loading-board board1">
                    </div>
                    <div className="loading-board board2">
                    </div>
                    <div className="loading-board board3">
                    </div>
                </div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>
    )
}
