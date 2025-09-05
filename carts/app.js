let products=[
    {id:1,  title:"iphone",         price:70000, rating:4.5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCeI0oAaY4E0T_dIuLKfmI0FYOQV_VkctGw&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:2,  title:"samsung",        price:25000, rating:2.2, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBcQD6r631jhW2G5OsqAdeFsqnbRYGh6HDw&s',   discription:"Power and performance. Stylish design. The perfect phone for your lifest                                           " },
    {id:3,  title:"googlepixel",    price:20000, rating:2.1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLO7zwmBgAOgQ6XuS-Uiqv3HiRFGhetr9ivA&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:4,  title:"nokia",          price:10000, rating:4.0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsz5E5fggk6VIXg11DjzNUZn3F4jtH5InK_g&s',   discription:"Experience the future of connectivity with our smart phone                                                         " },
    {id:5,  title:"vivo",           price:25000, rating:2.5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcflzqVEFbMmL7BplGnOA7js7R9-ZQNpPLAw&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:6,  title:"samsung5g",      price:18000, rating:4.4, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK8_BdPpbzhlPqJTQBXUofFwDAyrUceBwTg&s',   discription:"Seamless communication. Effortless multitasking. Capture life's moments with brilliance.                           " },
    {id:7,  title:"vivo y20i",      price:23000, rating:4.8, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LJDI3j3h6BOZjRjQnhmgTpLI-6cnrOystQ&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:8,  title:"1plus",          price:30000, rating:2.1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWaztKhnUL-oAZDrSOFp0ezol_Dsg7KRWKw&s',   discription:"innovation at your fingertips. A smarter, faster, and more intuitive phone experience.                             " },
    {id:9,  title:"samsungj4+",     price:46000, rating:3.5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4DrC474IxEP7tUoyT_lYFQH91tiliW-c3Q&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:10, title:"nothing",        price:36000, rating:2.5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffan_YQ9wrt41JqCkDzJVw5jixRcJ5Nl4KQ&s',   discription:"Experience the future of connectivity with our smart phone                                                         " },
    {id:11, title:"iphone14",       price:66000, rating:3.5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeiLaGmYKxw-9b6rkVhPyLTfrU34-lRfZIw&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:12, title:"samsung4g",      price:26000, rating:2.2, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMJgzvXr08LV1EfIteBuahQAmy20IKroC-A&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:13, title:"micromax5g",     price:16000, rating:3.1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhhmx7o3YgiYmNkgCQSg0CaB2637LB0NSfQ&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:14, title:"nokia5g",        price:60000, rating:2.0, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzvngt3DibgyY_pdy6R6v_XYRxN4hbNWeJg&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:15, title:"vivo5g",         price:26000, rating:4.5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfY0zBLTiegE1J_MCrz9ruv6d8fjb2weqBbA&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:16, title:"samsung5g",      price:56000, rating:2.4, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4DrC474IxEP7tUoyT_lYFQH91tiliW-c3Q&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:17, title:"vivo y20i",      price:49000, rating:3.8, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeLVWOzWla8Zy87cK4a2GlNrHkJ3S6s2w4w&s',   discription:"Capture life's moments with brilliance.                                                                            " },
    {id:18, title:"iphone15promax", price:86000, rating:4.1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gWlUnEApIqpwPkSUDojB-UefiJS-UaUCVQ&s',   discription:"Capture life's moments with brilliance.                                                                            " }
];
function renderProducts(products) {
    let container = document.getElementById('container');
    container.innerHTML = "";

    products.map((item)=>{
        return container.innerHTML +=
        ` <div id="products">
        <div id="products1">
        <h1>${item.title}</h1>
        <div id = price>
        <p><mark>${item.price}</mark></p>
        <p>${item.rating}</p>
        </div>
        <img src="${item.img}">
        <p>${item.discription}</p>
    </div>
    </div>`
    })
}

function filterProducts(products) {
    let search = document.getElementById('input').value.toLowerCase();
    let four = document.getElementById('four').checked;
    let three = document.getElementById('three').checked;

    // let filteredProducts = [...products]; // start with all
    let filteredProducts = products.filter(item=>{
        return item.title.toLowerCase().includes(search) ||
               item.price.toString().includes(search);
    });

    if (four) {
        filteredProducts = filteredProducts.filter(item => item.rating >= 4);
    } else if (three) {
        filteredProducts = filteredProducts.filter(item => item.rating >= 3);
    }
    renderProducts(filteredProducts);
}
renderProducts(products);
