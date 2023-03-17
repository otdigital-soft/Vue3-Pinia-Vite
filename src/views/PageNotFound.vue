<template>
  <div class="flex items-center h-full p-16 text-gray-800">
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8"
    >
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl text-gray-400">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl">
          Désolé, nous n'avons pas trouvé cette page.
        </p>
        <p class="mt-4 mb-8 text-gray-600">
          Mais ne vous inquiétez pas, vous pouvez retourner sur notre page
          d'accueil.
        </p>
        <router-link
          rel="noopener noreferrer"
          to="/"
          class="px-8 py-3 font-semibold rounded bg-blue-600 text-gray-50"
          >Retour à la page d'accueil</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>
