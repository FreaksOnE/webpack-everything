<style lang="{{ preprocessor }}" src="{{ preprocessor }}"></style>
<style lang="{{ preprocessor }}" scoped>
{{#if_eq preprocessor 'stylus'}}
    @import '~stylus/vars'
    @import '~stylus/mixins'
    #app
        background-color app-color
        display flex
        flex-direction column
        min-height 100vh
        max-width 1024px
        margin 0 auto
        shadow 4
        header
            background-color primary-color
            color white
            display flex
            font-size 1.25rem
            height 60px
            justify-content space-between
            line-height 60px
            padding 0 0 0 10px
            shadow 2

            .brand
                font-family serif
                font-size 2rem
                flex 0 1 auto
                color white
                text-decoration none

            nav
                font-size 0
                flex 0 1 auto

                a
                    color white
                    display inline-block
                    font-size 1.25rem
                    padding 0 10px
                    text-decoration none
                    &:hover
                    &.router-link-active
                        background-color secondary-color
        main
        footer
            padding 10px
        main
            font-size 1.3rem
            flex 1 0 auto
        footer
            background-color secondary-color
            font-size 0.8rem
            color white
            text-align center

    .route-enter-active
    .route-leave-active
        transition opacity transition-time
    .route-enter
    .route-leave-to
        opacity 0
{{/if_eq}}
{{#if_eq preprocessor 'scss'}}
    @import '~scss/vars';
    @import '~scss/mixins';
    #app {
        background-color: $app-color;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 1024px;
        margin: 0 auto;
        @include shadow(4);

        header {
            background-color: $primary-color;
            color: $white;
            display: flex;
            font-size: 1.25rem;
            height: 60px;
            justify-content: space-between;
            line-height: 60px;
            padding: 0 0 0 10px;
            @include shadow(2);

            .brand {
                font-family: serif;
                font-size: 2rem;
                flex: 0 1 auto;
                color: $white;
                text-decoration: none;
            }

            nav {
                font-size: 0;
                flex: 0 1 auto;

                a {
                    color: $white;
                    display: inline-block;
                    font-size: 1.25rem;
                    padding: 0 10px;
                    text-decoration: none;

                    &.router-link-active,
                    &:hover {
                        background-color: $secondary-color;
                    }
                }
            }
        }

        footer,
        main {
            padding: 10px;
        }

        main {
            font-size: 1.3rem;
            flex: 1 0 auto;
        }

        footer {
            background-color: $secondary-color;
            font-size: 0.8rem;
            color: $white;
            text-align: center;
        }
    }

    .route-enter-active,
    .route-leave-active {
        transition: opacity $transition-time;
    }

    .route-enter,
    .route-leave-to {
        opacity: 0;
    }
{{/if_eq}}
</style>
<template>
    <div class="app" id="app">
        <header>
            <router-link :to="{name: 'Home'}" class="brand">{{ project }}</router-link>
            <nav>
                <router-link :to="{name: 'Home'}" exact>Home</router-link>
                <router-link :to="{name: 'Test'}" exact>Test</router-link>{{#if_eq apollo true}}
                <router-link :to="{name: 'Apollo'}" exact>Apollo</router-link>{{/if_eq}}
            </nav>
        </header>
        <main>
            <transition name="route" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
        <footer>
            &copy;{{ project }} {{ year }}
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>
