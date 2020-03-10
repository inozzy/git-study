//ボタンを押すことで隠れていた文字の色が変わり、h1タグの文字が回転し、ページの一番上に移動する。
function changecolorGOtotop() {
  scrollTo(0, 0);

  //ｈ１タグの文字を回転させる
  var header = document.getElementById('header');
  var degree = 0;
  function rotateHeader() {
    degree = degree + 6;
    degree = degree % 360;
    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
      header.className = 'face';
    }
    else {
      header.className = 'back';
    }
    header.style.transform = 'rotateX(' + degree + 'deg)';
  }
  setInterval(rotateHeader, 20);

  //画像を変える
  document.getElementById('icon').src = "IMG_20180512_024539_326_mini.jpg";

  var base = document.getElementById('base');
  base.style.color = '#ff0000';            //文字を赤にする
  base.style.backgroundColor = '#000000';  //背景色を黒にする

  //名前を変える
  document.getElementById('name').innerHTML = '<span class =fname>インチキ <span class="star"> <span>☆</span></span> おじさん</span>';

  //隠れている文字を表示する
  var hidewrite = document.getElementsByClassName('hide');
  hidewrite[0].innerHTML = '　蝦夷';
  hidewrite[1].innerHTML = '　てんびん座';
  hidewrite[2].innerHTML = '　たまに献血をします';
  hidewrite[3].innerHTML = '　一瞬左手しか使えない時期がありました';
  hidewrite[4].innerHTML = '　バンドやってます';
  hidewrite[5].innerHTML = '　なんでもやります';
  hidewrite[6].innerHTML = '　見かけによらずやってます';
  hidewrite[7].innerHTML = '　嘘ですやってません';
  hidewrite[8].innerHTML = '　違います、なかやまきんに君の筋肉ブログです';

  //好きな食べ物クイズを追加
  document.getElementById('question').innerHTML = '<p>好きな食べ物なんだと思う？</P><span class =secret>からあげ</span>'
  document.getElementById('quiz').innerHTML = '<input type="text" id="answer" size="20" maxlength="20"> <button id="answerButton" onclick="likefoodquiz()">答える</button>';


  //ボタンを変更する
  var button = document.getElementById('button');
  button.removeChild(button.firstChild);//もともとあったボタンを削除
  //新しいボタンを追加
  document.getElementById('button').innerHTML = '<button id="reload" class="rp" onclick="reloadPage()">元に戻す</button>';

}

//クイズの回答に対する反応
function likefoodquiz() {
  var inputanswer = document.getElementById('answer').value
  if (inputanswer === 'からあげ') {
    document.getElementById('result').innerText = '正解'
  }
  else {
    document.getElementById('result').innerText = '不正解'
  }
}

//ボタンを押した後、ページを更新させて元に戻す
function reloadPage() {
  location.reload();
  scrollTo(0, 0);
}
