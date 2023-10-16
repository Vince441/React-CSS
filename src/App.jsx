import React from 'react';
import './style.scss';
import { useState } from 'react';




function App(){
  const [isFavorite, setIsFavorite] = useState(false);


return (
  <div className = "container-global">
    <div className = "container">
      <div className="imgTitle">
<img src="https://m.media-amazon.com/images/I/A1tB9SZMDQL._SX425_.jpg" alt=""/>


<div className="title">
<h1>Paul Kalkbrenner</h1>
<p className="Title-album" >Berlin Calling<br/>(2008)</p>
</div></div>
<div className='like-container'>
<p className='rateThisAlbum'>Like this Album</p>

<div className={isFavorite ? 'isFavorite' : 'notFavorite'}
onClick={() => setIsFavorite((current) => !current)}
></div>
</div>

</div>




</div>


)
}


export default App