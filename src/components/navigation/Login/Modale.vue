<template>
    <div class="bloc-modale" v-if="revele">
        <!-- if revele false le modale disparait if revele true le modale apparait -->
        <div class="overlay" v-on:click="toggleModale"></div> <!-- click en dehors du modale pour fermer -->
        <form class="modale-card">

                <div class="container">
                    <label for="uname"><strong>Identifiant</strong></label>
                    <InputText type="text" placeholder="Entrez votre identifiant" name="uname" required v-model="username"/>

                    <label for="psw"><strong>Mot de passe</strong></label>
                    <InputText type="password" placeholder="Entrez votre mot de passe" name="psw" required v-model="password"/>
        
                    <Button label="Se connecter" type="submit" id="button" @click="connect"/>

                <label v-on:click="toggleModale">
                    Vous n'avez pas de compte? <router-link to="/Inscription"><strong>Inscrivez-vous</strong>
                    </router-link>
                </label>
            </div>
        </form>
    </div>
</template>

<script>
import AuthServices from '../../../services/AuthServices';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
    name: 'Modale',
    props: ['revele', 'toggleModale'],
    components: {
        InputText,
        Button
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        connect(e) {
            e.preventDefault();
            const form = new FormData();
            form.append('username', this.$data.username);
            form.append('password', this.$data.password);
            AuthServices.auth(form)
                .then((response) => {
                    if (response === "User not found") {
                        console.log("erreur");
                    } else {
                        this.setDataToStore(response.data);
                    }
                });
        },
        setDataToStore(data) {
            this.$store.state.nom = data["nom"];
            this.$store.state.prenom = data["prenom"];
            this.$store.state.username = data["username"];
            this.$store.state.mail = data["mail"];
            this.$store.state.adresse = data["adresse"];
            this.setInlocalStorage();
            this.$router.push('/Home');
        },
        setInlocalStorage() {
            localStorage.nom = this.$store.state.nom;
            localStorage.prenom = this.$store.state.prenom;
            localStorage.username = this.$store.state.username;
            localStorage.mail = this.$store.state.mail;
            localStorage.adresse = this.$store.state.adresse;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/Variables.scss";

.bloc-modale {
    position: fixed;
    top: 10;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale-card {
    background: white;
    color: #333;
    padding: 3%;
    position: fixed;
    top: 20%;
    width: 50%;
}

.btn-modale {
    position: absolute;
    right: 5%;
    top: 5%;
    font-size: 150%;
    font-weight: bold;
    cursor: pointer;
}

/* Full-width input fields */
label {
    padding: 2%;
}

input[type=text],
input[type=password] {
    width: 95%;
    padding: 2%;
    margin: 1%;
    display: inline-block;
    margin-right: 40%;
}

/* Set a style for all buttons */
#button {
    padding: 1%;
    margin: 1%;
    cursor: pointer;
    width: 95%;
    margin-left: 1%;
    background-color: $color-text;
    border: 1px solid $color-text;
}

#button:hover{
    opacity: 0.8;
}

a {
    color: black;
}

</style>
