<script>

export default{
    data(){
        return{
            categories: [
                'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday', 
                'business', 'car', 'change', 'communication', 'computers', 'cool', 'courage', 'dad', 'dating', 'death', 
                'design', 'dreams', 'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family', 
                'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 
                'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor', 
                'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 
                'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
            ],
            quote: null,
            author: null,
            error: null,
            category: '',
            currentCategory: '',
            apiKey: import.meta.env.VITE_API_KEY,
        }
    },
    methods: {
        async fetchQuote() {
            this.error = null;
            const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${this.category}`;

            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        'X-Api-Key': this.apiKey, 
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                if (data && data.length > 0) {
                    this.quote = data[0].quote; 
                    this.author = data[0].author || 'Unknown'; 
                    this.category = data[0].category; 
                    this.currentCategory = data[0].category;
                    console.log(currentCategory);
                } else {
                    this.quote = 'No quote found.';
                    this.author = '';
                    this.category = '';
                    this.currentCategory = '';
                }
            } catch (err) {
                this.error = err.message;
            }
        },
    },
    mounted() {
        this.fetchQuote();
    }
}

</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center bg-indigo-300">
        <div class="p-10 rounded-2xl bg-rose-500 w-11/12 md:w-1/2">
            <div class="bg-white rounded-2xl -rotate-[5deg] p-2">
                <div class="bg-white p-10 rounded-2xl shadow-all-sides  rotate-[5deg]">
                    <i class="fa-regular fa-star text-gray-300 absolute right-5 top-5 text-xl"></i>

                    <form method="post">
                        <label for="category">Select a category</label>
                        <select 
                            id="category" 
                            name="category" 
                            class="px-2 py-1 flex flex-col rounded-lg border-2 outline-none text-xs" 
                            v-model="category"
                        >
                            <option v-for="kategori in categories" :key="kategori" :value="kategori">{{ kategori }}</option>
                        </select>
                    </form>

                    <div class="my-5">       
                        <i class="fa-solid fa-quote-left text-gray-300 text-2xl absolute top-[90px] left-2"></i>
                        <p v-if="quote">{{ quote }}</p>
                        <p v-else>Loading...</p>
                        <i class="fa-solid fa-quote-right text-gray-300 text-2xl absolute right-4"></i>
                    </div>
                    <p class="text-xs mb-1">Category: <span class="capitalize">{{ currentCategory }}</span></p>
                    <p class="uppercase text-xs font-semibold italic">{{ author }}</p>
                    <div class="mt-10 flex justify-center">
                        <button class="bg-sky-500 text-white rounded-lg px-3 py-1" @click="fetchQuote">
                            Get Quote
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
