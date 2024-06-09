import React from "react";

const Button = ({attribution, onClickFunction}: {attribution: string, onClickFunction: () => void}) => {
    return(
        <button data-testid={`${attribution}`} className="inline-block ml-1 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white px-2 py-1 rounded-md"  onClick={onClickFunction}>{attribution}</button>
    );
}

export default Button;