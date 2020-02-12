<template>
    <nav id="nav">
        <ul>
            <li v-for="link in links" :key="link.id"
                :id="link.id" 
                :class="{ active : active_el == link.active_el }" 
                class="nav-link">
                <a v-bind:href="link.href" 
                @click="link.click" 
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
                    click : "activate(1)",
                    href: "#intro",
                    content: "Introduction"
                },
                {
                    id: 2,
                    active_el: 2,
                    click : "activate(2)",
                    href: "#skills",
                    content: "Compétences"
                },
                {
                    id: 3,
                    active_el: 3,
                    click : "activate(3)",
                    href: "#exp",
                    content: "Expériences"
                },
                {
                    id: 4,
                    active_el: 4,
                    click : "activate(4)",
                    href: "#project",
                    content: "Projets"
                },
                {
                    id: 5,
                    active_el: 5,
                    click : "activate(5)",
                    href: "#contact",
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
