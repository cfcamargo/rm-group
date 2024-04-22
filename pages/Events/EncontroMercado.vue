<template>
    <Container class="xs:h-[1400px] md:h-dvh w-full pb-20">
        <div class="grid xs:grid-cols-1 md:grid-cols-2 xs:gap-0 md:gap-20 h-full w-full items-center">
          <div class="order-1 w-full relative xs:hidden md:flex">
            <NuxtImg src="/cover-event.png" class="w-full"/>
            <div class="w-[400px] flex bg-primary h-[170px] rounded-lg absolute left-40 -bottom-20">
              <div class="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-primary -translate-y-[15px] -translate-x-1/2">
                <NuxtImg src="/nicolereis.jpeg" class="-mt-8 object-cover"/>
              </div>

              <div class="-ml-10 py-6 text-white text-center md:w-[200px]">
                <span>Participação:</span>
                <p class="font-bold text-3xl text-secondary">NICOLI REIS</p>
                <span>Assessora Financeira</span>
                <p class="font-bold text-xl text-secondary mt-4">FAMI CAPITAL</p>
              </div>
            </div>
          </div>

          <div class="order-2 xs:flex md:hidden flex-col gap-6 w-full justify-center items-center px-8">
            <NuxtImg src="/cover-event.png" class="w-full"/>
            <div class="w-full relative mt-4">
              <div class="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-primary z-50 absolute top-5">
                <NuxtImg src="/nicolereis.jpeg" class="-mt-2 object-cover"/>
              </div>

              <div class="text-white text-center bg-primary rounded-lg shadow absolute w-full top-0 z-0 pl-20">
                <span class="text-sm">Participação:</span>
                <p class="font-bold text-2xl text-secondary">NICOLI REIS</p>
                <span>Assessora Financeira</span>
                <p class="font-bold text-lg text-secondary mt-4">FAMI CAPITAL</p>
              </div>
            </div>
          </div>

          <div class="xs:order-1 md:order-2 flex flex-col items-center justify-center w-full">
            <div class="flex flex-col justify-center items-center">
              <nuxt-img src="/evt-logo.png" class="w-[400px]"/>
              <p class="flex gap-2 items-center font-bold">
                <div>
                  <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.6498 5.87206H23.9113C26.3259 5.88087 38.5606 5.96899 41.8594 6.85612C42.8566 7.12686 43.7654 7.6546 44.4948 8.38658C45.2242 9.11856 45.7487 10.0292 46.0159 11.0274C46.3126 12.1436 46.5212 13.6212 46.6622 15.1457L46.6916 15.4512L46.7562 16.215L46.7797 16.5205C46.9706 19.2054 46.9941 21.7199 46.9971 22.2692V22.4895C46.9941 23.0594 46.9677 25.7442 46.7562 28.5407L46.7327 28.8492L46.7062 29.1547C46.5594 30.8349 46.342 32.5034 46.0159 33.7313C45.7487 34.7295 45.2242 35.6401 44.4948 36.3721C43.7654 37.1041 42.8566 37.6318 41.8594 37.9026C38.4519 38.8191 25.5004 38.8837 23.7056 38.8866H23.2885C22.3808 38.8866 18.6267 38.869 14.6904 38.7339L14.1911 38.7162L13.9355 38.7045L13.4332 38.6839L12.9309 38.6634C9.67025 38.5194 6.56531 38.2874 5.13475 37.8996C4.13784 37.6291 3.22934 37.1018 2.49996 36.3704C1.77059 35.639 1.24586 34.729 0.978188 33.7313C0.652125 32.5064 0.43475 30.8349 0.287875 29.1547L0.264375 28.8462L0.240875 28.5407C0.0950676 26.5503 0.0147325 24.5557 0 22.56L0 22.1987C0.005875 21.5671 0.029375 19.3846 0.188 16.9758L0.208563 16.6732L0.217375 16.5205L0.240875 16.215L0.3055 15.4512L0.334875 15.1457C0.475875 13.6212 0.684437 12.1407 0.981125 11.0274C1.24835 10.0292 1.77288 9.11856 2.50228 8.38658C3.23169 7.6546 4.14043 7.12686 5.13769 6.85612C6.56825 6.47424 9.67319 6.23924 12.9338 6.09237L13.4332 6.0718L13.9384 6.05418L14.1911 6.04537L14.6934 6.02481C17.489 5.93493 20.2858 5.88499 23.0829 5.87499L23.6498 5.87206ZM18.8 15.3014V29.4543L31.0112 22.3808L18.8 15.3014Z" fill="#CF2424"/>
                  </svg>
                </div>
                <span>
                  TRANSMISSÃO AO VIVO
                </span>

              </p>
            </div>

            <div class="text-secondary text-justify flex flex-col gap-4 mt-8 font-semibold">
              <p>Você está pronto para uma experiência empolgante? Nosso evento está chegando e você não vai querer perder! Junte-se a nós para uma jornada cheia de insights, inspiração e aprendizado. </p>
              <p>Inscreva-se agora para garantir seu lugar e receber o link exclusivo da transmissão para acompanhar cada momento. Estamos ansiosos para compartilhar esse momento especial com você!</p>
            </div>

            <form @submit.prevent="submit" class="w-full mt-8 flex flex-col gap-2">

              <div class="w-full border rounded flex items-center gap-2 px-2" :class="invalidForm && form.name === '' ? 'border-red-500' : 'border-primary'">
                <label for="name" class="text-secondary font-semibold">*Nome:</label>
                <input v-model="form.name" type="text" id="name" class="outline-none w-full px-2 py-2"/>
              </div>
              <div class="w-full border rounded flex items-center gap-2 px-2 border-primary">
                <label for="name" class="text-secondary font-semibold">Telefone:</label>
                <input v-model="form.phone" type="text" id="name" class="outline-none w-full px-2 py-2" v-maska data-maska="(##)# ####-####" />
              </div>
              <div class="w-full border rounded flex items-center gap-2 px-2" :class="invalidForm && form.email === '' ? 'border-red-500' : 'border-primary'">
                <label for="name" class="text-secondary font-semibold">*Email:</label>
                <input v-model="form.email" type="email" id="name" class="outline-none w-full px-2 py-2"/>
              </div>
              <span class="text-red-500" v-if="invalidForm.length>0">{{ invalidForm }}</span>
              <span class="text-primary" v-if="confirmInscription">Inscrição ralizada com sucesso</span>
              <button class="w-full flex items-center hover:brightness-105 justify-center py-4 bg-primary rounded" :disabled="loading">INSCREVER-SE</button>
            </form>

          </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
const { submitData } = useGoogleSheets();

definePageMeta({
  layout: 'events'
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
})

const invalidForm = ref('')
const confirmInscription = ref(false)
const loading = ref(false)

const submit = async () => {
  if (form.name === '' || form.email === '') {
    confirmInscription.value = false
    invalidForm.value = '*Preencha os campos obrigatórios para se inscrever'
    return
  }

  loading.value = true
  const result = await submitData(form)
  if (result.status === 200) {
    confirmInscription.value = true
    form.name = ''
    form.email = ''
    form.phone = ''
  } else {
    invalidForm.value = 'Ocorreu um erro ao realizar a inscrição, tente novamente mais tarde.'
    confirmInscription.value = false
  }
  loading.value=false
}
</script>