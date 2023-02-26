import React from 'react'
import memesData from '../memesData'

const Body = () => {

  const getRandomImage = () => {
    const memes = memesData.data.memes
    const random = Math.floor(Math.random() * memes.length)
    return memes[random].url
  }

  const [memeUrl, setMemeUrl] = React.useState(getRandomImage())

  const newMeme = () => {
    setMemeUrl( getRandomImage() )
  }


  const [memeText, setMemeText] = React.useState({
    topText: '',
    bottomText: '',
  })

  const addText = (event) => {
    const {name, value} = event.target 
    setMemeText(prev => {
      return {...prev, [name]: value}
    })
  }


  return (
    <div>
        <div style={{display: 'flex'}}>
          <input onChange={addText} name="topText" placeholder="Top Text" type="text" className='top-input' style={{padding: '10px',  marginTop: '30px', width: '100%', marginLeft: '30px',   borderRadius: '.5rem', border: 'solid 1px'}}/>
          <input onChange={addText} name="bottomText" placeholder="Bottom Text" type="text" className='botttom-input' style={{padding: '10px',  marginLeft: '30px',  marginTop: '30px', width: '100%', marginRight: '30px',  borderRadius: '.5rem', border: 'solid 1px'}}/>
        </div>
        <div style={{display: 'flex'}}>
        <button onClick={newMeme} style={{height: '40px', width: '100%', marginLeft: '30px', marginRight: '30px', marginTop: '20px',borderRadius: '.5rem', border: 'solid 1px', backgroundColor: 'purple', color: 'white'}}>Get a new image 🖼</button>
        </div>
      <div style={{position: 'relative'}}>
          <img src={memeUrl} style={{maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px',borderRadius: '.5rem', display: 'flex'}} alt="memeImage" />
          <p className='meme-text top'> {memeText.topText}</p>
          <p className='meme-text bottom'> {memeText.bottomText}</p>
      </div>
    </div>
  )
}

export default Body