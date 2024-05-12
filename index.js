const nameInput = document.querySelector("#name")
const button = document.querySelector("button")
const h1 = document.querySelector(".content")

button.addEventListener('click',
    (e)=>{
        e.preventDefault;
        //step1: nhap thong tin tu input
        const nameValue = nameInput.value;
        //step2: an click button
        //step3: hien thi namevalue len giao dien
        h1.innerHTML = "Xin chao " + nameValue;
        //step4: xoa thong tin input
        nameInput.value = '';

        //them class red cho h1
        h1.classList.add("red")
    }
)