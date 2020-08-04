define([],function(){
    return {
        init:function(){
                let $navli = $('nav li');
                const $subnav = $('.sub-nav');
                let navtimer = null;
                let bantimer = null;
                let $dot = $('.dot-box .dot');
                let $pic = $('.bannar img');
                let $left = $('.bannar .icon-xiaoyu');
                let $right = $('.bannar .icon-right');
                let $sleft = $('.brand-chart .icon-xiaoyu');
                let $sright = $('.brand-chart .icon-right');
                let $sul = $('.brand-chart ul');
                let $indexnum = 0;
                let n =0;
                let $list = $('.list');

                //导航列表
                $navli.hover(function(){
                navtimer = setTimeout(()=>{
                        $(this).find('.sub-nav').show().siblings('.sub-nav').hide();
                    }, 1000);
                },function(){
                    clearTimeout(navtimer);
                    $subnav.hide();
                });
            

                // 轮播
                //点击小圈换图
                $dot.on('mouseover',function(){
                    bantimer = setTimeout(()=>{
                        $indexnum = $(this).index();
                        $dot.eq($indexnum).css('opacity','1').siblings('.dot').css('opacity','.3');
                        $pic.eq($indexnum).stop('true').animate({opacity:1}).siblings('.bannar img').stop('true').animate({opacity:0});
                    },300);
                });
                $dot.on('mouserout',function(){
                    bantimer = null;
                });
  
                //点击箭头换图
                $right.on('click',function(){
                    $indexnum++;
                    console.log($indexnum);
                    if($indexnum >= $dot.length){
                        $indexnum = 0;
                    }
                    switchtab();
                });
                $left.on('click',function(){
                    $indexnum--;
                    if($indexnum < 0){
                        $indexnum = $dot.length-1;
                    }
                    switchtab();
                });
                //封装图片显示效果
                function switchtab(){
                    $dot.eq($indexnum).css('opacity','1').siblings('.dot').css('opacity','.3');
                    $pic.eq($indexnum).css('opacity','1').siblings('.bannar img').css('opacity','0');
                }

                //品牌幻灯片轮播图
                $sright.on('click',function(){
                    n++;
                    if(n>= $('.brand-chart li').length){
                        $sul.css('left',0);
                         n = 1;
                    }
                    $sul.stop(true).animate({left:-1150*n + 'px'});
                });
                $sleft.on('click',function(){
                    if(n<=0){
                        n = $('.brand-chart li').length - 1;
                        $sul.css('left',-1150*n);
                    }
                    n--;
                    $sul.stop(true).animate({left:-1150*n + 'px'});
                });


                //优选品牌列表
                let strbrand = '';
                for(let i =1;i <= 18;i++){
                    strbrand +=`
                    <li><img src="http://img11.static.yhbimg.com/yhb-img01/2020/03/03/14/013b7247a2afdf08af2f388d861569fba8.jpg?imageView2/2/w/185/h/86/q/90" alt=""></li>
                    `;
                }
                $('.brand').html(strbrand);


                //渲染数据列表
                $.ajax({
                    url:'http://localhost/youhuobuy/php/home.php',
                    dataType:'json'
                }).done(function(data){
                    $.each(data,function(index,value){
                        $list.append(`
                                        <a href="#">
                                            <li>
                                                <img src=${value.url}/>
                                                <p>${value.title}</p>
                                                <p>${value.price}</p>
                                            </li>
                                        </a>
                                     `);
                    });
                });   
        }
    };
});