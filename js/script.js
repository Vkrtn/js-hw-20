const menu = [
  {
    name: "Today's Deals",
    url: "#deals",
  },
  {
    name: "Customer Service",
    url: "#serice",
  },
  {
    name: "Registry",
    url: "#registry",
  },
  {
    name:'Gift Cards',
    url:'#cards',
  },
  {
    name:'Sell',
    url:'#sell',
  }
];

const menuItems = document.querySelector('.menu')

const menuItem = menu.map((el)=>{
    return `<li class="menu--item"><a href="${el.url}">${el.name}</a></li>`
}).join('');

menuItems.innerHTML = menuItem;

const posts = [
    {
        title:'Gaming accessories',
        img:'./img/TV.jpg',
        more:'See more'
    },    {
        title:'Toys Under $30',
        img:'./img/cild.jpg',
        more:'See more'
    },    {
        title:'Electronics',
        img:'./img/Electronics.jpg',
        more:'See more'
    },    {
        title:'Home & Kitchen Under',
        img:'./img/plant.jpg',
        more:'See more'
    },    {
        title:'Health & Personal Care',
        img:'./img/helth.jpg',
        more:'See more'
    },    {
        title:'Beauty picks',
        img:'./img/Beauty.jpg',
        more:'See more'
    },
]
const postsItems = document.querySelector('.list')

const postItem = posts.map((el)=>{
    return `<li class="list-item">
    <h5>${el.title}</h5>
    <img src="${el.img}" alt="">
    <a href="#">${el.more}</a>
  </li>`
}).join('')

postsItems.innerHTML = postItem




