import React from 'react';

interface CardProps {
    children: React.ReactNode
}

const Card = ({children}: CardProps) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default Card