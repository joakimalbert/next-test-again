import React from 'react'

class VideoContainer extends React.Component {
    render() {
        return (
            <div className="video__wrapper">
                <div className="container">
                    <div>
                        <h2 className="title">Learning made fun!</h2>
                        <p className="ingress">With gamified learning path, motiviating confetti rains and research based content, Albert will make mathematics learning fun and delightful for your child.</p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ypqcU0ZKHbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <style jsx>{`
                    .hero__wrapper {
                        background-color: white;
                        padding-bottom: 200px;
                        padding-top: 100px;
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