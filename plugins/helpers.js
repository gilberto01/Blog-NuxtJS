import Vue from 'vue'
Vue.mixin({
    methods:{
        limiteLetras: function(texto,limite){
            if(texto.length > limite) {
                return texto.slice(0,limite)+"...";
            }
            return texto;
        },
        VerFecha(fecha){
            let partes = fecha.split("-");
            var fecha = new Date(Date.UTC(partes[0], partes[1], partes[1], 3, 0, 0));
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
        
            return fecha.toLocaleDateString("es-MX", options);
        }
    }
})