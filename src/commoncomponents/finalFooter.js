import payment1 from "../assets/images/payment/1.jpg"
import payment2 from "../assets/images/payment/2.jpg"
import payment3 from "../assets/images/payment/3.jpg"
import payment4 from "../assets/images/payment/4.jpg"

export function loadFinalFooter(){
    return `

    <div class=" bg-black h-[70px] flex items-center ">
    <div class="container flex items-center justify-between">

    <h4 class="text-white cursor-pointer font-railway">© 2022 <span class="font-bold">Subas</span> Made With ❤️ By <span class="hover:text-hovar_color font-bold">CodeCarnival</span>.</h4>

    <div>

    <div class="RightWrapper  flex gap-5">

    <img src="${payment1}" />
    <img src="${payment2}" />
    <img src="${payment3}"/>
    <img src="${payment4}"/>
    
    </div>


    </div>
    </div>
    </div>


    `;
}