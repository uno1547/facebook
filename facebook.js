let idInput = document.querySelector(".id")
let pwInput = document.querySelector(".pw")
let toggleButton = document.querySelector(".toggle")
let signIn = document.querySelector(".sign-in")
idInput.addEventListener('change', function () {
         console.log(this.value)
})
pwInput.addEventListener('change', function () {
	console.log(this.value)
})
pwInput.addEventListener('input', function () {
	console.log(this.value)
	if (this.value != '' ) { 
		hideButton.style.display = 'block'
	} else {
		hideButton.style.display = 'none'
	}
})

hideButton.addEventListener('click', function () {
	this.style.background = "url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png)"//보임상태로 변경
	console.log('backgroundchange')
})
document.addEventListener('keydown', function () {
	//console.log('down')
})
document.addEventListener('keypress', function () {
	//console.log('press')
})
document.addEventListener('keyup', function (e) {
	//console.log('up')
	//console.log(e.code)
	if (e.code == 'Enter') {
	           //idInput.value != “”
                       //pwInput.value != “”
	}
})

//엔터키눌렀을때 둘다채워있을경우, 둘중하나 안채워져있는경우, 
signIn.addEventListener('click', function () {
	
})


/*12번째에 강제로 오류를 내고,화가나서 모두지우고 다시 또박또박쓴것을 12번째와 비교를한뒤에 맞으면 그게 진짜인듯
아이디혹은 이메일은 자기가쓴거가 보임>비번만 오류내면 정확히 알아낼수있을듯
*input 칸 focus 되었을때 placeholder 색깔 흐리게 :focus ::placeholder
*input 태그안의 content 는 innerHTML이 아니라 value 인것같다

: pesudo :: css input focus placeholder colorchange
::placeholder input:focus
keyboard event.code 
keyboard event.key 차이점
display:flex와 position 

position relative 로 옮겨놔도 원래자리에 빈공간 유지됨

Toggle 버튼에id를주면 클래스네임별개로 토클가능할듯??
*/
/*
toggleButton.addEventListener("click", function () {
	if(this.className == "hide") {
		this.className = "show"	
	} else if (this.className == "show") {
		this.className = "hide"
	}

})
*/

