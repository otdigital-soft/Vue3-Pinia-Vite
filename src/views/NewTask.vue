<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="lg:flex lg:items-center lg:justify-between mx-auto max-w-screen-md mb-10"
    >
      <div class="flex-1 min-w-0">
        <h2 class="mb-4 text-2xl font-semibold text-gray-900">
          Créer un ticket
        </h2>

        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 mb-4">
            <h3 class="mb-4 text-lg font-semibold text-gray-900">
              {{ $t("Titre") }}
            </h3>
            <input
              id="title"
              name="title"
              type="text"
              required
              class="form-input w-full rounded"
              placeholder="Titre"
            />
            <p class="mt-2 text-sm text-gray-600">
              Résumez brièvement le problème en une ou deux phrases
            </p>
          </div>

          <div class="col-span-6 mb-4">
            <h3 class="mb-4 text-lg font-semibold text-gray-900">
              {{ $t("Url") }}
            </h3>
            <input
              id="url"
              name="url"
              type="url"
              required
              class="form-input w-full rounded"
              placeholder="Indiquez l'URL où votre bug s'est produit"
            />
            <p class="mt-2 text-sm text-gray-600">
              Visitez la page où le bug apparaît et copiez et collez l'URL du
              champ URL de votre navigateur dans le champ URL du formulaire.
            </p>
          </div>

          <div class="col-span-6 sm:col-span-3 mb-4">
            <h3 class="mb-4 text-lg font-semibold text-gray-900">
              {{ $t("Prioritée") }}
            </h3>
            <select name="priority" class="form-select rounded w-full">
              <option>Faible</option>
              <option>Moyenne</option>
              <option>Élevée</option>
            </select>
            <p class="mt-2 text-sm text-gray-600">
              Priorité par rapport aux autres problèmes.
            </p>
          </div>

          <div class="col-span-6 sm:col-span-3 mb-4">
            <h3 class="mb-4 text-lg font-semibold text-gray-900">
              {{ $t("Livraison souhaité") }}
            </h3>
            <Datepicker
              v-model="due_date"
              autoApply
              :enableTimePicker="false"
              locale="fr"
              :format-locale="dp_fr"
              format="dd/MM/yyyy"
              cancelText="Annuler"
              selectText="Selectionner"
            >
              <template #dp-input="{ value, onInput, onEnter, onTab, onClear }">
                <input
                  type="text"
                  class="form-input w-full rounded pl-10"
                  :value="value"
                  placeholder="__/__/__"
                />
              </template>
              <template #input-icon>
                <CalendarIcon class="w-5 h-5 text-gray-500 ml-2" />
              </template>
            </Datepicker>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-screen-md mb-10">
      <h3 class="text-lg font-semibold text-gray-900">
        {{ $t("Pièces jointes") }}
      </h3>
      <p class="mb-4 text-sm text-gray-600">
        Chaque bug doit être documenté avec au moins une pièce jointe. Remarque
        : Les pièces jointes ne remplacent pas les informations écrites dans
        votre rapport.
      </p>
      <Dropzone />
    </div>

    <div class="mx-auto max-w-screen-md mb-10">
      <h3 class="text-lg font-semibold text-gray-900">
        {{ $t("Description") }}
      </h3>
      <p class="mb-4 text-sm text-gray-600">
        Décrivez le problème avec autant de détails possible.
      </p>
      <Editor
        api-key="h5l2em6t08rvu00gp9krxk5aqe9r4czq2xc86zozovgy651o"
        :init="{
          height: 500,
          menubar: false,
          plugins: 'lists link',
        }"
        toolbar="undo redo | blocks | bold italic underline | bullist numlist outdent indent"
        initial-value="<b>Ajoutez une description (requis)</b><br><em>Description du bug, nouvelle fonctionnalité</em><br><br><br><br><b>Étapes pour reproduire le problème</b><br><em>Etape 1, Etape 2 ...</em><br><br><br><br><b>Résultat attendu</b><br><em>Description du résultat attendu</em><br><br>"
      />
    </div>
  </div>
</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { fr as dp_fr } from "date-fns/locale";
import Dropzone from "@/components/Dropzone.vue";
import { CalendarIcon } from "@heroicons/vue/outline";
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "NewTask",
  components: {
    Datepicker,
    CalendarIcon,
    Editor,
    Dropzone,
  },
  data() {
    return {
      due_date: null,
      dp_fr,
    };
  },
};
</script>
