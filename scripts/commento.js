hexo.extend.tag.register('commento', function(args){
    var id = args[0];
    return '<script defer src="https://cdn.commento.io/js/commento.js"></script><br /><hr />Constructive criticism is welcome. Let me know what you think! How  can I improve?<br /><style>'+
    '#commento pre {all:unset}'+
    '#commento blockquote {all:unset}'+
    '</style><hr /><div id="commento"></div>';
  });