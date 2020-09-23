fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
.then(e => e.json())
  .then(ds => ds.map(beer => {
    if (beer.image_url !== 'https://images.punkapi.com/v2/keg.png' && beer.image_url !== 'https://images.punkapi.com/v2/cask.png') {
      const div = document.createElement('div')
      const image = document.createElement('img')
      const name = document.createElement('h1')
      const description = document.createElement('h3')
      name.innerText = beer.name
      description.innerText = beer.description
      image.setAttribute('src',beer.image_url)
      image.setAttribute('width',50)
      image.setAttribute('class','beer-image')
      div.setAttribute('class','box')
      div.setAttribute('class','wow bounceInUp') 
      div.appendChild(name)
      div.appendChild(image)
      div.appendChild(description) 
      document.querySelector('#main').appendChild(div)
      gsap.from('#main div',{y:200,scrollTrigger: ".box", duration:3})
      gsap.to('#main div',{y:0,scrollTrigger: ".box", duration:4})
    }
}))