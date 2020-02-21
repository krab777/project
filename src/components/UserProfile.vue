<template>
    <div id="user-profile"> <!--Обязательный корневой элемент-->
        <h1>User Profile {{ id }}</h1>

        <button @click="back">Back</button>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                id: this.$route.params.id
            }
        },
        methods: {
            back() {
                this.$router.push('/users')
            }
        },
        watch: {
            $route(to) {
                this.id = to.params['id']
            }
        }
    }
</script>

<style scoped>
</style>