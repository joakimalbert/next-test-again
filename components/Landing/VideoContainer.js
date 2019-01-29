import React from 'react'

class VideoContainer extends React.Component {
    render() {
        return (
            <div className="video__wrapper">
                <div className="container">
                    <div className="content__wrapper">
                        <h2 className="title">Learning made fun!</h2>
                        <p className="ingress">With gamified learning path, motiviating confetti rains and research based content, Albert will make mathematics learning fun and delightful for your child.</p>
                    </div>
                    <iframe width="100%" height="370" src="https://www.youtube.com/embed/ypqcU0ZKHbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <style jsx>{`
                    .video__wrapper {
                        margin-top: 100px;
                    }
                    .container {
                        display: flex;
                    }
                    .content__wrapper {
                        flex: 1;
                        padding-right: 80px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    iframe {
                        flex: 1.5;
                    }
                    .title {
                        margin-top: 0;
                    }
                    .ingress {
                        margin-bottom: 50px;
                    }
            `}</style>
            </div>
        )
    }
}

export default VideoContainer