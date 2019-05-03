<template>
    <nav id="nav">
        <ul>
            <li id="1"
            :class="{ active : active_el == 1 }"
            class="nav-link">
                <a href="#intro"
                @click="activate(1)"
                v-smooth-scroll="{ duration: 1000, offset: -80}">Introduction</a>
            </li>
            <li id="2"
            :class="{ active : active_el == 2 }"
            class="nav-link">
                <a href="#skills"
                @click="activate(2)"
                v-smooth-scroll="{ duration: 1000, offset: -80}">Compétences</a>
            </li>
            <li id="3"
            :class="{ active : active_el == 3 }"
            class="nav-link">
                <a href="#exp"
                @click="activate(3)"
                v-smooth-scroll="{ duration: 1000, offset: -80}">Expériences</a>
            </li>
            <li id="4"
            :class="{ active : active_el == 4 }"
            class="nav-link">
                <a href="#contact"
                @click="activate(4)"
                v-smooth-scroll="{ duration: 1000}">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavComponent',
    data () {
        return {
            active_el: 1
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
