<template>
    <svg :width="icon_width" :height="icon_height" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_128_326" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
        <path d="M0 0H49V49H0V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_128_326)">
        <path d="M0.720215 38.7598V21.5936C0.720215 20.2941 1.77362 19.2408 3.07298 19.2408H6.90503C8.20449 19.2408 9.25779 20.2941 9.25779 21.5936V45.9295C9.25779 47.2289 8.20449 48.2823 6.90503 48.2823H3.07298C1.77362 48.2823 0.720215 47.2289 0.720215 45.9295V42.9708" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.9158 48.2819H16.0837C14.7843 48.2819 13.731 47.2285 13.731 45.9292V32.8722C13.731 31.5728 14.7843 30.5194 16.0837 30.5194H19.9158C21.2151 30.5194 22.2685 31.5728 22.2685 32.8722V45.9292C22.2685 47.2285 21.2151 48.2819 19.9158 48.2819Z" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35.2749 30.338V45.9296C35.2749 47.229 34.2215 48.2823 32.9221 48.2823H29.0901C27.7906 48.2823 26.7373 47.229 26.7373 45.9296V24.3901C26.7373 23.0907 27.7906 22.0373 29.0901 22.0373H32.9221C34.2215 22.0373 35.2749 23.0907 35.2749 24.3901V26.0314" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.9319 48.2822H42.0998C40.8005 48.2822 39.7471 47.2288 39.7471 45.9295V15.0684C39.7471 13.769 40.8005 12.7156 42.0998 12.7156H45.9319C47.2312 12.7156 48.2846 13.769 48.2846 15.0684V45.9295C48.2846 47.2288 47.2312 48.2822 45.9319 48.2822Z" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.20364 10.4142C7.20364 11.634 6.21311 12.6228 4.99118 12.6228C3.76934 12.6228 2.77881 11.634 2.77881 10.4142C2.77881 9.19433 3.76934 8.20553 4.99118 8.20553C6.21311 8.20553 7.20364 9.19433 7.20364 10.4142Z" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.1775 24.2045C19.9691 25.4064 18.8241 26.212 17.62 26.0039C16.4161 25.7958 15.609 24.6527 15.8175 23.4508C16.026 22.249 17.171 21.4432 18.3749 21.6514C19.579 21.8594 20.3859 23.0025 20.1775 24.2045Z" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.1868 13.8074C32.9783 15.0093 31.8333 15.8149 30.6293 15.6068C29.4254 15.3987 28.6183 14.2556 28.8267 13.0537C29.0353 11.8519 30.1803 11.0462 31.3842 11.2543C32.5883 11.4623 33.3952 12.6054 33.1868 13.8074Z" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M46.2281 2.92643C46.2281 4.14627 45.2375 5.13507 44.0156 5.13507C42.7937 5.13507 41.8032 4.14627 41.8032 2.92643C41.8032 1.7066 42.7937 0.717798 44.0156 0.717798C45.2375 0.717798 46.2281 1.7066 46.2281 2.92643Z" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.4626 22.2455L6.60498 12.0813" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.2105 14.8181L19.8101 22.3698" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42.3032 4.30221L32.8286 11.9136" stroke="#00BC4C" stroke-width="2.574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>

</template>

<script setup lang="ts">

const { icon_height, icon_width} = withDefaults(defineProps<{
    icon_height?: number,
    icon_width?: number,
}>(), {
    icon_height: 50,
    icon_width: 50,
})
</script>