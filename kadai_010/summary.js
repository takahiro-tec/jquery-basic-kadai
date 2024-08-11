$(document).ready(function() {
  // 文字色を変える
  $('#change-color').click(function() {
    if ($('#target').css('color') === 'rgb(0, 0, 255)') { // 青色の場合
      $('#target').css('color', 'black'); // 元の色に戻す
    } else {
      $('#target').css('color', 'blue'); // 青色に変更
    }
  });

  // 文字内容を変える
  $('#change-text').click(function() {
    if ($('#target').text() === 'こんにちは！') {
      $('#target').text('SAMURAI BANZAI！');
    } else {
      $('#target').text('こんにちは！');
    }
  });

  // フェードアウト
  $('#fade-out').click(function() {
    $('#target').fadeOut();
  });

  // フェードイン
  $('#fade-in').click(function() {
    $('#target').fadeIn();
  });
});
