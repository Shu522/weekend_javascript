// 유저에게 비밀번호를 확인을 입력 받고

// 1. 문자 길이가 4~12글자 사이가 아니면 -> alert
// 4글자보다 짧으면 비밀번호가 짧습니다
// 12글자보다 길면 비밀번호가 깁니다

// 2. 특수문자 !, #, @ 이거 셋중에 하나라도 포함이 안되면
//특수문자가 반드시 들어가야 합니다

// 3. 마지막 글자가 z로 끝나지 않으면
// 마지막 글자는 z로 끝나야 합니다

// 4. 다 통과하면
// 올바르게 비밀번호 설정하였습니다

const password = prompt("비밀번호 입력");
if (password.length < 4) {
  alert("비밀번호가 짧습니다");
} else if (password.length > 12) {
  alert("비밀번호가 깁니다");
} else if (
  !(password.includes("!") || password.includes("#") || password.includes("@"))
) {
  alert("특수문자가 반드시 들어가야 합니다");
} else if (!password.endsWith("z")) {
  alert("마지막 글자는 z로 끝나야 합니다");
} else {
  alert("올바르게 비밀번호를 설정하였습니다");
}
