<script lang='ts' setup>
import { useTitle } from '@vueuse/core'
import { Article } from '~/types'

useTitle('Posts | Chris')
useHead({
  title: 'Posts | Chris',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Some boring but useful articles.',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'posts, articles, blog',
    },
  ],
})

// function sortArticles(list: Article[]) {
//   return list.sort((a, b) => {
//     return new Date(b.date).getTime() - new Date(a.date).getTime()
//   })
// }
function groupList(list: Article[]) {
  list = list.map(item => {
    return {
      ...item,
      year: item.date.substring(0, 4)
    }
  })
  const objectByYear = groupBy(list, 'year')
  const years = Object.keys(objectByYear).sort((a, b) => Number(b) - Number(a))
  const result = []
  for (let item of years) {
    let articleList = objectByYear[item].sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    result.push([item, articleList])
  }
  return result
}
function groupBy(objectArray: any, property: string) {
  return objectArray.reduce(function (acc: any, obj: any) {
    var key = obj[property] ?? "Other";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
</script>

<template>
  <div prose ma origin>
    <PageHeader title="Posts" description="Some boring but useful articles." />
    <ContentList>
      <template #default="{ list }">
        <template v-for="item in groupList(list)" :key="item[0]">
          <div relative h-10 pointer-events-none><span text-8em op10 absolute left-1rem top--1rem font-bold>{{
            item[0]
          }}</span>
          </div>
          <template v-for="article in item[1]" :key="article._path">
            <nuxt-link v-if="!article.draft" :to="article._path" important-no-underline block op-70 hover:op-100>
              <h3 text-lg md-text-xl>
                {{ article.title }}
              </h3>
              <div font-mono italic fic text-sm text-gray4 fw-normal>
                {{ new Date(article.date).toDateString() }}
              </div>
            </nuxt-link>
          </template>
        </template>
        <!-- <template v-for="article in sortArticles(list)" :key="article._id">
          <nuxt-link v-if="!article.draft" :to="article._path" important-no-underline block op-70 hover:op-100>
            <h3 text-lg md-text-xl>
              {{ article.title }}
            </h3>
            <div font-mono italic fic text-sm text-gray4 fw-normal>
              {{ new Date(article.date).toDateString() }}
            </div>
          </nuxt-link>
        </template> -->
      </template>
      <template #not-found>
        No Posts Found
      </template>
    </ContentList>
  </div>
</template>
