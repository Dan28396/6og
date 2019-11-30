<template>
    <div class="app-inst__wrap">
        <AppButton :name="name"/>
        <Inst class="logo__inst__static inst"/>
    </div>
</template>

<script>
    import AppButton from "@/components/AppButton";
    import Inst from "@/components/Inst";

    export default {
        name: "AppInstButton",
        props:['name'],
        components: {Inst, AppButton}
    }
</script>

<style scoped>
    .app-inst__wrap {
        position: absolute;
        top: 40px;
        right: 7%;
        display: grid;
        grid-template-columns: 1fr 30px;
        column-gap: 20px;
    }


    @media all and (max-width: 1100px) {
        .app-inst__wrap {
            right: 80px;
        }
    }

    @media all and (max-width: 750px) {
        .inst {
            grid-column: 1;
            width: 30px;
            justify-self: flex-end;
        }

    }
    @media all and (max-width: 850px) {
        .app-inst__wrap{
            right: 60px;
        }

        .app-inst__wrap {
            grid-template-columns: auto;
            grid-template-rows: 1fr 1fr;
            row-gap: 20px;
        }
        @media all and (max-width: 450px) {
            .app-inst__wrap{
                right: 30px;
            }
            
        }

    }

</style>