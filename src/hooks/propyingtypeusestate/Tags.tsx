import React, { useState } from 'react'
type Tag ={
  id:number;
  value:string;
}
const Tags = () => {
  // const [tags,setTags] =useState([]);
  const [tags,setTags] =useState<Tag[]>([]);

  return (
<div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  )
}

export default Tags