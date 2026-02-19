<script lang="ts">
    import profileImg from '$lib/images/justine-tan-face-modified.jpg';
    import logoImg from '$lib/images/main-tan-logo.png';
</script>

<main class="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row items-start" id="main">
            <div class="justify-center md:text-left mr-10">
                <img src={logoImg} alt="Justine Tan Logo" class="w-32 h-32">
                <h1 class="text-5xl font-bold text-red-600 mb-4 google-sans-code-major">
                    // welcome
                </h1>

                <h2 class="text-2xl text-gray-700 google-sans-code-major">
                    Justine Joshua Tan
                </h2>

                <p class="mt-8 text-gray-600 text-wrap text-justify max-w-2xl mx-auto px-4">
                    I am a Computer Science student at De La Salle University, Manila, majoring in Software Technology.
                    I am looking for an internship where I can improve my skills in regards to not only programming, but also teamwork, and gain experience in a software development setting.
                </p>
            </div>
            <div id="main_image" class="md:w-1/2 flex justify-around">
                <img src={profileImg} alt="Justine Tan" id="profile_img" class="profile_img absolute">
            </div>
        </div>
    </div>

</main>