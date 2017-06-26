$(function(){

  var part = [
    {
      partname : 'valan',
      text : `芸工祭を統括する、芸工祭のトップです`
    },
    {
      partname : 'pan',
      text : `芸工祭を裏から支えていく役職です`
    },
    {
      partname : 'money',
      text : `芸工祭のお金に関すること全般をやります。<br>
      1.2年生の募集はしません`
    },
    {
      partname : 'tell',
      text : `芸工祭に必要な協賛資金を集めたり、<br>
      芸工祭当日に呼ぶゲストを呼んだりします`
    },
    {
      partname : 'memo',
      text : `芸工祭における記録を残すために、文書の作成などをします。<br>
      また、忙しい幹部たちの心の支えとなります`
    },
    {
      partname : 'gra',
      text : `パンフレット・ポスター・DMの制作や、<br>
      芸工内での順路を示すサイン、芸工祭で販売するグッズを制作します`
    },
    {
      partname : 'movie',
      text : `CM制作や準備期間・当日の撮影などを行います。<br>
      今年は集客のため学外に向けた作品も多く作っていく予定です`
    },
    {
      partname : 'web',
      text : `WEBサイト、サイトに載せるゲームやアプリなどを作って、<br>
      当日多くの人に来てもらえるように広報します!`
    },
    {
      partname : 'sport',
      text : `夏休みの球技大会と、芸工祭直前の運動会の種目を<br>
      一緒に考えたりします。基本かけもちOKです`
    },
    {
      partname : 'noon',
      text : `芸工祭当日の昼のステージ企画・運営をします`
    },
    {
      partname : 'night',
      text : `芸工祭当日の夜の芸工ナイトの企画・運営をします。`
    },
    {
      partname : 'pa',
      text : `芸工祭当日の昼ステ、夜ステの音響をマネジメントします。<br>
      芸工祭以外のイベントの音響も担当します`
    },
    {
      partname : 'cafe',
      text : `主にデザイン班、料理班、デザート班で活動します！<br>
      今年はインテリア班も作る予定です`
    },
    {
      partname : 'bar',
      text : `BAR部署は指名制で、芸工で度々行われるイベントにおいて<br>
      ドリンクを提供する部署です`
    },
    {
      partname : 'interior',
      text : `アトリウムを中心に芸工棟内部の装飾をします。<br>
      考えること、作ることが好きな人を募集しています`
    },
    {
      partname : 'exterior',
      text : `主にキャンパスの門と外部の装飾をします。<br>
      建築の人はもちろん、MNの人も是非来てください。`
    },
    {
      partname : 'booth',
      text : `ブース部署は、芸工棟前に出店する模擬店の<br>
      装飾と管理を担当します`
    },
    {
      partname : 'direction',
      text : `主にみんなの作品の管理や、展示方法の考察、実際の装飾、<br>
      投票物の作成を行います！`
    },
    {
      partname : 'ws',
      text : `芸工祭当日はアイコン作り 、絞り体験、模型作りのWS、<br>
      クロキャンでは刷毛染めのWSを行います！`
    }
  ]

  // popcorn-nav
  for(var i = 0 ; i < part.length ; i++){
    var name = part[i].partname;
    $('.popcorn-nav').append(`<img class='popcorn-btn' id='${i}' src='img/pop/pop-${name}.png' />`);

    $('.popcorn-slider').append(`<img class='part-photo' id='${i}' src='img/photo/photo-${name}.png' />`);

    $('.popcorn-container').append(`<a href='#modal'><img class='pc-popcorn-btn' id='${i}' src='img/pop/pop-${name}.png'/></a>`);
  }

  //pc popcorn-btn hover

   $('.pc-popcorn-btn').hover(function(){
      var name = part[$(this).attr('id')].partname;
      $(this).attr('src','img/photopop/popcorn-' + name + '.png');
      $('.bg-job').css('background-image','url("./img/icon/icon-' + name + '.png")')
    }, function(){
      var name = part[$(this).attr('id')].partname;
      $(this).attr('src', 'img/pop/pop-' + name + '.png');
      $('.bg-job').css('background-image','url("./img/icon/icon-' + name + '.png")')
   });

   $('.pc-popcorn-btn').click(function(){
     var name = part[$(this).attr('id')].partname;
     var text = part[$(this).attr('id')].text;

     $('.remodal').append(
       `<h3 class='modal-heading'>〜${name}〜</h3>
       <p class='modal-text'>${text}</p>
       <img class='modal-img' src='img/photo/photo-${name}.png'/>`
     )
   });

   $('.remodal-close , .remodal-wrapper').click(function(){
     $('.remodal').children("h3 , img , p").remove();
   });




// if($('.popcorn-btn').hasClass('slick-center')){
//
// }

  $('.popcorn-btn').click(function(){
    var name = part[$(this).attr('id')].partname;
    var text = part[$(this).attr('id')].text;

    $('.bg-job').css('background-image','url("./img/icon/icon-' + name + '.png")')

    $('.text-container p').html(text);
  });

  // 点滅
  $(function(){
    setInterval(function(){
        $('.down-btn').fadeOut(500,function(){$(this).fadeIn(500)});
    },1000);
});

  var drop = new Audio('audio/drop.mp3');
  var src = 'img/mv.gif'

  $('#main').css('display','none');

  $(window).load(function (){ //全ての読み込みが完了したら実行
    $('.msright').css('top',''+$(window).height()*4+'px');
    $('#main').css('display','block');

    $('#loading-contents').delay(2800).fadeOut(500);
    $('#loading').delay(3500).fadeOut(500);

    setTimeout(function() {
      $('.logo-img').attr('src', src);
      drop.play();
    },3500)
  });

});
