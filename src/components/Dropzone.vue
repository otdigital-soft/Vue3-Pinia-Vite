<template>
  <!-- <div class="bg-white">
	  <div class="mt-1 flex justify-center px-6 pt-10 pb-8 border-2 border-gray-300 border-dashed rounded-md">
	    <div class="space-y-1 text-center">
	      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
	        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	      </svg>
	      <div class="flex text-sm text-gray-600">
	        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
	          <span>cliquez pour sélectionner des fichiers</span>
	          <input>
	        </label>
	        <p class="pl-1">Faites glisser et déposez les fichiers ici ...</p>
	  		<p class="pl-1">ou faites glisser et déposez des fichiers ici.</p>
	      </div>
	      <p class="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
	    </div>
	  </div>
	</div> -->
  <div
    id="dropzone"
    class="dropzone px-6 pt-10 pb-8 border-2 border-gray-300 border-dashed rounded-md"
  >
    <div class="dz-message" data-dz-message>
      <p class="text-sm text-gray-600">
        <span
          class="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
          >cliquez pour sélectionner des fichiers</span
        >
        ou faites glisser et déposez des fichiers ici.
      </p>
    </div>
  </div>
</template>
<script>
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";
export default {
  name: "Dropzone",
  mounted() {
    const dropzone = new Dropzone("#dropzone", {
      url: "/file/post",
      maxFilesize: 2, // MB
    });
    dropzone.on("addedfile", (file) => {
      console.log(`File added: ${file.name}`);
    });
  },
};
</script>
