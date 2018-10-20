import * as React from 'react'
import { Helmet } from 'react-helmet';
export const LoadingPage = () => {
    return (
        <>
        <Helmet
              style={[
                {
                  cssText: `.loading-page {
                    width: 100%;
                    height: 100%;
                  }
                  
                  .loading-page.hidden {
                    display: none;
                  }
                  
                  .loading-page {
                    display: table;
                    background-color: #4eb7f5;
                    display: table;
                    background-color: #4eb7f5;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1000000;
                  }
                  
                  .loading-wrap {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                  }
                  
                  .loading-card {
                    width: 200px;
                    height: 240px;
                    border-radius: 10px;
                    margin: auto;
                    background-color: white;
                    position: relative;
                    box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.15);
                  }
                  
                  .loading-board {
                    width: 52px;
                    height: 4px;
                    position: absolute;
                    background-color: #4eb7f5;
                    border-radius: 4px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    animation: loadingBoard 3s linear both infinite;
                  }
                  
                  .loading-board.board2 {
                    opacity: 0;
                    transform: translate(-50%, -50%);
                    animation-delay: 1s;
                  }
                  
                  .loading-board.board3 {
                    opacity: 0;
                    transform: translate(-50%, -50%);
                    animation-delay: 2s;
                  }
                  
                  .ball {
                    width: 14px;
                    height: 14px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -10px;
                    margin-top: -10px;
                    border-radius: 50%;
                    background-color: #4eb7f5;
                    opacity: 0;
                    animation: jumpingBall 1s 1s forwards cubic-bezier(0.87, 0.04, 0.26, 0.95)
                      infinite;
                  }
                  
                  .loading-text {
                    color: white;
                    padding-top: 20px;
                    padding-bottom: 40px;
                    width: 100%;
                    text-align: center;
                  }
                  
                  @keyframes loadingBoard {
                    0% {
                      transform: translate(100%, -1500%);
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                    100% {
                      transform: translate(-200%, 1500%);
                      opacity: 0;
                    }
                  }
                  
                  @-webkit-keyframes loadingBoard {
                    0% {
                      transform: translate(100%, -900%);
                    }
                    100% {
                      transform: translate(-100%, 900%);
                    }
                  }
                  
                  @keyframes jumpingBall {
                    0% {
                      transform: translate(0, -50px) scaleX(1);
                      opacity: 1;
                    }
                    49% {
                      transform: translate(0, -2px) scaleX(1.05);
                    }
                    100% {
                      transform: translate(0, -50px);
                      opacity: 1;
                    }
                  }`
                }
              ]}
            />
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
                <p className="loading-text">Đang tải...</p>
            </div>
        </div>
        </>
    )
}
