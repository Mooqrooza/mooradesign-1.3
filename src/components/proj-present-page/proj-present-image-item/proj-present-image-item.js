import React, { useEffect, useRef }  from 'react';
import './proj-present-image-item.css';

const ProjPresentImageItem = ({ el, id, txtColorNew }) => {
    const imgWrapperRef = useRef(null);
    useEffect(() => {
        const imgWrapperEl = imgWrapperRef ? imgWrapperRef.current : null;
        if (imgWrapperEl) {
            el.classList.add('pp-img');
            el.setAttribute('alt', '%$##');
            imgWrapperEl.innerHTML = '';
            imgWrapperEl.appendChild(el);
        }
    });
    return (
        <div className='pp-img-container' >
            <div ref={imgWrapperRef}></div>
            <div className='pp-img-counter' style={{ color: txtColorNew }}>{ id + 1 }</div>
        </div>
    )
};

export default ProjPresentImageItem;
