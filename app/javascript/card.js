const pay = () => {
  const payjp = Payjp('pk_test_***********************')// PAY.JPテスト公開鍵
  // 後で環境変数に設定する
  const submit = document.getElementById("button");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("フォーム送信時にイベント発火")
  });
};

window.addEventListener("load", pay);
