<script>
export default {
    name: 'VosFichiersMain',
    data:function (){
    return {
        taille1: 1,
        taille2: 100
    }
  }
}
</script>

<template>
    <div id="vosfichiers">
        <button>Créer un nouveau fichier</button>
        <button>Partagé avec moi</button>
        <button>Supprimer</button>
        <button>Inviter un ami</button>

        <table>
            <tr>
                <th>Nom</th>
                <th>Date de modification</th>
                <th>Taille</th>
                <th>Propriétaire</th>
                <th>Membres</th>
            </tr>
            <tr>
                <td><a href="#"><img src="../assets/dossier.png" alt="dossier"> Photos</a></td>
                <td>14/10/2021</td>
                <td>{{ taille1 }}Go</td>
                <td>Edomiyas</td>
                <td>Louis, Imen...</td>
            </tr>
            <hr>
            <tr>
                <td><a href="#"><img src="../assets/fichier.png" alt="fichier"> logo.png</a></td>
                <td>12/10/2021</td>
                <td>{{ taille2 }}Mo</td>
                <td>Louis</td>
                <td>Edomiyas, Imen...</td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
#vosfichiers{
    background-color: #FFF;
}

button{
    margin: 2rem 0rem 0rem 3rem;
    background-color: #EFFAFF;
    color: #000000;
    padding: .5rem;
    border-radius: .5rem;
    border: 0.1rem solid #037682;
    cursor: pointer;
}

button:hover{
    background-color: #037682;
    color: #FFF;
}

table{
    margin: 4rem 0rem 0rem 5rem;
    padding-bottom: 2rem;
}

table tr th{
    padding: 1rem;
}

table tr td{
    padding: 1.5rem 0rem 0rem 1rem;
}

a{
    background-color: #EFFAFF;
    padding: .3rem;
    border-radius: .2rem;
    text-decoration: none;
    color: #000000;
}

img{
    width: 1rem;
}

hr{
    position: absolute;
    width: 40rem;
}

</style>