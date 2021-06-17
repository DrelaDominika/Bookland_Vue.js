<template>
    <div>
        <h1 class="overview">Bookland - let the book talk...</h1>
        <div class="library">
            <img width="1200" height="675" src="../assets/library.jpg">
        </div>
        <div>
        <vue-inspirational-quote>
            <template v-slot:default="slotProps">
            <blockquote class="blockquote quote">
                &#8220;{{ slotProps.quote.body }}&#8221;
                <p>
                    <em>&mdash;{{ slotProps.quote.author }}</em>
                </p>
            </blockquote>
            </template>
        </vue-inspirational-quote> 
    </div>
    </div>
</template>

<script>
import VueInspirationalQuote from "vue-inspirational-quote"
    export default {
        components: {
    VueInspirationalQuote
    },
    }
</script>

<style scoped>
.overview {
    margin-top: 30px;
    font-style: italic;  
    font-size: 40px;
    color: rgb(119, 56, 56);
    font-weight: 550;
}

.library{
    margin-top: 30px;
}

.quote
    {
    margin-top: 30px;
    background-color:rgba(121, 72, 72, 0.116);
    padding:6px;
    border-radius: 25px;
    }

</style>