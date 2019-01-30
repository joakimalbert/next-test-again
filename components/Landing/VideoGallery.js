import React from 'react'

class VideoGallery extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="title">Voice of our small users... 😀</h2>
                </div>
                <style jsx>{`
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