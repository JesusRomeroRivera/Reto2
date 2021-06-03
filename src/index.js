Vue.component('modal',{
    props:['modal'],
    data(){
        return{
        }
    },
    computed:{
        
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        close(){
            this.$emit('change-valor')
        }
    },
    template: `
        <section class="Modal">
            <header class="Header">{{ this.modal.title }}</header>
            <section class="Slot">
                <slot></slot>
            </section>
            <footer class="Footer">
                <button @click="close" class="Footer--button">Cerrar</button>
            </footer>
        </section>
        `
});


new Vue({
    el: '#app',
    data () {
        return {
            modalData: {
                title: 'Modal de Gatito',
            },
            showModal: false,
        }
    },

    methods: {
        toggleModal(){
            this.showModal = !this.showModal
        }
    }
  })