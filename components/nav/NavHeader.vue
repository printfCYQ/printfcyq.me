<script lang="ts" setup>
interface NavType {
  icon: string
  path: string
  text?: string
}

const routes = reactive<NavType[]>([
  { icon: 'carbon:cics-sit-overrides', path: '/posts' },
  { icon: 'carbon:delivery-parcel', path: '/projects' },
  { icon: 'mingcute:notebook-2-fill', path: '/notes' },
])
</script>

<template>
  <div>
    <header fixed z-9999 top-0 inset-x-0 trans backdrop-blur b="b-0 dashed gray-300 dark:b-gray-500" fbc px-8>
      <NuxtLink to="/" title="Home">
        <!-- <img v-show="isDark" h-6 src="/logo-light.svg" alt="logo"> -->
        <!-- <img v-show="!isDark" h-6 src="/logo.svg" alt="logo"> -->
        <img src="/favicon.ico" alt="" />
        <div text-6xl material-symbols:123></div>
      </NuxtLink>
      <nav w-full grid="~ cols-[auto_max-content]" h-16 md:h-18>
        <div></div>
        <div grid gap-5 auto-flow-col items-center>
          <NuxtLink v-for="route in routes" :key="route.path" :to="route.path"
            :title="route.path.slice(1, 2).toUpperCase() + route.path.slice(2).toLowerCase()">
            <span v-if="route.text" icon-text>{{ route.text }}</span>
            <Icon :name="route.icon" />
          </NuxtLink>
          <a title="Github" href="https://github.com/printfCYQ" target="_blank" icon-link>
            <Icon name="ri:github-line" />
          </a>
          <div fcc>
            <DrakToggle />
          </div>
        </div>
      </nav>
    </header>
    <div h-16 md:h-18></div>
  </div>
</template>
