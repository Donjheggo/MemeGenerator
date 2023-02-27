import React from 'react'

const Body = () => {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    image: 'https://i.imgflip.com/gk5el.jpg '
  })

  const addText = (event) => {
    const {name, value} = event.target
    setMeme(prev => {
      return {...prev, [name]: value }
      }
    )
  }

  const [memesData, setMemesData] = React.useState([])

  React.useEffect( () => {
    const getAPI = async() => {
      const data = await fetch("https://api.imgflip.com/get_memes")
      const response = await data.json()
     setMemesData(response.data.memes)
    }
    getAPI()
  }, [])


  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * memesData.length)
    const randomImage = memesData[randomNumber].url
    setMeme(prev => {
      return {...prev, image: randomImage}
    }) 
  }


  return (
    <div>
        <div style={{display: 'flex'}}>
          <input onChange={addText} name="topText" placeholder="Top Text" type="text" className='top-input' style={{padding: '10px',  marginTop: '30px', width: '100%', marginLeft: '30px',   borderRadius: '.5rem', border: 'solid 1px'}}/>
          <input onChange={addText} name="bottomText" placeholder="Bottom Text" type="text" className='botttom-input' style={{padding: '10px',  marginLeft: '30px',  marginTop: '30px', width: '100%', marginRight: '30px',  borderRadius: '.5rem', border: 'solid 1px'}}/>
        </div>
        <div style={{display: 'flex'}}>
        <button onClick={getRandomImage} style={{height: '40px', width: '100%', marginLeft: '30px', marginRight: '30px', marginTop: '20px',borderRadius: '.5rem', border: 'solid 1px', backgroundColor: 'purple', color: 'white'}}>Get a new image 🖼</button>
        </div>
      <div style={{position: 'relative'}}>
          <img src={meme.image} style={{maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px',borderRadius: '.5rem', display: 'flex'}} alt="memeImage" />
          <p className='meme-text top'> {meme.topText}</p>
          <p className='meme-text bottom'> {meme.bottomText}</p>
      </div>
    </div>
  )
}

export default Body