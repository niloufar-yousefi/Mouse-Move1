let btn = document.getElementsByTagName('button')[0]
let rot = document.querySelectorAll('.rot')
let i = 5
let z = 1
let k = 1
let _main = document.getElementsByTagName('main')[0]
let box = document.getElementsByClassName('box')[0]
console.log(box);

//click the btn
btn.addEventListener('click', () => {
    //change photo    
    if (1 <= i && i <= 5) {
        rot.forEach(element => {
            let _i = element.getAttribute('data-id')
            if (i == Number(_i)) {
                element.style.zIndex = z
                element.style.transformOrigin = 'left'
                element.style.transform = 'translate(0, -50%) perspective(800px) rotateY(-160deg)'
            }
        })
        i = i - 1
        z = z + 1
        if (i == 1) {
            k = 1;
        }
        //change reset       
    } else if (i <= 0) {
        rot.forEach(element => {
            let _i = element.getAttribute('data-id')
            if (k == Number(_i)) {
                element.style.zIndex = z
                element.style.transformOrigin = 'left'
                element.style.transform = 'translate(0, -50%) perspective(800px) rotateY(-20deg)'
            }
        })
        k++
        if (k == 6) {
            i = 5;
        }
    }
})

//mouse move
_main.addEventListener('mousemove', (e) => {
    let x = (e.offsetX) / 50
    let y = (e.offsetY) / 50
    let w = (e.target.clientWidth) / 50
    let h = (e.target.clientHeight) / 50
     box.style.transition = 'transform 0.5s'
        box.style.transform =
            `perspective(800px) translateZ(80px)  rotateX(${x-(w/2)}deg) rotateY(${y-(y/2)}deg)`      
})