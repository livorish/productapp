Router.configure({
    layoutTemplate:'layout'
});

Router.map(function(){
    this.route('/', function(){
        alert('home');
        this.render('home');
    });
    this.route('product1',{
        path:'/product1',
        template:'product1'
    });
    this.route('product2',{
        path:'/product2',
        template:'product2'
    });
    this.route('product3',{
        path:'/product3',
        template:'product3'
    });
});