
const ul = document.querySelector('#ul')
const form1 = document.querySelector('#form')
const input = document.querySelector('#petName')
const btn = document.querySelector('#clear')
const item = document.querySelector('.items')
const h4 = document.querySelector('.h4')
const downPage = document.querySelector('.down')

form1.addEventListener('submit', (m) => {
      m.preventDefault()
      const petName = input.value
      
      const spanRemove = document.createElement('span')
      spanRemove.innerText = 'remove'

      if (petName === '') {
            
      }

      else {

            h4.className = 'remove'
            const li = document.createElement('li')
            li.innerText = petName;
            ul.append(li)
            input.value = ''
            li.id = 'list'

            const remove = document.createElement('button')
            remove.id = 'remove-btn'
            
            li.append(remove)
            

            remove.onclick = () => {
                  li.className = 'remove'

                  setTimeout(() => {
                        alert('successfully removed!!!')
                  }, 100)
            
            }

            setTimeout(() => {
                  alert(`'${petName}' has successfully added to your pet list`)
            }, 500)

            if (li === null) {
                  h4.className = 'remove'
            }
      }

      
})














