export function loadHeader() {
  return `
    <header class="bg-black py-4">
      <div class="container mx-auto">
        <div class="wrapperFull flex justify-between items-center">
          <div class="leftWrapper ">
            <div class="font-railway text-gray_color text-[12px] font-semibold leading-[40px]  inline-block">
              <span>1</span>
              <span>2</span>
              <span class="text-[15px]">3</span>
              <span class="text-[15px]">4</span>
              <span class="text-[15px]">5</span>
              <span class="-translate-y-1">6</span>
              <span class="text-[15px]">7</span>
              <span class="-translate-y-1">8</span>
              <span>9</span>
            </div>
          </div>
          <div class="rightWrapper  bg-blue-500 w-1/4 flex justify-end ">
            <span class="text-gray_color user "><i class="fa-solid fa-user"></i></span>
            <span class="text-gray_color heart"><i class="fa-solid fa-heart"></i></span>
            <span class="text-gray_color lock"><i class="fa-solid fa-lock"></i></span>
          </div>
        </div>
      </div>
    </header>
  `;
}