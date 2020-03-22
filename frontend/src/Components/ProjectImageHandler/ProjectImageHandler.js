import React from 'react';

export default function ProjectImageHandler(imgData){
  let srcName = '';

  if (window.innerWidth > 1250){
    srcName = imgData.imageData[0] + 'Best.jpg';
  } else if (window.innerWidth > 850){
    srcName = imgData.imageData[0] + 'High.jpg';
  } else {
    srcName = imgData.imageData[0] + 'Medium.jpg';
  }

  return(
    <div className='projectImage'>
      <img  src={require('../../Visual/ProjectImages/' + srcName)} alt={imgData.imageData[1]} />
    </div>
  );
}