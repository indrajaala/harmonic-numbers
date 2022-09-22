import {defineStore} from 'pinia';
import {ref} from "vue";
import {generateHarmonicNumbers} from "../lib/harmonic-numbers.js";

export const useStore = defineStore('counter', () => {
    let harmonicNumbers = ref(null);
    let loading = ref(false)

    const getHarmonicNumbers = (rows, columns) => {

        loading.value = true;

        setTimeout(() => {
            harmonicNumbers.value = generateHarmonicNumbers(rows, columns);
            loading.value = false;
        }, 800)


    }

    return {getHarmonicNumbers, harmonicNumbers, loading}
})
