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
                        position: relative;
                    }
                    .container {
                        text-align: center;
                    }
                    .video__wrapper:before {
                        content: "";
                        position: absolute;
                        top: -8rem;
                        right: -8rem;
                        width: 35rem;
                        height: 35rem;
                        border-radius: 50%;
                        background-image: linear-gradient(206deg, #abe1ea, #73c0d1);
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