<template>
    <div class="flex flex-col min-h-screen ">
        <header>
            <div class="container mx-auto flex h-15 px-6 md:px-0">
                <Logo/>
                <div class="grow flex justify-center items-center text-sm leading-6 font-normal">
                    <div class="mx-3 content-center ">
                        <NuxtLink class="header-link " to="/">Форма</NuxtLink>
                    </div>
                    <div class="mx-3 content-center flex">
                        <NuxtLink class="header-link " to="/preview">Превью</NuxtLink>
                    </div>
                </div>
            </div>
        </header>
        <div class="container-w-616px mx-auto grow px-6 md:px-0">
            <Nuxt />
        </div>
        <footer>
            <div class="container mx-auto flex h-15 justify-center h-15 items-center text-sm px-6 md:px-0" >
                <p>
                    all rights reserved
                </p>
            </div>
        </footer>
    </div>
</template>

<style>

body{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
}

.container-w-616px{
  width: 616px;
}

@media screen and (max-width: 615px){ 
    .container-w-616px{
        width: 100%;
    }
}


.grow{
    flex-grow: 1;
}

header{
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}

.h-15{
    min-height: 76px;
}


.header-link{
    line-height: 24px;
    color: rgba(17, 17, 17, 0.48);
}

footer{
    background: #FAFAFA;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
}

/* Анимация перехода */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-active {
  opacity: 0;
}



</style>