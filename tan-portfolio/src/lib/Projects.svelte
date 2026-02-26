<script>
    // Script for projects
    import { myProjects } from "./utils/project.ts";
</script>
    
<main class="min-h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20" id="projects">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="justify-center md:text-left mr-10">
                <h1 class="text-5xl font-bold text-red-600 mb-4 google-sans-code-major">
                    // projects
                </h1>
            </div>
            <div class="flex-col md:grid-cols-2 gap-8">
            <!-- grid, grid-cols-1 and md:grid-cols-2 may be needed if layout needs to be left to right -->
                {#each myProjects as project}
                    <div class="justify-center md:text-left mr-10 mt-8 lg:mt-0">
                        <h3 class="text-3xl font-bold text-gray-700 google-sans-code-major mx-auto px-4">
                            {project.title}
                        </h3>

                        <p class="mt-8 text-gray-600 text-wrap text-justify max-w-2xl mx-auto px-4">
                            {project.description}<br>
                            <a href={project.githublink} target="_blank" rel="noopener noreferrer" class="mt-6 inline-block text-white bg-red-600 hover:bg-red-400 transition-colors duration-300 px-4 py-2 rounded-md" aria-label="GitHub Repository">
                                View on GitHub
                            </a>
                            {#if project.livelink}
                                <a href={project.livelink} target="_blank" rel="noopener noreferrer" class="mt-6 ml-2 inline-block text-white bg-red-600 hover:bg-red-400 transition-colors duration-300 px-4 py-2 rounded-md" aria-label="Live Project">
                                    View Live
                                </a>
                            {/if}
                            <br>

                            {#each project.tags as tag}
                                <span class="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2 mt-5 mb-10">{tag}</span>
                            {/each}
                        </p>
                        
                    </div>
                    <!-- In case I need an image -->
                    <!-- <div class="flex flex-wrap gap-3">
                        
                    </div> -->
                {/each}
            </div>
        </div>
    </div>
</main>