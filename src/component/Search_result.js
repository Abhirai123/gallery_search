import React from 'react'

const Search_result = (props) => {
    const imgurl= `https://source.unsplash.com/1600x900/?${props.name}`
    return (
        <div className="img_search">
            <h1> Search Result...</h1>
            <img src={imgurl} alt="" />
        </div>
    )
}

export default Search_result
