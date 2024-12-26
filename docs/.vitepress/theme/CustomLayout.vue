<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-bottom>
      <div>
        <p class="site-disclosure">为了改善体验，本站使用Microsoft Clarity以追踪网站使用情况，访问本站即代表您同意我们和Microsoft可以收集和使用这些数据。</p>
        <p class="site-disclosure">We improve our products by using Microsoft Clarity to see how you use our website. By
          using our site, you agree that we and Microsoft can collect and use this data.</p>
      </div>
    </template>
    <template #aside-outline-after>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6864290273818399" data-ad-slot="8659910640"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
    </template>
    <template #sidebar-nav-after>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6864290273818399" data-ad-slot="4772636520"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
    </template>
    <template #doc-footer-before>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6864290273818399" data-ad-slot="2094502294"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
    </template>
    <template #doc-after>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6864290273818399" data-ad-slot="4330912692"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
    </template>
  </Layout>
</template>

<style>
.site-disclosure {
  font-size: 10px;
  line-height: initial;
  color: #c2c2c2;
}
</style>