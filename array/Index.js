var woment=[
    {
        id:1,
        name:"Váy",
        code:"TC1",
        price:"500.000",
        image:"https://www.vascara.com/uploads/cms_productmediahttps://www.vascara.com/uploads/cms_productmedia/2022/January/5/tui-xach-quai-doi-dinh-ghim-vang-sat-0290-mau-trang-3__62310__1641393591.jpg/2022/January/5/tui-xach-quai-doi-dinh-ghim-vang-sat-0290-mau-trang-3__62310__1641393591.jpgtps://palvin.vn/wp-content/uploads/2021/05/palvin-vay-nu-cach-dieu-tre-trung-t06202-dam-den-sang-chanh-mau-vay-den-dep-vay-dep-1.jpg" 
    },
    {
        id:2,
        name:"Áo",
        code:"TC2",
        price:"200.000",
        image:"https://resource.nhuahvt.com/0x0/tmp/chup-anh-san-pham-phang-1596647399.jpg" 
    },
    {
        id:3,
        name:"Quần",
        code:"TC3",
        price:"250.000",
        image:"https://resource.nhuahvt.com/0x0/tmp/chup-anh-san-pham-phang-1596647399.jpg" 
    },
    {
        id:4,
        name:"Giày",
        code:"TC4",
        price:"450.000",
        image:"https://palvin.vn/wp-content/uploads/2021/05/palvin-vay-nu-cach-dieu-tre-trung-t06202-dam-den-sang-chanh-mau-vay-den-dep-vay-dep-1.jpg" 
    },
   
];
var men=[
    {
        id:1,
        name:"Nón",
        code:"TC1",
        price:"500.000",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQ4Gm88V-V7Ak76JuxWNuSGae31q4WkYL5Q&usqp=CAU" 
    },
    {
        id:2,
        name:"Áo",
        code:"TC2",
        price:"200.000",
        image:"https://bizweb.dktcdn.net/100/287/440/products/ao-thun-local-brand-dep-9.jpg?v=1628995831780" 
    },
    {
        id:3,
        name:"Quần",
        code:"TC3",
        price:"250.000",
        image:"https://cdn.boo.vn/media/catalog/product/1/_/1.2.21.2.18.002.123.23-60200011-bst-1.jpg" 
    },
    {
        id:4,
        name:"Giày",
        code:"TC4",
        price:"450.000",
        image:"https://salt.tikicdn.com/cache/w1200/ts/product/65/3d/f7/a1ef28544ed76d91ecd1e4ee1826310d.jpg" 
    },
];
function listProducts() {
for (let i= 0; i<=men.length-1; i++) {
    var demo = '<div class="col-3">';
    demo+='<div class="col-3">';
    demo+='<div class="card" style="width:18rem;">'; 
        demo+='<img src="'+men[i].image+'" class="card-img-top" style="height: 400px;" alt="">';
        demo+='<div class="card-body">';
            demo+='<h5 class="card-title">'+men[i].name+'</h5>';
            demo+='<p class="card-text">'+men[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
       demo+= '</div>';
   demo+= '</div>';
demo+= '</div>';
console.log(demo);
document.getElementById("men").innerHTML +=demo;
}
for (let i= 0; i<=woment.length-1; i++) {
    var demo = '<div class="col-3">';
    demo+='<div class="col-3">';
    demo+='<div class="card" style="width:18rem;">'; 
        demo+='<img src="'+woment[i].image+'" class="card-img-top" style="height: 400px;" alt="">';
        demo+='<div class="card-body">';
            demo+='<h5 class="card-title">'+woment[i].name+'</h5>';
            demo+='<p class="card-text">'+woment[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
       demo+= '</div>';
   demo+= '</div>';
demo+= '</div>';
console.log(demo);
document.getElementById("woment").innerHTML +=demo;
}

}
function oder(){
    arlert("thank you your order");
}