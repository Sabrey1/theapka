<template>
    <div>
        <p class="text-center">ចំណងដៃ</p>
        <div class="flex flex-col items-center">
            <img
                class="w-40 h-10" 
                src="/assets/images/divid_gold.png" 
            />
        </div>

        <div class="relative">
            <div class="p-4">
                <img src="/assets/images/wedding_image.png" class="w-full" />
            </div>

            <!-- Overlay -->
            <div class="absolute top-0 left-0 right-0">
                <div class="grid grid-cols-2 p-2 m-8 text-white gap-3">
                    <div class="items-center flex justify-center bg-black/50 rounded h-10">
                        <p>Riel</p>
                    </div>
                    <div class="items-center flex justify-center bg-black/50 rounded">
                        <p>USD</p>
                    </div>
                </div>
                
                <div class="p-2 justify-center mx-16 bg-white rounded">
                    <img class="" src="/assets/images/qr_code.png" />
                    <p class="text-center text-2xl font-bold text-black mb-2">Sabrey</p>
                </div>

                <div class="mt-8 text-center">
                    <p class="text-white">សូមស្កែនដើម្បីចំណងដៃ</p>
                    <p class="text-white font-bold">ការទូទាត់តាម KHQR</p>
                </div>
            </div>
        </div>
    </div>
</template>