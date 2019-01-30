import React from 'react'

class VideoGallery extends React.Component {
    render() {
        return (
            <div className="video__wrapper">
                <div className="container">
                    <h2 className="title">Voice of our small users... 😀</h2>
                </div>
                <style jsx>{`
                    .video__wrapper {
                        background: url('static/assets/images/oval.png');
                        background-size: 140% 100%;
                        background-position-x: -200px;
                        padding: 30rem 0;
                    }
                    .container {
                        text-align: center;
                    }
                    .title {
                        font-size: 4.5rem;
                        font-weight: bold;
                    }
            `}</style>
            </div>
        )
    }
}

export default VideoGallery