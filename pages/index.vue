<script lang="ts" setup>
useHead({
  title: 'printf CYQ',
})

const { data: userInfo } = await useFetch('/api/user')
</script>

<template>
  <div prose font-mono ma origin>
    <div flex flex-col items-center md="gap-10 flex-row">
      <img :src="userInfo?.avatar_url" alt="Avatar" w-50 h-50 rounded-full>
      <div>
        <h2 fic justify-center md="justify-start">
          {{ userInfo?.name ?? userInfo?.login }}
        </h2>
        <Typewrite text-lg text-center md="text-left" :word="userInfo?.bio" :step="500"></Typewrite>
        <div fic gap-4 justify-center flex-wrap md="justify-start">
          <div fic gap-2>
            <Icon class="text-xl" name="ic:round-work" />
            {{ userInfo?.company }}
          </div>
          <div fic gap-2>
            <Icon name="fluent:location-12-filled" />
            {{ userInfo?.location }}
          </div>
          <div fic gap-2>
            <Icon name="maki:campsite-11" />
            {{ userInfo?.blog }}
          </div>
        </div>
        <div my-4 fic justify-center md="justify-start">
          <Icon mr2 name="fa-solid:user-friends" />
          <span>
            {{ userInfo?.followers }}
            <span class="text-xs">
              followers
            </span>
          </span>
          <span mx-2>·</span>
          <span>
            {{ userInfo?.following }}
            <span class="text-xs">
              following
            </span>
          </span>
        </div>
      </div>
    </div>
    <p mt-20>
      👋 Hi there, I’m printfCYQ
    </p>
    <p>
      🔭 I’m currently working on Web development
    </p>
    <p>🤗 I can skilled spelling HTML CSS Javascript Vue etc... </p>
  </div>
</template>