let aboutItems = [
  'A CARD GAME FOR PEOPLE WHO ARE INTO',
  'KITTENS AND EXPLOSIONS AND LASER BEAMS',
  'AND SOMETIMES GOATS'
]

function createAboutList(aboutItems) {
  let ul = document.querySelector('.about ul')
  for (let text of aboutItems) {
    console.log("appending ", text, " to ", ul);
    let li = document.createElement('li')
    li.innerHTML = text
    ul.appendChild(li)
  }
}

function removeAboutList() {
  let ul = document.querySelector('.about ul')
  let children = ul.children

  // remove any items with AND in them
  // this does not work because children length is changing while we
  // are in this for loop
  // for (let i =0; i <= children.length; i++) {
  //   let node = children[i]
  //   if (node.innerText.includes("AND")){
  //     console.log("removing ", i, node);
  //     ul.removeChild(node)
  //   }
  // }

  let nodesToDelete = []
  for (let node of children) {
    if (node.innerText.includes("AND")) {
      nodesToDelete.push(node)
    }
  }
  // this does not work because children length is changing while we
  // are in this for loop
  for (let node of nodesToDelete) {
    console.log('removing', node);
    ul.removeChild(node)
  }
}


// WE DO:
// <div class="card">
//     <h3>Explode</h3>
//     <img src="/images/explode.png">
// </div>
function createCard(text, imageUrl) {
  let div = document.createElement('div')
  div.classList.add('card')

  let h3 = document.createElement('h3')
  h3.appendChild(document.createTextNode(text))
  div.appendChild(h3)

  let image = document.createElement('img')
  image.setAttribute('src', imageUrl)
  div.appendChild(image)

  return div
}

function createExplodeCard() {
  let card = createCard('Explode', "/images/explode.png")
  document.querySelector('.cards-container').appendChild(card)
}

function defuseCard() {
  let explodeCard = document.querySelector('.cards-container').firstChild
  console.log("explodeCard", explodeCard);

  let defuseCard = createCard('Defuse', '/images/defuse.png')

  explodeCard.parentNode.replaceChild(defuseCard, explodeCard)
}


document.addEventListener("DOMContentLoaded", () => {
  createAboutList(aboutItems)
  removeAboutList()
  createExplodeCard()

  setTimeout(() => { defuseCard() }, 2000)
})



// YOU DO: recreate the nav menu items, you will need to start by making th UL elem
//            <ul class="menu">
//                <li>
//                    <a href="#about" id="aboutlink">Exploding Kittens</a>
//                </li>
//                <li>
//                    <a href="#cards">Cards</a>
//                </li>
//                <li>
//                    <a href="#rules">Rules</a>
//                </li>
//            </ul>
