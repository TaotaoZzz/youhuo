define([],function(){
    return{
        init:function(){
            let $list=$('.list');
            $.ajax({
                url:'http://localhost/youhuobuy/php/home.php',
                dataType:'json'
            }).done(function(data){
                $.each(data,function(index,value){
                    $list.append(`
                        <li>
                            <a href="http://localhost/youhuobuy/src/detail.html?sid=${value.sid}">
                                <img src=${value.url}>
                                <p>${value.title}</p>
                                <p>${value.brand}</p>
                                <p>${value.price}</p>
                            </a>
                        </li>
                    `);
                });
            });
        }
    };
});