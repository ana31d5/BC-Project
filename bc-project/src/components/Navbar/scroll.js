import React from 'react'

export const scroll = () => {
  return (
    function preventScroll(e){
        e.preventDefault();
        e.stopPropagation();
    
        return false;
    }
    
    function disable(){
      document.querySelector('.scrollable').classList.add('disable-scroll');
    }
    
    function enable(){
      document.querySelector('.scrollable').classList.remove('disable-scroll');
    }
    
    document.querySelector('#prevent').addEventListener('click', disable);
    document.querySelector('#allow').addEventListener('click', enable);
  )
}
