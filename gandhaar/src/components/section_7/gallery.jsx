import React from 'react';
import './gallery.css'

const PuzzlePiece = () => (
    <div className="piece">
        <div className="puzzle"></div>
    </div>
);

const PuzzleGrid = () => {
    const n = 25;
    const k = 4;

    const generatePuzzlePieces = () => {
        const pieces = [];
        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j < k; j++) {
                row.push(<PuzzlePiece key={j} />);
            }
            pieces.push(
                <div key={i} className="item-box">
                    <div className="item-container">{row}</div>
                </div>
            );
        }
        return pieces;
    };

    return <div className="grid">{generatePuzzlePieces()}</div>;
};

const Gallery = () => (
    <div className='gallery'>
        <svg className='gallery_svg' viewBox="0 0 1 1">
            <defs>
                <clipPath id="puzzle" clipPathUnits="objectBoundingBox">
                    <path d="M0 0.7763157894736841H0.23684210526315788C0.3289473684210526 0.7763157894736841 0.35526315789473684 0.7236842105263157 0.2894736842105263 0.6578947368421053 0.22368421052631576 0.5921052631578947 0.3157894736842105 0.5526315789473684 0.39473684210526316 0.5526315789473684 0.47368421052631576 0.5526315789473684 0.5657894736842105 0.5921052631578947 0.5 0.6578947368421053 0.43421052631578944 0.7236842105263157 0.4605263157894737 0.7763157894736841 0.5526315789473684 0.7763157894736841H0.7763157894736842V0.5526315789473684C0.7763157894736842 0.4605263157894737 0.8289473684210525 0.4342105263157894 0.894736842105263 0.5 0.9605263157894737 0.5657894736842106 1 0.4736842105263157 1 0.39473684210526305 1 0.3157894736842106 0.9605263157894737 0.2236842105263157 0.894736842105263 0.2894736842105263 0.8289473684210525 0.3552631578947367 0.7763157894736842 0.32894736842105265 0.7763157894736842 0.23684210526315796V0H0V0.7763157894736841Z"></path>
                </clipPath>
            </defs>
        </svg>
        <PuzzleGrid />
    </div>
);

export default Gallery;
