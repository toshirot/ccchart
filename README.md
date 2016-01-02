# ccchart
This is a Simple and Realtime JavaScript chart library that does not depend on libraries such as jQuery or google APIs. 
You can use the following chart types. line, bar, pie, bezi, bezi2, stacked, area, stackedarea, stacked%, ampli, scatter, candle

<a href="http://ccchart.com/test/ws2.htm"><img src=http://ccchart.com/doc/img/ws2.png></a>
<a href="http://ccchart.com/#85"><img src=http://ccchart.com/doc/img/ws.png></a>

@see http://ccchart.com/
@see http://ccchart.com/test/ws2.htm
@doc (old) http://ccchart.com/doc/ccchart-1.06.3.pdf
@blog http://ngw.jp/~tato/wp/?tag=ccchart
@chat http://cht.pw/chat.htm
<hr>
<h3>License</h3>
MIT
<hr>
<h3>Some of the download method</h3>
<li>Download from <a href=http://ccchart.com/>ccchart.com</a>
<li>Download from this page: Download the zip file by clicking on the upper right [Download ZIP] button on this top page. And installing unzip. or etc...
<li id="bower">Bower<code><pre>$ cd ./YourDir
$ npm i -g bower
$ bower i ccchart
ccchart directory has been generated.
YourDir/
  bower_components/
    ccchart/
        README.md
        ccchart-min.js
        ccchart.js
        update.json
        plugins/</pre></code><li>etc...<hr>
<h3>What's New</h3>  
2015/09/08 add Candle Type 
<a href=http://ngw.jp/~tato/wp/?page_id=3612>http://ngw.jp/~tato/wp/?page_id=3612</a><br>
Demo ccchart.com: <a href=http://ccchart.com/#100>http://ccchart.com/#100</a>
<a href=http://ngw.jp/~tato/wp/?page_id=3612><img with=380 src=http://ccchart.com/test/candle/candle.png></a>

<hr>
<h3>Static Sample (Bar) </h3>  
Demo jsfiddle.net: <a href=http://jsfiddle.net/UkdvS/455/>http://jsfiddle.net/UkdvS/455/</a>
<code><pre>&lt;script src="http://ccchart.com/js/ccchart.js" charset="utf-8">&lt;/script>
&lt;canvas id="hoge">&lt;/canvas>
&lt;script>
var chartdata1 = {

  "config": {
    "title": "Bar Chart",
    <strong>"type": "bar"</strong>
  },

  "data": [
    ["Year",2007,2008,2009,2010,2011,2012,2013],
    ["Tea",435,332,524,688,774,825,999],
    ["Coffee",600,335,584,333,457,788,900],
    ["Juice",60,435,456,352,567,678,1260],
    ["Oolong",200,123,312,200,402,300,512]
  ]
};
ccchart.init('hoge', chartdata1)
&lt;/script>
</pre></code>
Demo ccchart.com: <a href=http://ccchart.com/#57>http://ccchart.com/#57</a>, <a href=http://ccchart.com/#42>http://ccchart.com/#72</a>, <a href=http://ccchart.com/#42>http://ccchart.com/#73</a>

<hr>
<h3>Static Sample (Line)</h3>  
Demo jsfiddle.net: <a href=http://jsfiddle.net/UkdvS/451/>http://jsfiddle.net/UkdvS/451/</a>
<code><pre>&lt;script src="http://ccchart.com/js/ccchart.js" charset="utf-8">&lt;/script>
&lt;canvas id="hoge">&lt;/canvas>
&lt;script>
var chartdata1 = {
  "config": {
    "title": "Option useMarker",
    "subTitle": "useMarker: maru",
    <strong>"type": "line",</strong>
    "useMarker": "maru",
    "lineWidth": 6,
    "markerWidth": 15
  },
  "data": [
    ["Year",2007,2008,2009,2010,2011,2012,2013],
    ["Tea",435,332,524,688,774,825,999],
    ["Coffee",600,335,584,333,457,788,900],
    ["Juice",60,435,456,352,567,678,1260],
    ["Oolong",200,123,312,200,402,300,512]
  ]
};
ccchart.init('hoge', chartdata1)
&lt;/script>
</pre></code>
ccchart.com: <a href=http://ccchart.com/#15>http://ccchart.com/#15</a>, <a href=http://ccchart.com/#7>http://ccchart.com/#7</a>, <a href=http://ccchart.com/#96>http://ccchart.com/#96</a>

<hr>
<h3>Other Types Samples </h3> 
<ul>
<li><img src=http://ccchart.org/img50/79.png> pie: <a href=http://ccchart.com/#79>http://ccchart.com/#79 </a>, <a href=http://ccchart.com/#89>http://ccchart.com/#89 </a>, 
<li><img src=http://ccchart.org/img50/6.png> bezi2: <a href=http://ccchart.com/#6>http://ccchart.com/#6 </a>, <a href=http://ccchart.com/#85>http://ccchart.com/#85 </a>, 
<li><img src=http://ccchart.org/img50/3.png> bezi: <a href=http://ccchart.com/#3>http://ccchart.com/#3 </a>, 
<li><img src=http://ccchart.org/img50/50.png> area: <a href=http://ccchart.com/#50>http://ccchart.com/#50 </a>, <a href=http://ccchart.com/#51>http://ccchart.com/#51 </a>, <a href=http://ccchart.com/#50>http://ccchart.com/#50 </a>, <a href=http://ccchart.com/#86>http://ccchart.com/#86 </a>, 
<li><img src=http://ccchart.org/img50/9.png> stacked: <a href=http://ccchart.com/#93>http://ccchart.com/#93 </a>, <a href=http://ccchart.com/#4>http://ccchart.com/#4 </a>, <a href=http://ccchart.com/#83>http://ccchart.com/#83 </a>, 
<li><img src=http://ccchart.org/img50/53.png> stackedarea: <a href=http://ccchart.com/#53>http://ccchart.com/#53 </a>, <a href=http://ccchart.com/#87>http://ccchart.com/#87 </a>, 
<li><img src=http://ccchart.org/img50/55.png> stacked%: <a href=http://ccchart.com/#55>http://ccchart.com/#55 </a>, <a href=http://ccchart.com/#54>http://ccchart.com/#54 </a>, <a href=http://ccchart.com/#88>http://ccchart.com/#88 </a>, 
<li><img src=http://ccchart.org/img50/5.png> ampli: <a href=http://ccchart.com/#5>http://ccchart.com/#5 </a>, <a href=http://ccchart.com/#84>http://ccchart.com/#84 </a>, 
<li><img src=http://ccchart.org/img50/91.png> scatter: <a href=http://ccchart.com/#91>http://ccchart.com/#91 </a>, <a href=http://ccchart.com/#91>http://ccchart.com/#91 </a>, 
<li><img src=http://ccchart.org/img50/100.png> candle: <a href=http://ccchart.com/#99>http://ccchart.com/#99 </a>, <a href=http://ccchart.com/#100>http://ccchart.com/#100 </a>, 
</ul>

<hr>
<h3>Realtime Sample (use WebSocket)</h3> 
Demo ccchart.com: <a href=http://ccchart.com/#85>http://ccchart.com/#85</a><br>
<strong>Client Side</strong><code><pre>
&lt;script src="http://ccchart.com/js/ccchart.js" charset="utf-8">&lt;/script>
&lt;canvas id="hoge">&lt;/canvas>
&lt;script>
var chartdata1 = {
  "config": {
    "title": "WebSocket test",
    "subTitle": "realtime chart",
    "type": "bezi2",
    "lineWidth": 2,
    "minY": 0,
    "xScaleSkip": 3,
    "maxWsColLen": 18,
    "colorSet":
          ["#DDA0DD","#3CB000"]
  },
  "data": [
    ["time"],
    ["data1"],
    ["data2"]
  ]
};
  ccchart
      .init('hoge', chartdata1)
      <strong>.ws('ws://ccchart.com:8016')
      .on('message', ccchart.wscase.oneColAtATime)</strong>
&lt;/script>
</pre></code>
<strong>Server Side (Node.js)</strong>
<code><pre>var WsServer = require('ws').Server;

var tid;
var ws = new WsServer({
    host: 'ccchart.com',
    port: 8016
});

//start
broadCast();
function broadCast() {
    tid = setInterval(function() {
        var dataAry = mkData();
        ws.clients.forEach(function(client) {
            if (client.readyState === 1)
                client.send(JSON.stringify(dataAry));
        });
    }, 200);
}
function mkData() {
    var data = [
        ["Year"],
        ["s2"],
        ["s3"]
    ];
    var now = new Date();
    var H = now.getHours();
    var M = now.getMinutes();
    var S = now.getSeconds();
    H = (H &lt; 10) ? '0' + H : H;
    M = (M &lt; 10) ? '0' + M : M;
    S = (S &lt; 10) ? '0' + S : S;
    data[0] = H + ':' + M + ':' + S;
    data[1] = Math.floor(Math.random(10) * 96);
    data[2] = 32 + Math.floor(Math.random(10) * 18);
    return data;
}

//on connection for Heartbeat　これはハートビート用なのでいらなければ無くてもOK
// ccchart はデフォルトでは60秒に一度"Heartbeat"という文字列を
// サーバーへ送り、その返信である"Heartbeat"文字列を受信しています
ws.on('connection', function(socket) {

    console.log(
        'conned: ' + ws.clients.length, (new Date),
        socket.upgradeReq.socket.remoteAddress
    );

    socket.on('message', function(msg) {
        var msg = JSON.stringify(msg);
        if (msg === 'Heartbeat') {
            if (socket.readyState === 1) {
                socket.send(msg);
                console.log(msg);
            }
        }
    });
});
</pre></code>

ccchart.com: <a href=http://ccchart.com/#88>http://ccchart.com/#88</a>, <a href=http://ccchart.com/#89>http://ccchart.com/#89</a>, <a href=http://ccchart.com/#81>http://ccchart.com/#81</a>

<hr>
<h3>Plugins</h3>
<!-- //////////////////////////////////////  -->
<article id="plugins1">

<li>ccchart用プラグインの作り方 <a href="http://ngw.jp/~tato/wp/?p=389">http://ngw.jp/~tato/wp/?p=389</a></li>
<ul style="padding-left:68px;">
<li>[ WebSocket func ] <a href="http://ngw.jp/~tato/wp/?p=1080">blog</a> | <a href="http://ccchart.org/plugins/ws/wscase/plain/wscase-plain.htm">ccchart.wscase.plain</a></li>
<li>[ Pointer ] <a href="http://ngw.jp/~tato/wp/?p=836">blog</a> | <a href="http://ccchart.org/plugins/pointer/cross/cross-pointer2.htm">ccchart.crossPointer(op)</a></li>
<li>[ Drop & Drow ] <a href="http://ngw.jp/~tato/wp/?p=866">blog</a> | <a href="http://ccchart.org/plugins/dd/dropdraw/demo.htm">ccchart.dropDraw()</a></li>
</ul>
</article>

<hr>
<h3>Tips</h3>

<ul style="padding-left:68px;">
<!-- //////////////////////////////////////  -->
<article id="showcase1">
<li>[ showcase ] <a href="http://ccchart.com/test/showcase.htm">さまざまなチャート</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="base1">
<li>[ base Method ] <a href="http://goo.gl/dKB7M">グローバル config のデフォルト値設定</a></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="add1">
<li>[ add Method ] <a href="http://ccchart.org/test/adds/add-xhr2-3.htm">2つのチャートを複合させる.add, .after, .before</a><span class=new> [new]</span></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="data1">
<li>[ data ] <a href="http://ccchart.org/test/col2row/test-1.htm">チャートデータの列と行を交換する</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="data2">
<li>[ data ] <a href="http://ccchart.org/test/onmessage/1.htm">データがしきい値に達したら何か実行する</a><span class=new> [new]</span></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="value1">
<li>[ value ] <a href="http://ccchart.org/test/useVal-percent/test.htm">値表示とパーセント表示</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="value2">
<li>[ value ] <a href="http://ccchart.com/test/useVal-percent/parcent-without-percentVal.htm">percentValを使わずにパーセント表示</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="img1">
<li>[ img ] <a href="http://ccchart.org/test/img/img.htm">複数画像の埋め込みと透明化 </a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="tooltip1">
<li>[ Tooltip ] <a href="http://qiita.com/items/fae3937363d1bb1b8090">ツールチップの CSS カスタマイズ </a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="tooltip2">
<li>[ Tooltip ] <a href="http://ccchart.com/test/tooltip-template/temp.htm">ツールチップのためのテンプレート記法</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="tooltip3">
<li>[ Tooltip ] <a href="http://ccchart.org/test/tooltip/a1-1.htm">Bar チャート用のツールチップ</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="tooltip4">
<li>[ Tooltip ] <a href="http://ccchart.org/test/tooltip/ws2-v1.06.6b2.htm">ツールチップ on the リアルタイム</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="ws1">
<li>[ WebSocket ] <a href="http://ccchart.com/test/ws2.htm">WebSocketの受信サンプル</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="ws2">
<li>[ WebSocket ] <a href="http://qiita.com/items/a461cdc8c2079d9b8530">ccchartへサーバー側WebSocketから流し込む</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="ws3">
<li>[ WebSocket ] <a href="http://ccchart.org/test/ws/IncomingCounter-1.htm">WebSocketで受信するデータパターン関数</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="ws4">
<li>[ WebSocket ] <a href="http://ccchart.org/test/wscaseName/test1.htm">受信パターン関数名を取得する</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="ws5">
<li>[ WebSocket ] <a href="http://ccchart.org/test/someCols/test-2.htm">着信データを間引く</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="ws6">
<li>[ WebSocket ] <a href="http://ccchart.org/test/wsidoj/test1.htm">id名/最新wsOjのkey/value</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="ws7">
<li>[ WebSocket ] <a href="http://ccchart.org/test/getWsById/test1.htm">ws接続のインスタンスをidで取得</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="dbg1">
<li>[ WebSocket Debug ] <a href="http://ccchart.org/test/ws/test-1.htm">WebSocket使用時のデバック用プロパティ</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="dbg2">
<li>[ WebSocket Debug ] <a href="http://ccchart.org/test/_autoReConnect/test.htm">WebSocket切断時の再接続テスト</a><span class=new> [new]</span></li>
</article>


<!-- //////////////////////////////////////  -->
<article id="drag1">
<li>[ DragDrop ] <a href="http://ccchart.org/test/dragdrop/dd1.htm">ファイルドロップでチャート表示</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale1">
<li>[ Scale ] <a href="http://ccchart.org/test/decimal/test-4.htm">軸目盛値の端数処理(丸め)の桁数を指定する</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale2">
<li>[ Scale ] <a href="http://ccchart.org/test/decimal/test-4.htm">軸目盛値の端数処理(丸め)の桁数を指定する</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale3">
<li>[ Scale ] <a href="http://ccchart.org/test/axisYLen/test2.htm">水平目盛り線の本数を指定する axisXLen</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale4">
<li>[ Scale ] <a href="http://ccchart.org/test/rotate4scale/test-1.htm">水平軸目盛の傾き xScaleRotate</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale5">
<li>[ Scale ] <a href="http://ccchart.org/test/axisXWidth/test1.htm">水平目盛り線の幅 axisXWidth </a><span class=new> [new]</span></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale6">
<li>[ Scale ] <a href="http://ccchart.org/test/axisYWidth/test1.htm">垂直目盛り線の幅 axisYWidth </a><span class=new> [new]</span></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale7">
<li>[ Scale ] <a href="http://ccchart.org/test/axisYSkipWidth/test1.htm">垂直スキップ線の幅 axisYSkipWidth </a><span class=new> [new]</span></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="scale8">
<li>[ Scale ] <a href="http://ccchart.org/test/yScalePercent/test1.htm">垂直軸目盛値にパーセント yScalePercent </a><span class=new> [new]</span></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="scale9">
<li>[ Scale ] <a href="http://ccchart.org/test/useHanrei/test-css-marker.htm">凡例を使わない useHanrei</a></li>
</article>
<article id="scale10">
<li>[ Scale ] <a href="http://ccchart.org/test/barYMinus/test.htm">Y軸0基準線の上下にチャート表示 line, bar, bezi2, bezi</a></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="scale11">
<li>[ Scale ] <a href="http://ccchart.com/test/yScaleOrder/test-3.htm">Y軸目盛の天地を反転する yScaleOrder</a></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="xline1">
<li>[ xLine ] <a href="http://ccchart.org/test/xLine/fillUnder-fillOver/1.htm">カスタムXラインの上下を塗る fillOver, fillUnder </a><span class=new> [new]</span></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="xline2">
<li>[ xLines ] <a href="http://ccchart.org/test/xLine/keep1.htm">最高値や最小値を xLines で表示する</a><span class="new"> [new]</span></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="hanrei1">
<li>[ Hanrei ] <a href="http://ccchart.org/test/hanreiAlign/test.htm">hanreiAlignを設定する</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="hanrei2">
<li>[ Hanrei ] <a href="http://ccchart.org/test/hanreiLineHeight/test.htm">凡例1行の高さを設定する hanreiLineHeight</a></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="title1">
<li>[ Title ] <a href="http://ccchart.org/test/titleX/test1.htm">titleTextAlign, titleX</a><span class=new> [new]</span></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="subtitle1">
<li>[ SubTitle ] <a href="http://ccchart.org/test/subTitleX/test1.htm">subTitleTextAlign, subTitleX</a><span class=new> [new]</span></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="data1">
<li>[ Data ] <a href="http://ccchart.org/test/useFirstToRowName/test2.htm">データの1列目目を各行の項目名とする</a></li>
<li>[ Data ] <a href="http://ccchart.org/test/useFirstToColName/test2.htm">データの1行目を項目名とする</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="pie1">
<li>[ Pie ] <a href="http://ccchart.org/test/pieValPosOffset/test-pie01.htm">値の位置オフセットを調整する</a></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="candle1">
<li>[ Candle ] <a href="http://ccchart.org/test/candle/test-ws.htm">Candle Type</a><span class="new"> [new]</span></li>
</article>
<!-- //////////////////////////////////////  -->
<article id="csv1">
<li>[ CSV ] <a href="http://jsgt.org/lib/jquery/plugin/csv2table/v002/test.htm#nview40">CSVを読み込んでテーブルとチャートを表示する</a></li>
</article>

<!-- //////////////////////////////////////  -->
<article id="csv2">
<li>[ CSV ] <a href="http://ccchart.org/test/data2num/q2-1.htm">読み込むCSVに3桁カンマが含まれててもOK</a></li>
</article>

</ul>


