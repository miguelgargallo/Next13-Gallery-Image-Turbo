import React from 'react';

interface YouTubeProps {
    videoId: string;
}

export const YouTube: React.FC<YouTubeProps> = ({ videoId }) => {
    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};
