import React from 'react'

function Botun1(){
    return(
        <div>
            <button
              disabled={page == Pitanja.length - 1}
              onClick={Next}
              className="btnkviz button button1"
              id="btnnn"
            >
              {text}
            </button>
        </div>
    )
}