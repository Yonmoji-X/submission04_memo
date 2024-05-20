    //保存するときの処理
    $('#save').on('click', function() {
      //タイトルとテキストエリアの文字列を保存
      const data = {
        title: $('#input').val(),
        text: $('#text_area').val(),
      }
      console.log(data);
      //オブジェクトをJSON形式に変換する。
      const json = JSON.stringify(data);
      console.log(json);
      //ローカルストレージにmemo2というキーでテキストを保存する。
      localStorage.setItem('memo2',json);

    });

    //削除するときの処理
    $('#clear').on('click', function() {
      //ローカルストレージからmome2というキーの値を削除する。
      localStorage.removeItem('memo2');
      //空文字列でテキストエリアを上書きする。
      $('#input').val('');
      $('#text_area').val('');
    });

    if (localStorage.getItem('memo')) {
      //ローカルストレージからmemo2というキーの値を所得する。
      const json = localStorage.getItem('memo2');
      console.log(json);
      const data = JSON.parse(json);
      console.log(data);

      //テキストエリアに取得した値を表示する。
      $('#input').val(data.title);
      $('#text_area').val(data.text);


    }
