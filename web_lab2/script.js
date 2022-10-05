const prevBtn = document.querySelectorAll(".btn_prev");
const nextBtn = document.querySelectorAll(".btn_next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form_step");
const progressSteps = document.querySelectorAll(".progress_step")

const form = document.getElementsByClassName("form");

let userName = document.getElementById("user_name");
let userSername = document.getElementById("user_sername")


let formStepNum = 0;

nextBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        formStepNum++;
        updateFormSteps();
        updateProgressBar();
    })
})

prevBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        formStepNum--;
        updateFormSteps();
        updateProgressBar();
    })
})

function updateFormSteps(){
    formSteps.forEach((formSteps) =>{
        formSteps.classList.contains("form_step_active") && formSteps.classList.remove("form_step_active");
    });


    formSteps[formStepNum].classList.add("form_step_active");
}




function updateProgressBar(){
    progressSteps.forEach((progressStep, idx) => {
        if(idx < formStepNum + 1){
            progressStep.classList.add("progress_step_active");
        } 
        else{
            progressStep.classList.remove("progress_step_active");
        }
    })
}




// for file insert

const formFile = document.getElementById('file');
const formFilePrev = document.getElementById('prevFile');

formFile.addEventListener('change', ()=>{
    uploadFile(formFile.files[0]);
})

function uploadFile(file){
    if(!['image/jpeg', 'image/png', 'image/jpg']){
        alert("Error! Choose the appropriate image format");
        formFile.value = '';
        return;
    }

    if(file.size > 2 * 1024 * 1024){
        alert("The size of image is more than 2 MB");
        formFile.value = '';
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e){
        formFilePrev.innerHTML = `<img src = "${(e.target.result)}" alt = "photo">`;
    };

    reader.onerror  = function(e){
        alert("Error!");
    };
    reader.readAsDataURL(file);


}