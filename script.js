let form = document.querySelector('.quiz-form');
let correct = ['A', 'B', 'A', "A", 'C']
let olibTawa = document.querySelector('.d-none')
let baho = document.querySelector('.baho')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    olibTawa.classList.remove('d-none')
    let userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    let score = 0
    correct.forEach((el, i) => {
        if (el == userAns[i]) {
            score += 20
            baho.innerHTML = score + '%'
        }
    })
    console.log(score)
})
for (let i = 0; i < correct.length; i++) {
    correct[i]
}


































// console.log(form.q1.value);
// console.log(form.q2.value);
// console.log(form.q3.value);
// console.log(form.q4.value);
window.addEventListener('click', (e) => {
    console.log(e.target);
})