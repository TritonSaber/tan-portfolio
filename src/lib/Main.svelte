<script lang="ts">
    import profileImg from '$lib/images/justine-tan-face-modified.jpg';
    import logoImg from '$lib/images/main-tan-logo.png';
</script>

<main id="main" class="min-h-screen scroll-mt-20 flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col-reverse lg:flex-row items-start">
            <div class="justify-center md:text-left md:w-1/2">
                <img src={logoImg} alt="Justine Tan Logo" class="w-32 h-32">
                <h1 class="text-5xl font-bold text-red-600 mb-4 google-sans-code-major">
                    // welcome
                </h1>

                <h2 class="text-2xl text-gray-700 google-sans-code-major">
                    Justine Joshua Tan
                </h2>

                <p class="mt-8 text-gray-600 text-wrap text-justify max-w-2xl mx-auto px-4">
                    Computer Science student <br />
                    De La Salle University, Manila
                </p>

                <a href="/resume/Justine Joshua Tan - Resume.pdf" target="_blank" rel="noopener noreferrer" class="ml-4 mt-6 inline-block text-white bg-red-600 hover:bg-red-400 transition-colors duration-300 px-4 py-2 rounded-md" aria-label="Resume">
                    View My Resume
                </a>

                <div class="flex items-center gap-6 mt-6 border-t border-white pt-4">
                    <!-- icons -->
                    <a href="mailto:justinejoshuatan13@gmail.com" class="text-gray-600 hover:text-red-600 transition-colors duration-300" aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>
                    </a>
                    <!-- github icon - https://icons.getbootstrap.com/icons/github/ -->
                    <a href="https://github.com/TritonSaber" class="text-gray-600 hover:text-red-600 transition-colors duration-300" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>

                    <!-- linkedin icon - https://icons.getbootstrap.com/icons/linkedin/ -->
                    <a href="https://www.linkedin.com/in/justine-joshua-tan-2aba19223/" class="text-gray-600 hover:text-red-600 transition-colors duration-300" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div id="main_image" class="md:w-1/2 flex justify-center w-full mt-8 md:mt-0">
                <img src={profileImg} alt="Justine Tan" id="profile_img" class="profile_img shrink-0 w-full">
            </div>
        </div>
    </div>

</main>