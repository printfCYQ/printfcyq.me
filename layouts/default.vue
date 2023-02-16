<template>
  <div>
    <NavHeader />
    <main px-7 pt-7 pb-18>
      <slot />
    </main>
    <NavFooter />
    <Plum />
    <Backtop animation="move" :right="40" :bottom="40" />
</div>
</template>
