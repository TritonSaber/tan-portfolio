<script>
  // This variable determines if the mobile menu is open or closed
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="bg-white dark:bg-gray-900 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      
      <div class="shrink-0 flex items-center">
        <img src="/android-chrome-192x192.png" alt="Logo" class="h-8 w-8 mr-2" />
      </div>

      <div class="hidden sm:flex sm:items-center sm:space-x-8">
        <a href="#main" class="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="#about" class="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
        <a href="#projects" class="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
        <a href="#contact" class="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
      </div>

      <div class="flex items-center sm:hidden">
        <button on:click={toggleMenu} aria-label="Toggle menu" class="text-gray-500 hover:text-red-500 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="sm:hidden bg-gray-50">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#main" class="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#about" class="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">About</a>
        <a href="#projects" class="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">Projects</a>
        <a href="#contact" class="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">Contact</a>
      </div>
    </div>
  {/if}
</nav>