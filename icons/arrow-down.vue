  <template>
    <svg :class="dynamicClass" width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.7667 0.29977C26.1334 0.29977 25.5 0.533104 25 1.0331L15 11.0331L5.00003 1.0331C4.03337 0.0664387 2.43337 0.0664387 1.4667 1.0331C0.500033 1.99977 0.500033 3.59977 1.4667 4.56644L13.2334 16.3331C14.2 17.2998 15.8 17.2998 16.7667 16.3331L28.5334 4.56644C29.5 3.59977 29.5 1.99977 28.5334 1.0331C28.0334 0.533104 27.4 0.29977 26.7667 0.29977Z"
        fill="black" />
    </svg>
  </template>

<script lang="ts" setup>
defineProps<{
  dynamicClass?: string
}>()
</script>