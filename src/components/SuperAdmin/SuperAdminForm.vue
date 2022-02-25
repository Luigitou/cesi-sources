<script>

export default {
    name: 'SuperAdminForm',
    data (){
        return {

        }
    },
}
</script>

<template>
    <div id="superadminform">

        <form action="#" method="POST">
            <div class="wrapperIdent">
                <div class="wrappernom">
                    <label for="nom" id="nom">Nom</label> <br>
                    <input type="text" id="nomi" required>
                </div>
                <div class="wrappernom">   
                    <label for="prenom" id="prenom">Prenom</label> <br>
                    <input type="text" id="prenomi" required>
                </div>
            </div>
            <div class="wrapperMail">
                <label for="email" id="email">Email</label> <br>
                <input type="text" id="emaili" required>
            </div>
            <div class="wrapperAdresse">
                <div class="wrapperadresse">
                    <label for="adresse" id="adresse">Adresse</label> <br>
                    <input type="text" id="adressei">
                </div>
                <div class="wrapperadresse">
                    <label for="codepostal" id="codepostal">Code postal</label> <br>
                    <input type="text" id="codepostali">
                </div>
                <div class="wrapperadresse">
                    <label for="ville" id="ville">Ville</label> <br>
                    <input type="text" id="villei">
                </div>
            </div>
            <div class="wrapperRadio">
                <input type="radio" id="superadminr" value="Super administrateur" name="admin">
                <label for="superadmin" id="superadmin">Super administrateur</label>
                <input type="radio" id="adminr" value="Administrateur" name="admin" checked>
                <label for="admin" id="admin">Administrateur</label>
            </div>
                <br>
            <input type="submit" value="Creer un compte" id="submit">
        </form>
    
     
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#superadminform{
    
    form{
        margin: 0 auto;
        .wrapperIdent{
            display: flex;
            justify-content: space-evenly;
            width: 50%;
            align-items: center;

            .wrappernom{
                display: flex;
                flex-direction: column;
                width: 40%;
                margin: 0% 2% 0% 2%;
            }

            input[type='text']{
                border: 1px solid $color-special;
                width: 15rem;
                height: 1.8rem;
            }

            label{
                font-size: 1.2rem;
            }
        }
        .wrapperMail{
            display: flex;
            flex-direction: column;
            width: 40%;
            margin: 1% 2% 0% 3%;

            input[type='text']{
                border: 1px solid $color-special;
                width: 38rem;
                height: 1.8rem;
            }

            label{
                font-size: 1.2rem;
            }
        }

        .wrapperAdresse{
            display: flex;
            justify-content: space-evenly;
            width: 50%;
            align-items: center;

            .wrapperadresse{
                display: flex;
                flex-direction: column;
                width: 25%;
                margin: 2.5% 2% 0% 5%;
            }

            input[type='text']{
                border: 1px solid $color-special;
                width: 15rem;
                height: 1.8rem;
            }

            label{
                font-size: 1.2rem;
            }

            #codepostal{
                margin: 0% 0% 0% 20%;
            }

            #codepostali{
                width: 6rem;
                margin: 0% 0% 0% 20%;
            }

            #villei{
                width: 6.3rem;
            }
        }

        #superadmin, #admin{
            font-size: 1.2rem;
        }

        #superadminr, #adminr{          
            margin: 3% 2% 0% 3%;
        }

        #submit{
            display: flex;
            justify-content: center;
            background-color: $color-special;
            color: #fff;
            border: 1px solid $color-special;
            width: 38.7rem;
            height: 2.5rem;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            margin: 2% 0% 0% 2.5%;
        }
    }
    /*    padding: 1rem;

        input[type='text'], #emaili{
            border: 1px solid $color-special;
            margin-bottom: 2rem;
            width: 15rem;
            height: 1.8rem;
        }

        #nomi{
            display: flex;
            margin: 1rem 0rem 0rem .9rem;
        }

        #prenom{
            display: block;
            margin: -5.5rem 0rem 0rem 20rem;
        }

        #prenomi{
            margin: -.3rem 0rem 0rem 21rem;
        }

        #email{
            display: flex;
            margin: 0rem 0rem 0rem 0rem;
        }

        #emaili{
            width: 35rem;
            margin-left: .9rem;
        }
    
        #adresse{
            display: block;
            margin-top: -2rem;
        }

        #adressei{
            margin-left: .9rem;
        }

        #codepostal{
            display: block;
            margin: -7.5rem 0rem 0rem 19rem;
        }

        #codepostali{   
            width: 5rem;
            margin: -.3rem 0rem 0rem 20rem;
        }

        #ville{
            display: block;
            margin: -5.5rem 0rem 0rem 28rem;
        }

        #villei{
            width: 7rem;
            margin: -.3rem 0rem 0rem 28.9rem;
        }

        label{
            padding: 1rem;
            font-size: 1.2rem;
        }

        #submit{
            background-color: $color-special;
            color: #fff;
            border: 1px solid $color-special;
            margin-top: 2rem;
            width: 36.4rem;
            height: 2.5rem;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
        }

        #superadminr, #adminr{
            margin: 3rem 0rem 0rem 0rem;
        }
    */
}


</style>