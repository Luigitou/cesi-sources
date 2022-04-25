<script>
export default {
  name: "SettingsMain",
};
</script>
<template>
    <router-link to="/tdb">
    <button>Fermer</button>
    </router-link>
    <div id='settings'>
        <h1>1. Votre contenu </h1>
        <p>(Re)sources relationnelles vous offre la possibilité de consulter et échanger du contenus entre citoyen afin de tisser des liens.</p>
        <p> Selon les Conditions d'utilisation de (Re)sources relationnelles, vos contenus vous appartiennent toujours. Nous ne revendiquons pas la propriété de vos contenus, à savoir les données, texte, informations et fichiers que vous créez.</p>
        <p>(Re)sources relationnelles vous permet également de commenter sur le contenu d'autres utilisateurs de (Re)sources relationnelles et de créer des groupes.</p>
        <p>Les ressources que vous créez sont tout d'abord consultés, puis, acceptés, puis, publiés.</p>
        <p>Nous ne communiquons ni vos fichiers, ni vos données à d'autres personnes, sauf dans les cas décrits dans nos Règles de confidentialité.</p>
        <p>Nous n'utilisons pas vos contenus à des fins de campagnes marketing ou promotionnelles.</p>
        <h1>2. Règlement du programme</h1>
        <p>Nous pouvons examiner vos contenus pour vérifier qu'ils ne sont pas illégaux et qu'ils n'enfreignent pas le Règlement du programme.</p>
        <p> Nous sommes également susceptibles de supprimer ou de refuser d'afficher les contenus dont nous pouvons raisonnablement penser qu'ils enfreignent nos propres règles ou la loi.</p>
        <p>Le fait que nous nous réservions ce droit ne signifie pas nécessairement que nous examinons les contenus. Dès lors, veuillez ne pas présumer que nous le faisons.</p>
        <h1>3. Règlement du programme concernant l'utilisation abusive et mise en application</h1>
        <p>Ce règlement est essentiel pour offrir aux utilisateurs de cette plateforme une expérience positive.</p>
        <p>Nous devons réprimer les utilisations abusives qui pourraient compromettre nos services, et nous demandons à chacun de respecter ce règlement afin de nous aider à atteindre notre objectif. Si une éventuelle infraction au présent règlement est portée à notre connaissance, nous examinons le contenu en question et prenons les mesures qui s'imposent. Nous pouvons ainsi restreindre l'accès au contenu, le supprimer, ou limiter ou désactiver l'accès d'un utilisateur au produit</p>
        <p>Son application peut faire l'objet d'exceptions motivées par des considérations artistiques, éducatives, documentaires ou scientifiques. D'autres enjeux importants pour le public peuvent également nous conduire à ne pas prendre de mesures en relation avec le contenu.</p>
        <p>Ce règlement pouvant être modifié à tout moment, nous vous recommandons de consulter cette page régulièrement.</p>
    </div>
</template>
<style lang="scss" scoped>
div{
  background-color: white;
  width: 90%;
  padding: 5%;
  border: 1%;
  margin: 1%;
}
button{
    margin: 5rem 0rem 0rem 80rem;
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
</style>