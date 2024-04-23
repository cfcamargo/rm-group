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
            </div>

            <div class="text-secondary text-justify flex flex-col gap-4 my-8 font-semibold">
              <p>Você está pronto para uma experiência empolgante? Nosso evento está chegando e você não vai querer perder! Junte-se a nós para uma jornada cheia de insights, inspiração e aprendizado. </p>
              <p>Inscreva-se agora para garantir seu lugar exclusivo e acompanhar cada momento. Estamos ansiosos para compartilhar esse momento especial com você!</p>
            </div>

            <BaseButton text="CONFIRMAR PRESENÇA" url="https://docs.google.com/forms/d/e/1FAIpQLSfGOTcMGbzMPirqBCj26CKNx-c7NAgT3egcgtq1m4RW5R_LMg/viewform?usp=sf_link" />

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