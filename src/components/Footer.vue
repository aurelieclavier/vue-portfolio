<template>
    <footer class="main" id="contact">
        <section id="cv">
            <article class="major">
                <h2>Mon CV</h2>
                <a :href="cv.link" target="_blank">
                    <img :src="cv.image" :alt="cv.alt" class="img-border-radius">
                </a>
            </article>
        </section>
        <section>
            <ul class="icons">
                <li v-for="item in items" :key="item.id">
                    <a v-bind:href="item.link" target="_blank">
                        <img :src="item.image" :alt="item.alt">
                    </a>
                </li>
            </ul>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data () {
        return {
            items: [
                {
                    id: 0,
                    link: "mailTo:c.aurelie.pro@gmail.com",
                    image: [require("../assets/img/reseaux/mail.png")],
                    alt: "Email Aurélie"
                },
                {
                    id: 1,
                    link: "https://www.linkedin.com/in/aurelieclavier/",
                    image: [require("../assets/img/reseaux/linkedin.png")],
                    alt: "Linkedin Aurélie"
                },
                {
                    id: 2,
                    link: "https://github.com/aurelieclavier",
                    image: [require("../assets/img/reseaux/github.png")],
                    alt: "Github Aurélie"
                }
            ],
            cv: {
                id: 0,
                link: "files/CV_Aurelie.pdf",
                image: [require("../assets/img/cv.png")],
                alt: "cv aurelie"     
            }
        }
    }
}
</script>

