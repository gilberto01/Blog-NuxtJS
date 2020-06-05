<<template>
    <div>
        <div v-if="info_autor">
            <strong>Autor:</strong> <a v-b-modal="'my-modal-'+id">{{VerNombreAutor}}</a>
            <b-modal :id="'my-modal-'+id" title="Información del autor" hide-footer>
                <div class="text-center mt-3">
                    <b-img :src="VerFotoAutor" rounded="circle" alt="Circle image"></b-img>
                    <p class="my-2 mt-3"><strong>{{VerNombreAutor}}</strong></p>
                    <p class="my-2 mb-5"><strong>Email:</strong> {{VerInfoAutor}}</p>
                </div>
                <b-button class="mt-3" block @click="$bvModal.hide('my-modal-'+id)">Cerrar</b-button>
            </b-modal>
        </div>
        <div v-else>
            <strong>Autor:</strong> {{VerNombreAutor}}
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    props: {
        id: Number,
        info_autor: Object
    },
    data() {
        return {
            info: []
        }
    },
    computed:{
        VerNombreAutor(){
            if(this.info_autor){
                return this.info_autor.name.title+" "+this.info_autor.name.first+" "+this.info_autor.name.last
            }else{
                return "cargando..";
            }
        },
        VerFotoAutor(){
            if(this.info_autor){ return this.info_autor.picture.large }else{
                return "cargando..";
            }
        },
        VerInfoAutor(){
            if(this.info_autor){ 
                return this.info_autor.email
            }else{
                return "cargando..";
            }
        }
    },
    mounted(){
    }
}
</script>