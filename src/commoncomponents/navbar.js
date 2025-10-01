import logo from "../assets/images/logo.png";

export function loadNavbar() {
  const navItem = [
    {
      id: 1,
      name: "Home",
      Link: "#",
    },
    {
      id: 1,
      name: "Elements",
      Link: "#",
    },
    {
      id: 1,
      name: "Products",
      Link: "#",
    },
    {
      id: 1,
      name: "Page",
      Link: "#",
    },
    {
      id: 1,
      name: "Blog",
      Link: "#",
    },
    {
      id: 1,
      name: "About Us",
      Link: "#",
    },
    {
      id: 1,
      name: "Contact",
      Link: "#",
    },
  ];

  const navbarItem = navItem
    .map(
      (item) =>
        `<li class="inline-block  font-railway text-[18px] hover:text-hovar_color cursor-pointer ">
        <a href="${item.Link}" class="nItem">${item.name}</a>
      </li>`
    )
    .join("");

  return `
    <div class=" h-[100px] flex items-center">
      <div class="container">
        
      <div class="navbarWrapperFull flex justify-between items-center">
      
        <div class="leftWrapper w-[90px] h-[50px]">
          <img src="${logo}" alt="logo" class="w-[100%] h-[80%]"/> 
        </div>


        <div class="middleWrapper  w-[50%]">

         <div class="">
         <ul class="flex justify-between items-center ">
         ${navbarItem}
         
         </ul>
         </div>
        </div>

        <div class="rightWrapperFull  w-[30%] flex justify-end items-center">

        <div>
        <span class="hover:text-hovar_color cursor-pointer text-[16px] text-gray-500 search"><i class="fa-solid fa-magnifying-glass"></i></span>
        <span class="hover:text-hovar_color cursor-pointer text-[16px] text-gray-500"><i class="fa-solid fa-cart-plus"></i></span>
        </div>
        </div>

      
      </div>



      </div>
    </div>
    `;
}
