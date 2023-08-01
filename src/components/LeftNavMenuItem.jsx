import React from 'react'

const LeftNavMenuItem = ({ text, icon, currentItem, onClick }) => {
    return (
        <div className={'text-white text-sm h-10 flex items-center cursor-pointer px-3 mb-[1px] rounded-lg hover:bg-white/[0.20] ' + currentItem}
            onClick={onClick}
        >
            <span className='text-xl mr-5'>{icon}</span>
            {text}
        </div>
    )
}

export default LeftNavMenuItem