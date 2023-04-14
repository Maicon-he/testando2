const btn = document.querySelector('#btn');
btn.onclick=criaBox



function criaBox(){

  const main = document.querySelector('#boxMain')


const box1 = document.createElement('div')
box1.setAttribute('class','w3-quarter')

const box2 = document.createElement('div')
box2.setAttribute('class','w3-container w3-teal w3-padding-16')
box2.style.marginTop = '20px'


const btn = document.createElement('button')
btn.textContent = 'Em preparo'
const p = document.createElement('p')


p.textContent = 'xis salada' 

main.appendChild(box1)
box1.appendChild(box2)
box2.appendChild(btn)
box2.appendChild(p)


function preparo(){
  
box2.parentNode.removeChild(box2)
container2()
}
btn.onclick =preparo


}

////////////////Container 2 /////////////////////

function container2(){

  

  const main2 = document.querySelector('#boxMain2')

const box1_2 = document.createElement('div')
box1_2.setAttribute('class','w3-quarter')

const box2_2 = document.createElement('div')
box2_2.setAttribute('class','w3-container w3-blue w3-padding-16')
box2_2.style.marginTop = '20px'

const btn = document.createElement('button')
btn.textContent = 'Pronto'

const p = document.createElement('p')
p.textContent = 'xis salada'

main2.appendChild(box1_2)
box1_2.appendChild(box2_2)
box2_2.appendChild(p)
box2_2.appendChild(btn)

function pronto(){
  
  box2_2.parentNode.removeChild(box2_2)
  container3()
  }
  btn.onclick = pronto
  

}

///////////////// Container 3////////////////////

function container3(){

const main3 = document.querySelector('#boxMain3')


  
const box1_3 = document.createElement('div')
box1_3.setAttribute('class','w3-quarter')

const box2_3 = document.createElement('div')
box2_3.setAttribute('class','w3-container w3-orange w3-padding-16')
box2_3.style.marginTop = '20px'

const btn = document.createElement('button')
btn.textContent = 'Há Caminho'

const p = document.createElement('p')
p.textContent = 'xis salada'

main3.appendChild(box1_3)
box1_3.appendChild(box2_3)
box2_3.appendChild(p)
box2_3.appendChild(btn)

function caminho(){
  
  box2_3.parentNode.removeChild(box2_3)
  container4()
  }
  btn.onclick = caminho
  

}

///////////////// Container 4////////////////////

function container4(){

  const main4 = document.querySelector('#boxMain4')
  
  
    
  const box1_4 = document.createElement('div')
  box1_4.setAttribute('class','w3-quarter')
  
  const box2_4 = document.createElement('div')
  box2_4.setAttribute('class','w3-container w3-green w3-padding-16')
  box2_4.style.marginTop = '20px'
  
  const btn = document.createElement('button')
  btn.textContent = 'fim'
  
  const p = document.createElement('p')
  p.textContent = 'xis salada'
  
  main4.appendChild(box1_4)
  box1_4.appendChild(box2_4)
  box2_4.appendChild(p)
  box2_4.appendChild(btn)
  
  function caminho(){
    
    box2_4.parentNode.removeChild(box2_4)
  
    }
    btn.onclick = caminho
    
  
  }
