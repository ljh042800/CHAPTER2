<template>
    <div>
        <!-- 페이지 이동. -->
        <h4 @click="$router.push('/detail/0')">{{블로그글[0].title}}</h4>
        <p>{{블로그글[0].date}}</p>
    </div>
     <div>
        <h4>{{블로그글[1].title}}</h4>
        <p>{{블로그글[1].date}}</p>
    </div>
     <div>
        <h4>{{블로그글[2].title}}</h4>
        <p>{{블로그글[2].date}}</p>
    </div>

</template>


<script>
export default {
    //eslint-disable-next-line
    name : 'List',
    props : {
        // [시작이면 array {이거면 object
        블로그글 : Array,
    }


}
</script>

<style>

</style>