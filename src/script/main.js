
require.config({
    paths:{
        'jquery':'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min'
    }
});

require(['jquery'],function(){
    let mod = $('#current').attr('currmod');
    if(mod){
        require([mod],function(m){
            m.init();
        });
    }
});