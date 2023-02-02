<template>
<!-- 현재 URL정보는 $route에 담겨있음.
파라미터자리에 기입된거 알려줌. -->
  <div>
    <h4>상세페이지</h4>
    <h5>{{블로그글[$route.params.id].title}}</h5>
    <p>{{블로그글[$route.params.id].content}}</p>
    <!-- 어디서 보여줄지 선언. -->
    <router-view></router-view>
  </div>

</template>

<script>
export default {
    props:{
        블로그글 : Array,
    }

}
</script>

<style>

</style>