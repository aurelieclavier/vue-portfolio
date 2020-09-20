<template>
    <nav id="nav">
        <ul>
            <li v-for="link in links" :key="link.id"
                :id="link.id" 
                :class="{ active : active_el == link.active_el }" 
                class="nav-link">
                <a v-bind:href="link.anchor" 
                    @click="activate(link.id)" 
                    v-smooth-scroll="{ duration: 1000, offset: -50}">
                    {{ link.content }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavComponent',
    data () {
        return {
            active_el: 1,
            links: [
                {
                    id : 1,
                    active_el: 1,
                    anchor: "#intro",
                    content: "Introduction"
                },
                {
                    id: 2,
                    active_el: 2,
                    anchor: "#skills",
                    content: "Compétences"
                },
                {
                    id: 3,
                    active_el: 3,
                    anchor: "#exp",
                    content: "Expériences"
                },
                {
                    id: 4,
                    active_el: 5,
                    anchor: "#contact",
                    content: "Contact"
                },
            ]
        }
    },
    methods: {
        activate:function(el){
            setTimeout(function () {
                var elementById = document.getElementById(el);
                var elementByClass = document.getElementsByClassName('active')[0];
                if (elementById != elementByClass) {
                    elementByClass.classList.remove('active');
                }
                this.active_el = el
            }, 1000)
        }
    }
}
</script>
