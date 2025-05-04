<template>
  <div class="min-h-screen">
    <!-- Navigation Bar -->
    <nav class="sticky top-0 z-50 bg-red-600 dark:bg-red-900 shadow-lg">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <img src="~/assets/logo.svg" alt="Yum Yum Korean Bucket Logo" class="h-12 w-auto mr-3" />
          <div class="hidden sm:block text-white">
            <h1 class="text-xl font-bold leading-tight">YUM YUM</h1>
            <h2 class="text-sm font-medium leading-tight">KOREAN BUCKET</h2>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="#home" class="text-white hover:text-red-200 font-bold text-lg transition-colors duration-300" :class="{ 'border-b-2 border-white pb-1': activeSection === 'home' }">Home</a>
          <a href="#menu" class="text-white hover:text-red-200 font-bold text-lg transition-colors duration-300" :class="{ 'border-b-2 border-white pb-1': activeSection === 'menu' }">Menu</a>
          <a href="#gallery" class="text-white hover:text-red-200 font-bold text-lg transition-colors duration-300" :class="{ 'border-b-2 border-white pb-1': activeSection === 'gallery' }">Gallery</a>
          <a href="#services" class="text-white hover:text-red-200 font-bold text-lg transition-colors duration-300" :class="{ 'border-b-2 border-white pb-1': activeSection === 'services' }">Services</a>
          <a href="#about" class="text-white hover:text-red-200 font-bold text-lg transition-colors duration-300" :class="{ 'border-b-2 border-white pb-1': activeSection === 'about' }">About</a>
          <a href="#contact" class="text-white hover:text-red-200 font-bold text-lg transition-colors duration-300" :class="{ 'border-b-2 border-white pb-1': activeSection === 'contact' }">Contact</a>
          
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" class="p-2 rounded-full bg-red-700 hover:bg-red-800 focus:outline-none">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile Navigation Toggle -->
        <div class="md:hidden flex items-center">
          <button @click="toggleDarkMode" class="p-2 mr-4 rounded-full bg-red-700 hover:bg-red-800 focus:outline-none">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300">
            <span class="sr-only">{{ mobileMenuOpen ? 'Close menu' : 'Open menu' }}</span>
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-red-700 dark:bg-red-800 py-4 shadow-lg">
        <div class="flex flex-col space-y-3 px-4">
          <a href="#home" @click="mobileMenuOpen = false" class="text-white hover:text-red-200 py-2 border-b border-red-600 dark:border-red-900" :class="{ 'font-bold': activeSection === 'home' }">Home</a>
          <a href="#menu" @click="mobileMenuOpen = false" class="text-white hover:text-red-200 py-2 border-b border-red-600 dark:border-red-900" :class="{ 'font-bold': activeSection === 'menu' }">Menu</a>
          <a href="#gallery" @click="mobileMenuOpen = false" class="text-white hover:text-red-200 py-2 border-b border-red-600 dark:border-red-900" :class="{ 'font-bold': activeSection === 'gallery' }">Gallery</a>
          <a href="#services" @click="mobileMenuOpen = false" class="text-white hover:text-red-200 py-2 border-b border-red-600 dark:border-red-900" :class="{ 'font-bold': activeSection === 'services' }">Services</a>
          <a href="#about" @click="mobileMenuOpen = false" class="text-white hover:text-red-200 py-2 border-b border-red-600 dark:border-red-900" :class="{ 'font-bold': activeSection === 'about' }">About</a>
          <a href="#contact" @click="mobileMenuOpen = false" class="text-white hover:text-red-200 py-2 border-b border-red-600 dark:border-red-900" :class="{ 'font-bold': activeSection === 'contact' }">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section id="home" class="bg-cover bg-center min-h-screen flex items-center" 
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');"
        ref="homeSection">
        <div class="container mx-auto px-4 text-center">
          <div class="max-w-3xl mx-auto space-y-8">
            <h1 class="text-5xl md:text-7xl font-bold text-white">Yum Yum Korean Bucket</h1>
            <p class="text-xl md:text-2xl text-gray-200">Experience authentic Korean cuisine in the heart of Indiranagar</p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center pt-6">
              <a href="#menu" class="btn btn-primary inline-flex items-center">
                <span>Explore Our Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#services" class="btn inline-flex items-center bg-white text-red-600 hover:bg-gray-100 focus:ring-red-500">
                <span>Our Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Section -->
      <section id="menu" class="py-20 bg-gradient-to-b from-orange-50 to-red-50 dark:from-gray-900 dark:to-red-950" ref="menuSection">
        <div class="container-custom py-16">
          <div class="text-center mb-16">
            <h2 class="section-title">Our Menu</h2>
          </div>
          <p class="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">Discover our authentic Korean dishes prepared with love and tradition. Each dish is crafted with fresh ingredients and authentic recipes.</p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <!-- Menu Item 1 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Bibimbap" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Bibimbap</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹450</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹380</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Rice, vegetables, meat, and egg with gochujang sauce.</p>
            </div>

            <!-- Menu Item 2 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1632548260498-b7246fa466ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Kimchi Fried Rice" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Kimchi Fried Rice</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹350</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹320</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Fried rice with kimchi and your choice of protein.</p>
            </div>

            <!-- Menu Item 3 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534817557314-c781053b6eb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Bulgogi" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Bulgogi</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹550</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹480</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Marinated beef, grilled with rice and vegetables.</p>
            </div>

            <!-- Menu Item 4 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Kimchi" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Kimchi</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹200</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹180</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Traditional fermented cabbage with spices.</p>
            </div>

            <!-- Menu Item 5 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Korean Fried Chicken" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Korean Fried Chicken</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹420</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹380</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Crispy chicken with sweet and spicy sauce.</p>
            </div>

            <!-- Menu Item 6 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1626847037657-fd3624a69ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Tteokbokki" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Tteokbokki</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹320</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹280</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Chewy rice cakes in sweet and spicy sauce.</p>
            </div>

            <!-- Menu Item 7 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Japchae" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Japchae</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹380</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹340</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Sweet potato noodles stir-fried with vegetables.</p>
            </div>

            <!-- Menu Item 8 -->
            <div class="menu-item p-3 sm:p-4">
              <div class="mb-3 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580651214613-f4692d6d138f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Kimbap" class="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="flex justify-between items-start mb-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Kimbap</h3>
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">₹250</span>
                  <span class="text-sm sm:text-base font-bold text-red-600 dark:text-red-500">₹220</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Korean-style seaweed rice rolls with vegetables.</p>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="#" class="btn btn-primary inline-flex items-center">
              <span>View Full Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="py-20 bg-gray-900 text-white" ref="gallerySection">
        <div class="container-custom py-16">
          <div class="text-center mb-16">
            <h2 class="section-title text-white">Our Gallery</h2>
          </div>
          <p class="text-center text-gray-300 max-w-3xl mx-auto mb-12">Take a visual tour of our restaurant, dishes, and dining experience. Get a taste of what awaits you at Yum Yum Korean Bucket.</p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <!-- Gallery Image 1 -->
            <div class="relative group overflow-hidden h-48 md:h-64 rounded-lg">
              <img src="https://images.unsplash.com/photo-1622602439439-afdaccc50cff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <h4 class="font-semibold">Modern Interior</h4>
                  <p class="text-sm">Welcoming atmosphere</p>
                </div>
              </div>
            </div>

            <!-- Gallery Image 2 -->
            <div class="relative group overflow-hidden h-48 md:h-64 rounded-lg">
              <img src="https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Korean BBQ" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <h4 class="font-semibold">Korean BBQ</h4>
                  <p class="text-sm">Fresh from the grill</p>
                </div>
              </div>
            </div>

            <!-- Gallery Image 3 -->
            <div class="relative group overflow-hidden h-48 md:h-64 rounded-lg">
              <img src="https://images.unsplash.com/photo-1532347922424-c89d008e3b86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bibimbap Preparation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <h4 class="font-semibold">Chef's Special</h4>
                  <p class="text-sm">Crafted with care</p>
                </div>
              </div>
            </div>

            <!-- Gallery Image 4 -->
            <div class="relative group overflow-hidden h-48 md:h-64 rounded-lg">
              <img src="https://images.unsplash.com/photo-1583187595162-467cf4de4464?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Traditional Setting" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <h4 class="font-semibold">Private Dining</h4>
                  <p class="text-sm">Traditional experience</p>
                </div>
              </div>
            </div>

            <!-- Gallery Image 5 -->
            <div class="relative group overflow-hidden h-48 md:h-64 rounded-lg md:col-span-2">
              <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Restaurant View" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <h4 class="font-semibold">Restaurant View</h4>
                  <p class="text-sm">A place to gather</p>
                </div>
              </div>
            </div>

            <!-- Gallery Image 6 -->
            <div class="relative group overflow-hidden h-48 md:h-64 rounded-lg md:col-span-2">
              <img src="https://images.unsplash.com/photo-1575932444877-5106bee2a599?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Food Preparation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4">
                  <h4 class="font-semibold">Culinary Art</h4>
                  <p class="text-sm">Passion on a plate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-20 bg-gradient-to-r from-red-100 to-orange-50 dark:from-red-950 dark:to-gray-900" ref="servicesSection">
        <div class="container-custom py-16">
          <div class="text-center mb-16">
            <h2 class="section-title">Our Services</h2>
          </div>
          <p class="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">We offer multiple ways to enjoy our delicious Korean cuisine. Choose the option that best suits your preference.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- Dine-In Service -->
            <div class="service-card bg-white dark:bg-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl">
              <div class="rounded-full bg-red-100 dark:bg-red-900/30 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Dine-In Experience</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Experience the authentic Korean ambiance in our restaurant with comfortable seating and excellent service.</p>
              <ul class="text-left space-y-2 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cozy atmosphere
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Table reservation available
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Private dining options
                </li>
              </ul>
            </div>

            <!-- Takeaway Service -->
            <div class="service-card bg-white dark:bg-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl">
              <div class="rounded-full bg-red-100 dark:bg-red-900/30 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Quick Takeaway</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Busy day? Order ahead and pick up your favorite Korean dishes at your convenience.</p>
              <ul class="text-left space-y-2 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Eco-friendly packaging
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Quick order processing
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Phone orders accepted
                </li>
              </ul>
            </div>

            <!-- Delivery Service -->
            <div class="service-card bg-white dark:bg-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl">
              <div class="rounded-full bg-red-100 dark:bg-red-900/30 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Home Delivery</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Enjoy our Korean delicacies in the comfort of your home with our reliable delivery service.</p>
              <ul class="text-left space-y-2 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Free delivery within 5km
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time order tracking
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Multiple payment options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 bg-cover bg-center" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1567529684892-09290a1b2d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');" ref="aboutSection">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title text-white">Our Story</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div class="bg-white/90 dark:bg-gray-900/90 p-8 rounded-xl shadow-xl backdrop-blur-sm">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">About Yum Yum Korean Bucket</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">Founded in 2018, Yum Yum Korean Bucket brings the authentic flavors of Korea to Indiranagar, Bangalore. Our passionate chefs have mastered the art of Korean cuisine, delivering an unforgettable dining experience.</p>
                <p class="text-gray-700 dark:text-gray-300 mb-6">We source the freshest ingredients and follow traditional recipes to ensure that every dish captures the essence of Korean culinary excellence. Whether you're a Korean food enthusiast or trying it for the first time, our menu offers something for everyone.</p>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p class="text-gray-700 dark:text-gray-300">1st Stage Road, Shop No5, Indiranagar, Karnataka, India, 560038</p>
                  </div>
                  
                  <div class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p class="text-gray-700 dark:text-gray-300">+91 80 4123 5678</p>
                  </div>
                  
                  <div class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p class="text-gray-700 dark:text-gray-300">info@yumyumkoreanbucket.com</p>
                  </div>
                  
                  <div class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p class="text-gray-700 dark:text-gray-300 font-semibold">Opening Hours:</p>
                      <p class="text-gray-700 dark:text-gray-300">Monday to Sunday: 11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="transform transition-all duration-500 hover:scale-105">
                <div class="rounded-xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Yum Yum Korean Bucket Restaurant" class="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 bg-gradient-to-r from-gray-50 to-red-50 dark:from-gray-900 dark:to-red-900" ref="contactSection">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="section-title">Contact Us</h2>
          </div>
          <p class="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">Have a question or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.</p>
          
          <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <form @submit.prevent="submitContactForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="contactForm.name" 
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white" 
                    placeholder="Your name"
                    required
                  />
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="contactForm.email" 
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white" 
                    placeholder="you@example.com"
                    required
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="contactForm.phone" 
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white" 
                  placeholder="Your phone number"
                />
                <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="contactForm.subject" 
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white" 
                  placeholder="Subject of your message"
                  required
                />
                <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  v-model="contactForm.message" 
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white" 
                  placeholder="Your message"
                  required
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
              </div>
              
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  v-model="contactForm.terms" 
                  class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  I agree to the <a href="#" class="text-red-600 hover:text-red-700">Privacy Policy</a>
                </label>
              </div>
              
              <div class="flex justify-center">
                <button type="submit" class="btn btn-primary inline-flex items-center">
                  <span v-if="isSubmitting">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                  <span v-else>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </span>
                </button>
              </div>
              
              <div v-if="formSubmitted" class="p-4 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-lg text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { useDarkMode } from '~/composables/useDarkMode';

const { isDarkMode, toggleDarkMode } = useDarkMode();

// Mobile menu state
const mobileMenuOpen = ref(false);

// Form handling
const contactForm = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  terms: false
});

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePhone = (phone: string): boolean => {
  // Basic validation, can be enhanced based on requirements
  return phone === '' || phone.length >= 10;
};

const submitContactForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = '';
  });
  
  // Validate form
  let isValid = true;
  
  if (!contactForm.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }
  
  if (!contactForm.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!validateEmail(contactForm.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  if (contactForm.phone && !validatePhone(contactForm.phone)) {
    errors.phone = 'Please enter a valid phone number';
    isValid = false;
  }
  
  if (!contactForm.subject.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  }
  
  if (!contactForm.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }
  
  if (isValid) {
    isSubmitting.value = true;
    
    // Simulate form submission (since this is a static site)
    setTimeout(() => {
      isSubmitting.value = false;
      formSubmitted.value = true;
      
      // Reset form
      contactForm.name = '';
      contactForm.email = '';
      contactForm.phone = '';
      contactForm.subject = '';
      contactForm.message = '';
      contactForm.terms = false;
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        formSubmitted.value = false;
      }, 5000);
    }, 1500);
  }
};

// Intersection Observer for active section highlighting
const sections = ['home', 'menu', 'gallery', 'services', 'about', 'contact'];
const activeSection = ref('home');

// References to section elements
const homeSection = ref<HTMLElement | null>(null);
const menuSection = ref<HTMLElement | null>(null);
const gallerySection = ref<HTMLElement | null>(null);
const servicesSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);
const contactSection = ref<HTMLElement | null>(null);

const sectionRefs = [homeSection, menuSection, gallerySection, servicesSection, aboutSection, contactSection];

// Set up intersection observer
onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);
  
  // Observe all sections
  sectionRefs.forEach(sectionRef => {
    if (sectionRef.value) {
      observer.observe(sectionRef.value);
    }
  });
  
  // Cleanup
  onUnmounted(() => {
    sectionRefs.forEach(sectionRef => {
      if (sectionRef.value) {
        observer.unobserve(sectionRef.value);
      }
    });
  });
});
</script>
