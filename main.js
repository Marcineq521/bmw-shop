const cars=[
    {
        id: 0,
        name: "BMW i4 M50",
        description: `BMW i4 M50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 519999.99,
        image: "./images/0.png",
        sale: false,
        
      },
      {
        id: 1,
        name: "BMW iX",
        description: `BMW iX Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 76999.99,
        image: "./images/1.png",
        sale: true,
        saleAmount: 2000,
      },
      {
        id: 2,
        name: "BMW iX M60",
        description: ` BMW iX M60 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 299999.99,
        image: "./images/2.png",
        sale: false,
        
      },
      {
        id: 3,
        name: "BMW i7",
        description: `BMW i7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 36999.99,
        image: "./images/3.png",
        sale: true,
        saleAmount: 3000,
      },
      {
        id: 4,
        name: "BMW i4",
        description: `BMW i4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 212599.99,
        image: "./images/4.png",
        sale: false,
      },
      {
        id: 5,
        name: "BMW X7",
        description: `BMW X7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 256699.99,
        image: "./images/5.png",
        sale: false,
      },
      {
        id: 6,
        name: "BMW X7 M60i xDRIVE",
        description: `BMW X7 M60i xDRIVE Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 412999.99,
        image: "./images/6.png",
        sale: true,
        saleAmount: 4000,
      },
      {
        id: 7,
        name: "MW X4 M",
        description: `MW X4 M Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 652999.99,
        image: "./images/7.png",
        sale: false,
      },
      {
        id: 8,
        name: "BMW serii 8 Gran Coupé M",
        description: `BMW serii 8 Gran Coupé M Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 221999.99,
        image: "./images/8.png",
        sale: false,
      },
      {
        id: 9,
        name: "BMW serii 8 Cabrio M",
        description: `BMW serii 8 Cabrio M Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 322999.99,
        image: "./images/9.png",
        sale: false,
      },
      {
        id: 10,
        name: "BMW M440i xDrive Gran Coupé",
        description: `BMW M440i xDrive Gran Coup Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. Eligendi ab officia minus.`,
        price: 612999.99,
        image: "./images/10.png",
        sale: true,
        saleAmount: 1200,
      },
      {
        id: 11,
        name: "BMW M235i xDrive Gran Coupé",
        description: `BMW M235i xDrive Gran Coupé Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        dolores eaque. 
        Eligendi ab officia minus.`,
        price: 522999.99,
        image: "./images/11.png",
        sale: false,
      },
];

let CurrentCars=cars;

const carsContainer=document.querySelector(".cars-container");



const renderCars=(items)=>{
 
    carsContainer.innerHTML="";
    for(let i=0; i<items.length; i++){
        const newCar=document.createElement('div');
        newCar.className=items[i].sale ? "product on-sale" : "product";
        
        
       
       
        newCar.innerHTML=`
        
            <img src="images/${items[i].id}.PNG">
            <div class="product-name">${items[i].name}</div>
            <div class="product-description">${items[i].description}</div>
            <div class="price">${items[i].price}$</div>
            <div class="price-on-sale">${items[i].price-items[i].saleAmount}$</div>
            <button class="configure-btn">Konfiguruj teraz</button>
       
        `
carsContainer.appendChild(newCar);
    }
}

window.onload=renderCars(CurrentCars);

