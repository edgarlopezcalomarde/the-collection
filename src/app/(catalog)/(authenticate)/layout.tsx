import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen flex bg-slate-400'>
            {children}
        </div>
    )
}

export default layout

