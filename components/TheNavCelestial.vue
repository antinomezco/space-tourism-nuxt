<template>
  <nav class="px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="w-full">
      <ul class="flex flex-row mx-4 barlow font-size-planet-data-title justify-center">
        <li class="header__option">
          <a href="?celestialbody=0" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white" aria-current="page">Moon</a>
        </li>
        <li>
          <a href="?celestialbody=1" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Mars</a>
        </li>
        <li>
          <a href="?celestialbody=2" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Titan</a>
        </li>
        <li>
          <a href="?celestialbody=3" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Europa</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.header__option{
position: relative;
}
.header__option::hover{
content:'';
position: absolute;
bottom: -10px;
left: 0;
width: 100%;
height: 1px;
background: red;
}

</style>

// <!DOCTYPE html>
// <html lang="en">
// 	<head>
// 		<meta charset="UTF-8" />
// 		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// 		<title>Navigation</title>
// 		<link rel="stylesheet" href="./css/tailwind.css">
// 	</head>
// 	<body>
// 		<!-- Navbar goes here -->
// 		<nav class="bg-white shadow-lg">
// 			<div class="max-w-6xl mx-auto px-4">
// 				<div class="flex justify-between">
// 					<div class="flex space-x-7">
// 						<!-- Primary Navbar items -->
// 						<div class="hidden md:flex items-center space-x-1">
// 							<a href="" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
// 							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
// 							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
// 							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
// 						</div>
// 					</div>
// 					<!-- Mobile menu button -->
// 					<div class="md:hidden flex items-center">
// 						<button class="outline-none mobile-menu-button">
// 						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
// 							x-show="!showMenu"
// 							fill="none"
// 							stroke-linecap="round"
// 							stroke-linejoin="round"
// 							stroke-width="2"
// 							viewBox="0 0 24 24"
// 							stroke="currentColor"
// 						>
// 							<path d="M4 6h16M4 12h16M4 18h16"></path>
// 						</svg>
// 					</button>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="hidden mobile-menu">
// 				<ul class="">
// 					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
// 					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
// 					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
// 					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
// 				</ul>
// 			</div>
// 			<script>
// 				const btn = document.querySelector("button.mobile-menu-button");
// 				const menu = document.querySelector(".mobile-menu");

// 				btn.addEventListener("click", () => {
// 					menu.classList.toggle("hidden");
// 				});
// 			</script>
// 		</nav>
// 		<h1 class="text-green-500 text-2xl md:text-3xl lg:text-4xl font-bold p-4">Tailwind Navigation Toolbar</h1>
// 	</body>
// </html>