<template>
    <div>
        <h1 class="overview">Bookland - let the book talk...</h1>
        <div>
            <img class="library" width="1200" height="675" src="../assets/library.jpg">
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.295);
}

.library{
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.quote
    {
    margin-top: 30px;
    background-color:rgba(121, 72, 72, 0.116);
    padding:6px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

</style>