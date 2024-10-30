// 1. 이메일 주소를 입력받고, 도메인을 돌려주는 함수 만들기
// ex) itkorea@naver.com -> naver

const domain = (email) => {
  return email.split("@"[1].split(".")[0]);
};

// 2. 영어 신문기사를 입력 받고, 모두 대문자로 바꾸는 함수 만들기
const newsUpper = (article) => {
  return article.toUppercase();
};

// 3. 영어뉴스 기사를 가져오고, 단어별로 나누고 첫번째 두번째 세번째 단어들을 돌려주기

const news = prompt("뉴스 기사");
const newsSlice = (news) => {
  const words = news.split(" ");
  return words.slice(0, 3);
};
